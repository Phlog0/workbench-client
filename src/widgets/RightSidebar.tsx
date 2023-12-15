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
import MicroprocessorProtectionDeviceAndAutomation from "../features/MicroprocessorProtectionDeviceAndAutomation";
import ElectromagneticLocking from "../features/ElectromagneticLocking";
import InstrumentCurrentTransformers from "../features/InstrumentCurrentTransformers";
import VoltageTransformers from "../features/VoltageTransformers";
import CurrentTransducersType1 from "../features/CurrentTransducersType1";
import CurrentTransducersType2 from "../features/CurrentTransducersType2";
import FrequencyСonvertersType1 from "../features/FrequencyConvertersType1";
import FrequencyСonvertersType2 from "../features/FrequencyConvertersType2";
import VoltageTransducersType1 from "../features/VoltageTransducersType1";
import VoltageTransducersType2 from "../features/VoltageTransducersType2";
import PowerTransducersType1 from "../features/PowerTransducersType1";
import PowerTransducersType2 from "../features/PowerTransducersType2";
import RatedCurrentOfTheMainCircuits from "../features/RatedCurrentOfTheMainCircuits";
import FrequencyConvertersType1 from "../features/FrequencyConvertersType1";
import FrequencyConvertersType2 from "../features/FrequencyConvertersType2";

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
        <RatedCurrentOfTheMainCircuits id={currentItemId}/>
        <SwitchingTransformator id={currentItemId} />
        <SwitchOPN id={currentItemId} />
        <MicroprocessorProtectionDeviceAndAutomation  id={currentItemId}/>
        <ElectromagneticLocking  id={currentItemId}/>
        <InstrumentCurrentTransformers  id={currentItemId}/>
        <VoltageTransformers  id={currentItemId}/>
        <CurrentTransducersType1 id={currentItemId}/>
        <CurrentTransducersType2 id={currentItemId}/>
        <FrequencyConvertersType1 id={currentItemId}/>
        <FrequencyConvertersType2 id={currentItemId}/>
        <VoltageTransducersType1 id={currentItemId}/>
        <VoltageTransducersType2 id={currentItemId}/>
        <PowerTransducersType1 id={currentItemId}/>
        <PowerTransducersType2 id={currentItemId}/>
      </div>
    </div>
  );
};

export default RightSidebar;
