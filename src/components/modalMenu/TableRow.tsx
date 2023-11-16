import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import styles from './TableRow.module.scss'
const TableRow = ({ data }) => {
  console.log(data);
  return (
    <Tr className={styles.row}>
      {data && data.map((item) => <Td>{item}</Td>)}

    </Tr>
  );
};

export default TableRow;
