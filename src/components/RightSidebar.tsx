import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
} from "../store/nodesSlice";
import SwitchingDevice from "./RightSidebar/SwitchingDevice";
import SwitchingTransformator from "./RightSidebar/SwitchingTransformator";
import { Select } from "@chakra-ui/react";
import SwitchOPN from "./RightSidebar/SwitchOPN";

const RightSidebar: FC = () => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === currentItemId)
  );

  const selectProperties = useAppSelector((state) => state.nodes.properties);

  const cellOptions = selectProperties?.cellOptions;
  const currentCellOption = currentItemProperties?.currentCellOption;
  const commutationOptions = selectProperties?.commutationOptions;
  const currentCommutationOption =
    currentItemProperties?.currentCommutationOption;
  const transformerOptions = selectProperties?.transformatorOptions;
  const currentTransformatorOption =
    currentItemProperties?.currentTransformatorOption;

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
        <Select
          name="cellType"
          id="cellType"
          onChange={(e) => selectChange(e)}
          // value={currentCellOption}
        >
          {cellOptions &&
            cellOptions.map((item, index) => {
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
        </Select>
      </div>

      <div className={styles.selectItem}>
        <label htmlFor="commutationType">Тип коммутационного аппарата</label>
        <Select
          name="commutationType"
          id="commutationType"
          onChange={(e) => selectChange(e)}
          // value={currentCommutationOption}
        >
          {commutationOptions &&
            commutationOptions.map((item, index) => {
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
        </Select>
        <SwitchingDevice id={currentItemId} />
      </div>

      <div className={styles.selectItem}>
        <label htmlFor="transformatorType">Трансформаторы тока</label>
        <Select
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
        </Select>
        <SwitchingTransformator id={currentItemId} />
        <SwitchOPN id={currentItemId} />
      </div>
    </div>
  );
};

export default RightSidebar;
