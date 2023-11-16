import React, { FC } from "react";
import { Tr, Td } from "@chakra-ui/react";
import styles from "./TableRow.module.scss";

interface ITableRowProps {
  data: string[];
}

const TableRow: FC<ITableRowProps> = ({ data }) => {
  console.log(data);
  return (
    <Tr className={styles.row}>
      {data && data.map((item) => <Td>{item}</Td>)}
    </Tr>
  );
};

export default TableRow;
