import React from "react";
import MyInput from "../shared/MyInput";
import { useAppSelector } from "../hook";
import MyNumberInput from "../shared/MyNumberInput";
const ReactiveCos = ({ id }) => {
  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  return (
    <MyNumberInput
      tag={"reactiveCos"}
      label={"Cos p"}
      inputType={"number"}
      max={1}
      value={currentItemProperties?.reactiveCos}
      opt1={"reactiveCos"}
      opt2={""}
    />
  );
};

export default ReactiveCos;
