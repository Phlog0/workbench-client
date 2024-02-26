import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import {
  changeCurrentGrid,
  changeCurrentNode,
  uploadNodes,
} from "../store/nodesSlice";
import { addNode, deleteNode } from "../store/nodesSlice";
// =============================COMPONENT============================
import { Button, ButtonGroup, Input, Select } from "@chakra-ui/react";
import MySelect from "../shared/MySelect";

const TopNavbar: FC = () => {
  const snapGrids = useAppSelector((state) => state.nodes.snapGrid);
  const currentId = useAppSelector((state) => state.nodes.currentNode);
  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);

  const dispatch = useAppDispatch();

  const addFigure = (): void => {
    const node = {
      id: Date.now().toString(),
      type: "ElectricalPanelsNodeType",
      position: { x: 0, y: 0 },
      parentNode: "",
      draggable: true,
      currentCellOption: 0,
      currentTypeOfSwitchingDevice: 0,
      switchingDeviceVV: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
      },
      switchingDeviceVN: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
        numberOfGroundShafts: "",
        locationOfGroundingBlades: "",
        switchDriveLocation: "",
        locationOfTheGroundingBladeDrive: "",
      },
      switchingDeviceR: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        thermalCurrent: "",
        ratedVoltage: "",
      },

      thereIsAFuseCurrent: 0,
      currentTransformatorOption: 1,

      ratedCurrentOfTheMainCircuits: 0,
      opn: {
        type: "",
        name: "",
        manufacturer: "",
        ratedOperatingVoltage: "",
        throughput: "",
        ratedDischargeCurrent: "",
        maximumContinuousPermissibleOperatingVoltage: "",
      },
      microprocessorProtectionDeviceAndAutomation: {
        type: "",
        name: "",
        manufacturer: "",
      },
      electromagneticLocking: {
        type: "",
        name: "",
        manufacturer: "",
      },
      instrumentCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        accuracyClass: "",
        oneSecondThermalCurrent: "",
        typeOfService: "",
      },
      voltageTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedThreePhasePowerOfTheFirstWinding: "",
        accuracyClassOfTheFirstSecondaryWinding: "",
        ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
        accuracyClassOfTheSecondSecondaryWinding: "",
        ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
        accuracyClassOfSecondaryReturnWires: "",
        ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
      },
      currentTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      currentTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      frequencyConvertersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      frequencyConvertersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      voltageTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      voltageTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      powerTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      powerTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      circuitBreakers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrentOfFuseLink: "",
      },
      electricityMeter: {
        type: "",
        name: "",
        manufacturer: "",
        accuracyClass: "",
      },
      transformersForOwnNeeds: {
        type: "",
        name: "",
        manufacturer: "",
        ratedPower: "",
      },
      zeroSequenceCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        oneSecondThermalCurrentOfTheSecondaryWinding: "",
      },
    }; //🔥🔥🔥🔥🔥🔥🔥🔥 NEW ITEM!
    dispatch(addNode(node));
  };

  const deleteItem = () => {
    dispatch(deleteNode(currentId));
    dispatch(changeCurrentNode({ id: null }));
  };

  const importJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      dispatch(uploadNodes(JSON.parse(reader.result)));
    };
    e.target.value = null;
  };

  const importImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      // console.log(reader.result);
      const node = {
        id: `img-${Date.now()}`,

        type: "ImageNodeType",

        src: reader.result,
        position: { x: 0, y: 0 },
        style: {
          width: 360,
          height: 30,
        },
      };

      dispatch(addNode(node));
      e.target.value = null;
    };

    // if (file) {
    //   const src = reader.readAsDataURL(file);
    //   console.log(src);
    //   const node = {
    //     id: `img-${Date.now()}`,

    //     type: "ImageNodeType",

    //     src: src,
    //     position: { x: 0, y: 0 },
    //     style: {
    //       width: 360,
    //       height: 30,
    //     },
    //   };
    //   dispatch(addNode(node));
    // }
  };

  return (
    <header className={styles.header}>
      <Button colorScheme="blue" onClick={addFigure}>
        Добавить шкаф
      </Button>
      <Button colorScheme="red" onClick={deleteItem}>
        Удалить шкаф
      </Button>

      <label className={styles.importJsonLabel}>
        <span>ипорт JSON &#123; &#125;</span>
        <input
          type="file"
          id="myfile"
          className={styles.importJSONBtn}
          onChange={importJson}
        />
      </label>
      <div className={styles.navbarStep}>
        <MySelect
          options={snapGrids}
          tag={"snapGrid"}
          label={"Шаг:"}
          current={currentGrid}
        />
      </div>
      <label className={styles.addTrafaret}>
        <span>Добавить трафарет</span>
        <input
          type="file"
          id="myfile"
          accept="image/png, image/jpeg"
          className={styles.importJSONBtn}
          onChange={importImage}
        />
      </label>
    </header>
  );
};

export default TopNavbar;
