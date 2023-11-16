import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
} from "../store/nodesSlice";
import SwitchingDevice from "../features/SwitchingDevice";
import SwitchingTransformator from "../features/SwitchingTransformator";
import { Select } from "@chakra-ui/react";
import SwitchOPN from "../features/SwitchOPN";
import MySelect from "../shared/MySelect";

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
        <MySelect
          tag={"cellType"}
          label={"тип ячейки"}
          options={cellOptions}
          id={currentItemId}
          current={currentCellOption}
        />
      </div>
      <div className={styles.selectItem}>
        <MySelect
          tag={"commutationType"}
          label={"Тип коммутационного аппарата"}
          options={commutationOptions}
          id={currentItemId}
          current={currentCommutationOption}
        />

        <SwitchingDevice id={currentItemId} />
      </div>

      <div className={styles.selectItem}>
        <MySelect
          tag={"transformatorType"}
          label={"Трансформаторы тока"}
          options={transformerOptions}
          id={currentItemId}
          current={currentTransformatorOption}
        />

        <SwitchingTransformator id={currentItemId} />
        <SwitchOPN id={currentItemId} />
      </div>
    </div>
  );
};

export default RightSidebar;
