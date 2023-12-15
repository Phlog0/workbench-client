import { Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateOPNProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";

const MyInput = ({ tag, label, inputType, value, opt1, onChange, opt2 }) => {
  // const dispatch = useDispatch();
  // const currentId = useAppSelector((state) => state.nodes.currentNode);
  // const inputChange = (event) => {
  //   dispatch(
  //     updateOPNProp({
  //       id: currentId,
  //       key1: event.target.dataset.opt1,
  //       key2: event.target.dataset.opt2,
  //       value: event.target.value,
  //     })
  //   );
  // };
  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <Input
        type={inputType}
        name={tag}
        id={tag}
        value={value}
        // onChange={inputChange}
        onChange={onChange}
        data-opt1={opt1}
        data-opt2={opt2}
      />
    </>
  );
};

export default MyInput;
