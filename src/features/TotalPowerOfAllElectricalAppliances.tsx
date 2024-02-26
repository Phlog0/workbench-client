import React from "react";
import MyInput from "../shared/MyInput";

const TotalPowerOfAllElectricalAppliances = () => {
  
  return (
    <MyInput
      tag={"totalPowerOfAllElectricalAppliances"}
      label={"Суммарная мощность всех электроприборов"}
      inputType={"number"}
      value={0}
      opt1={"totalPowerOfAllElectricalAppliances"}
      opt2={""}
      myId = {'mainScheme'}
    //   onChange={inputChange}
    />
  );
};

export default TotalPowerOfAllElectricalAppliances;
