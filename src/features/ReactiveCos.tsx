// @ts-nocheck
import React from "react";
import MyInput from "../shared/MyInput";
import { useAppSelector } from "../hook";
import MyNumberInput from "../shared/MyNumberInput";
const ReactiveCos = ({ id }) => {
  const reactiveCos = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.reactiveCos
  );
console.log(reactiveCos);
  return (
    <MyNumberInput
      tag={"reactiveCos"}
      label={"Cos φ"}
      inputType={"number"}
      max={1}
      min={0}
      value={reactiveCos}
      opt1={"reactiveCos"}
      opt2={""}
    />
  );
};

export default ReactiveCos;
