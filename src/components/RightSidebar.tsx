import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
} from "../store/nodesSlice";
import SwitchingDevice from "./RightSidebar/SwitchingDevice";

const RightSidebar: FC = () => {

  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === currentItemId)
  );



  const cellOptions = currentItemProperties?.cellOptions;
  const currentCellOption = currentItemProperties?.currentCellOption;
  const commutationOptions = currentItemProperties?.commutationOptions;
  const currentCommutationOption = currentItemProperties?.currentCommutationOption;
  const transformerOptions = currentItemProperties?.transformatorOptions;
  const currentTransformatorOption = currentItemProperties?.currentTransformatorOption;




  const dispatch = useAppDispatch();
  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;

    if (select.id === "cellType")
      dispatch(
        updateCellType({
          id: currentItemId,
          index: select.selectedIndex,
        })
      );

    if (select.id === "commutationType")
      dispatch(
        updateCommutationType({
          id: currentItemId,
          index: select.selectedIndex,
        })
      );
    if (select.id === "transformatorType")
      dispatch(
        updateTransformatorType({
          id: currentItemId,
          index: select.selectedIndex,
        })
      );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectItem}>
        <label htmlFor="cellType">Тип ячейки</label>
        <select name="cellType" id="cellType" onChange={(e) => selectChange(e)}>
          {cellOptions && cellOptions.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                data-key={index}
                selected={index === currentCellOption ? true : false}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>

      
      <div className={styles.selectItem}>
        <label htmlFor="commutationType">Тип коммутационного аппарата</label>
        <select
          name="commutationType"
          id="commutationType"
          onChange={(e) => selectChange(e)}
        >
          {commutationOptions && commutationOptions.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                data-key={index}
                selected={index === currentCommutationOption ? true : false}
              >
                {item}
              </option>
            );
          })}
        </select>
        <SwitchingDevice id={currentItemId} />
      </div>


      <div className={styles.selectItem}>
        <label htmlFor="transformatorType">Трансформаторы тока</label>
        <select
          name="transformatorType"
          id="transformatorType"
          onChange={(e) => selectChange(e)}
        >
          {transformerOptions?.length &&
            transformerOptions.map((item, index) => {
              return (
                <option
                  key={index}
                  selected={index === currentTransformatorOption ? true : false}
                >
                  {item}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default RightSidebar;
