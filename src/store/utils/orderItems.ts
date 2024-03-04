const orderItems = (items, tire) => {
  let i = 0;
  tire.style.width = 60;
  const allTires = items.filter(
    (item) => item.id.match("group")
    // && item.id > tire.id
  );
  const orderedItems = items.map((item, index) => {
    // console.log(item.parentNode, tire.id);
    if (item.parentNode === tire.id) {
      // console.log(tire);
      tire.style.width += 300;
      // for (let j = 0; j < allTires.length; j++){
      //   allTires[j].position = {
      //     ...allTires[j].position,
      //     x: allTires[j].style.width  * (j),
      //   };
      // }
      allTires[0].position = {
        ...allTires[0].position,
        x: 0,
      };
      if (allTires[1])
        allTires[1].position = {
          ...allTires[1].position,
          x: allTires[0].style.width + 325,
        };
        if (allTires[2])
      allTires[2].position = {
        ...allTires[2].position,
        x: allTires[0].style.width + allTires[1].style.width + 325 * 2,
      };
      if (allTires[3])
      allTires[3].position = {
        ...allTires[3].position,
        x:
          allTires[0].style.width +
          allTires[1].style.width +
          allTires[2].style.width +
          325 * 3,
      };

      // for (let i = allTires.length; i > 0; i--) {
      //   for (let j = 0; j < allTires.length - i; j++) {
      //     allTires[i].position = {
      //       ...allTires[i].position,
      //       x: allTires[j].style.width + 325 * (j + 1),
      //     };
      //   }
      // }

      return { ...item, position: { y: 0, x: 300 * i++ + 30 } };
    }
    return item;
  });
  return orderedItems;
};

export default orderItems;
