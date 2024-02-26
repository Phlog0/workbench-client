import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
} from "../store/nodesSlice";

import { Select } from "@chakra-ui/react";
import SwitchOPN from "../features/SwitchOPN";
import MySelect from "../shared/MySelect";
import MicroprocessorProtectionDeviceAndAutomation from "../features/MicroprocessorProtectionDeviceAndAutomation";
import ElectromagneticLocking from "../features/ElectromagneticLocking";
import InstrumentCurrentTransformers from "../features/InstrumentCurrentTransformers";
import VoltageTransformers from "../features/VoltageTransformers";
import CurrentTransducersType1 from "../features/CurrentTransducersType1";
import CurrentTransducersType2 from "../features/CurrentTransducersType2";

import VoltageTransducersType1 from "../features/VoltageTransducersType1";
import VoltageTransducersType2 from "../features/VoltageTransducersType2";
import PowerTransducersType1 from "../features/PowerTransducersType1";
import PowerTransducersType2 from "../features/PowerTransducersType2";
import RatedCurrentOfTheMainCircuits from "../features/RatedCurrentOfTheMainCircuits";
import FrequencyConvertersType1 from "../features/FrequencyConvertersType1";
import FrequencyConvertersType2 from "../features/FrequencyConvertersType2";
import CircuitBreakers from "../features/CircuitBreakers";
import ElectricityMeter from "../features/ElectricityMeter";
import TransformersForOwnNeeds from "../features/TransformersForOwnNeeds";
import CurrentTransformers from "../features/CurrentTransformers";
import TypeOfCell from "../features/TypeOfCell";
import TypeOfSwitchingDevice from "../features/TypeOfSwitchingDevice";
import ZeroSequenceCurrentTransformers from "../features/ZeroSequenceCurrentTransformers";

const RightSidebar: FC = () => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );


  // console.log('RIGHT SB RENDER>>>');

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectItem}>
        {currentItemId && <TypeOfCell id={currentItemId} />}
        {currentItemId && <TypeOfSwitchingDevice id={currentItemId} />}

        {currentItemId && <CurrentTransformers id={currentItemId} />}
        {currentItemId && <RatedCurrentOfTheMainCircuits id={currentItemId} />}
        {currentItemId && <InstrumentCurrentTransformers id={currentItemId} />}
        {currentItemId && <SwitchOPN id={currentItemId} />}
        {/* {currentItemId && (
          <MicroprocessorProtectionDeviceAndAutomation id={currentItemId} />
        )} */}
        {currentItemId && <ElectromagneticLocking id={currentItemId} />}

        {currentItemId && <VoltageTransformers id={currentItemId} />}
        {currentItemId && <CurrentTransducersType1 id={currentItemId} />}
        {currentItemId && <CurrentTransducersType2 id={currentItemId} />}
        {currentItemId && <FrequencyConvertersType1 id={currentItemId} />}
        {currentItemId && <FrequencyConvertersType2 id={currentItemId} />}
        {currentItemId && <VoltageTransducersType1 id={currentItemId} />}
        {currentItemId && <VoltageTransducersType2 id={currentItemId} />}
        {currentItemId && <PowerTransducersType1 id={currentItemId} />}
        {currentItemId && <PowerTransducersType2 id={currentItemId} />}
        {/* {currentItemId && <CircuitBreakers id={currentItemId} />} */}
        {currentItemId && <ElectricityMeter id={currentItemId} />}
        {currentItemId && <TransformersForOwnNeeds id={currentItemId} />}
        {currentItemId && (
          <ZeroSequenceCurrentTransformers id={currentItemId} />
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
