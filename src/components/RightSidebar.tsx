import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateCellType, updateCommutationType } from "../store/nodesSlice";

const RightSidebar: FC = () => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === currentItemId)
  );

  const currentCellType = currentItemProperties?.currentCellType;

  // console.log(currentItemProperties.prop1, currentItemProperties.prop2,currentItemProperties.prop3)

  const dispatch = useAppDispatch();
  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;
    const option = Array.from(event.target.options).find(
      (item) => select.selectedIndex === +item.dataset.key
    );

    console.log(option);
    const value = select.value;

    // const key = event.target.key;
    // console.log(key, value);
    if (select.id === "cellType")
      dispatch(
        updateCellType({ id: currentItemId, key: option?.dataset.key, value })
      );

    if (select.id === "commutationType")
      dispatch(
        updateCommutationType({
          id: currentItemId,
          key: option?.dataset.key,
          value,
        })
      );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectItem}>
        <label htmlFor="cellType">Тип ячейки</label>
        <select name="cellType" id="cellType" onChange={(e) => selectChange(e)}>
          {Object.entries(currentItemProperties?.cellType).map(
            (item, index) => {
              return (
                <option
                  key={index + 1}
                  value={item[1]}
                  data-key={index}
                  selected={
                    `prop${index + 1}` === currentCellType ? true : false
                  }
                >
                  {item[1]}
                </option>
              );
            }
          )}
          {/* {Array(3)
            .fill("")
            .map((item, index) => {
              return (
                <option
                  key={index + 1}
                  value={index + 1}
                  selected={index + 1 === currentItemProperties?.prop1 ? true : false}
                >

                </option>
              );
            })} */}
        </select>
      </div>
      <div className={styles.selectItem}>
        <label htmlFor="commutationType">Тип коммутационного аппарата</label>
        <select
          name="commutationType"
          id="commutationType"
          onChange={(e) => selectChange(e)}
        >
          {Object.entries(currentItemProperties?.commutationType).map(
            (item, index) => {
              return (
                <option
                  key={index + 1}
                  value={item[1]}
                  data-key={index}
                  selected={
                    `prop${index + 1}` === currentCellType ? true : false
                  }
                >
                  {item[1]}
                </option>
              );
            }
          )}
        </select>
      </div>
      <div className={styles.selectItem}>
        <label htmlFor="prop3">Транзисторы</label>
        <select name="" id="prop3" onChange={(e) => selectChange(e)}>
          {Array(3)
            .fill("")
            .map((item, index) => {
              return (
                <option
                  key={index + 1}
                  value={index + 1}
                  selected={
                    index + 1 === currentItemProperties?.prop3 ? true : false
                  }
                >
                  {index + 1}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default RightSidebar;
