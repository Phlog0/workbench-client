import { position } from '@chakra-ui/react';
import { createSlice, current } from '@reduxjs/toolkit';
const orderItems = (items, tireId) => {
  const curTire = items.find(
    (item) => item.id === tireId
  );

  let newCurTire = { ...curTire, style: { height: curTire.style.height, width: 350 } }
  let i = 0;
  const allTires = items.filter(
    (item) => item.type.match("TireNodeType")
  );
  const allShkafs = items.filter(
    (item) => item.type.match("ElectricalPanelsNodeType")
  ).sort((a, b) => b.indexInGroup - a.indexInGroup);

  // const allShkafsInGroup = items.filter(item => item.indexInGroup !== null).sort((a, b) => a.indexInGroup - b.indexInGroup)

  // const allShkafsNotInGroup = items.filter(item => item.indexInGroup === null)

  // const allShkafs = [...allShkafsInGroup, ...allShkafsNotInGroup]
  // console.log('aaaalllshkaff>>>>>>>>>>>>>', allShkafs);
  const mainNode = items.find(
    (item) => item.type.match("MainSchemeType")
  );
  const orderedAllShkafs = allShkafs.map((item, index) => {
    if (item.parentNode === newCurTire.id) {
      if (i !== 0) newCurTire.style.width += 300;
      if (item.indexInGroup === null) return { ...item, position: { y: 0, x: 300 * i++ + 30 }, indexInGroup: index };
      return { ...item, position: { y: 0, x: 300 * i++ + 30 } };
    }
    return item;
  });

  const editedTiresWidth = allTires.map(item => {
    if (item.id === newCurTire.id) return newCurTire
    return item
  })

  const finalTires = [editedTiresWidth[0]]
  for (let i = 1; i < editedTiresWidth.length; i++) {

    const newEditedTire = {
      ...editedTiresWidth[i],
      position: {
        x: 325 + finalTires[i - 1].position.x + finalTires[i - 1].style.width,
        y: editedTiresWidth[i - 1].position.y
      }

    }
    finalTires.push(newEditedTire)

  }


  return [mainNode, ...finalTires, ...orderedAllShkafs];
};

export default orderItems;
