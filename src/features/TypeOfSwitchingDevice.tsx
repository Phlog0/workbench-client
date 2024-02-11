import React from "react";
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

const TypeOfSwitchingDevice = ({ id }) => {
  const { data, error, isLoading } = useFetchDataQuery("typeOfSwitchingDevice");

  const currentTypeOfSwitchingDevice = useAppSelector(
    (state) =>
      state.nodes.nodes.find((node) => node.id === id)
        ?.currentTypeOfSwitchingDevice
  );

  const thereIsAFuseCurrent = useAppSelector(
    (state) =>
      state.nodes.nodes.find((node) => node.id === id)
        ?.thereIsAFuseCurrent
  );

  // console.log(thereIsAFuseCurrent)
  // console.log(currentTypeOfSwitchingDevice);
  return (
    <div>
      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <MySelect
            tag={"currentTypeOfSwitchingDevice"}
            label={"Тип коммутационного аппарата"}
            options={data}
            itemId={id}
            current={currentTypeOfSwitchingDevice}
          />
          {currentTypeOfSwitchingDevice === 1 &&

            <>
              <SwitchingDeviceVV id={id} />
              <MicroprocessorProtectionDeviceAndAutomation id={id} />
            </>}
          {currentTypeOfSwitchingDevice === 2 && <><SwitchingDeviceVN id={id} />
            <MySelect tag={"thereIsAFuseCurrent"}
              label={"есть предохранитель"}
              options={['Нет', 'Да']}
              itemId={id}
              current={thereIsAFuseCurrent} />
          </>
          }
          {thereIsAFuseCurrent === 1 ? <CircuitBreakers id={id}/>:null }

          {currentTypeOfSwitchingDevice === 3 && <SwitchingDeviceR id={id} />}
        </>
      )}
    </div>
  );
};

export default TypeOfSwitchingDevice;
