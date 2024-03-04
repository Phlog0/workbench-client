import React from "react";
import MyInput from "../shared/MyInput";
import { useAppSelector } from "../hook";

const TotalPowerOfAllElectricalAppliances = ({ id }) => {
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  return (
    <MyInput
      tag={"totalPowerOfAllElectricalAppliances"}
      label={"Суммарная мощность всех электроприборов"}
      inputType={"number"}
      value={currentItemProperties?.totalPowerOfAllElectricalAppliances}
      opt1={"totalPowerOfAllElectricalAppliances"}
      opt2={""}
      // myId={"mainScheme"}
      //   onChange={inputChange}
    />
  );
};

export default TotalPowerOfAllElectricalAppliances;
