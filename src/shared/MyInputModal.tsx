import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './MyInputModal.module.scss'
const MyInputModal = ({ label, value }) => {
  // const [value, setValue] = useState("test");

  return (
    <div className={styles.container}>
      {label} <Input value={value} disabled />
    </div>
  );
};

export default MyInputModal;
