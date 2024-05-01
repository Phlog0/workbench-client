// @ts-nocheck
import React, { useEffect, useState } from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import SwitchingDeviceVV from "./SwitchingDeviceVV";
import SwitchingDeviceVN from "./SwitchingDeviceVN";
import SwitchingDeviceR from "./SwitchingDeviceR";
import MySpinner from "../shared/MySpinner";
import { current } from "@reduxjs/toolkit";
import MicroprocessorProtectionDeviceAndAutomation from "./MicroprocessorProtectionDeviceAndAutomation";
import CircuitBreakers from "./CircuitBreakers";

const TypeOfSwitchingDevice = ({ id, data }) => {
  // const { data, error, isLoading } = useFetchDataQuery("typeOfSwitchingDevice");

  const currentTypeOfSwitchingDevice = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)
        ?.currentTypeOfSwitchingDevice
  );
  const thereIsACircuitBreakers = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.thereIsACircuitBreakers
  );

  // console.log(thereIsAFuseCurrent)
  // console.log(currentTypeOfSwitchingDevice);
  const currentCellOption = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.currentCellOption
  );

  const [disabledOptions, setDisabledOptions] = useState([]);
  useEffect(() => {
    switch (currentCellOption) {
      case 2:
        setDisabledOptions([0, 3]);
        break;
      case 3:
        setDisabledOptions([0, 1, 2]);
        break;

      default:
        setDisabledOptions([]);
        break;
    }
  }, [currentCellOption, id]);
  return (
    <div>
      <>
        <MySelect
          tag={"currentTypeOfSwitchingDevice"}
          label={"Тип коммутационного аппарата"}
          options={data}
          itemId={id}
          current={currentTypeOfSwitchingDevice}
          disabledOpts={disabledOptions}
        />
        {currentTypeOfSwitchingDevice === 1 && (
          <>
            <SwitchingDeviceVV id={id} />
            <MicroprocessorProtectionDeviceAndAutomation id={id} />
          </>
        )}
        {currentTypeOfSwitchingDevice === 2 && (
          <>
            <SwitchingDeviceVN id={id} />
            <MySelect
              tag={"thereIsACircuitBreakers"}
              label={"есть предохранитель"}
              options={["Нет", "Да"]}
              itemId={id}
              current={thereIsACircuitBreakers}
            />
          </>
        )}
        {thereIsACircuitBreakers === 1 ? <CircuitBreakers id={id} /> : null}

        {currentTypeOfSwitchingDevice === 3 && <SwitchingDeviceR id={id} />}
      </>
    </div>
  );
};

export default TypeOfSwitchingDevice;
