import { Input } from "@chakra-ui/react";
import React from "react";

const MyInput = ({ tag, label, inputType }) => {
  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <Input type={inputType} name={tag} id={tag} />
    </>
  );
};

export default MyInput;
