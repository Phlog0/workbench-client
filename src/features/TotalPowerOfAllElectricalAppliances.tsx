// @ts-nocheck
import React, { useEffect, useState } from "react";
import MyInput from "../shared/MyInput";
import { useAppSelector } from "../hook";

const TotalPowerOfAllElectricalAppliances = ({ id }) => {
  const totalPowerOfAllElectricalAppliances = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.totalPowerOfAllElectricalAppliances
  );



  return (
    <MyInput
      tag={"totalPowerOfAllElectricalAppliances"}
      label={"Суммарная мощность потребителей, подключенных к линии"}
      inputType={"number"}
      // value={state}
      value={totalPowerOfAllElectricalAppliances}
      opt1={"totalPowerOfAllElectricalAppliances"}
      opt2={""}
      // myId={"mainScheme"}
      //   onChange={inputChange}
      id={id}
    />
  );
};

export default TotalPowerOfAllElectricalAppliances;
