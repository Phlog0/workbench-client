import { Spinner, Table, TableContainer, Tbody } from "@chakra-ui/react";
import TableRow from "./TableRow";
import styles from "./MyTable.module.scss";
import React, { FC } from "react";
import { useFetchAllOPNQuery } from "../../services/dictService";
interface IMyTableProps {
  data: string[][];
}

const MyTable = () => {
  const { data, error, isLoading } = useFetchAllOPNQuery();
  return (
    <div className={styles.MyTable}>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <TableContainer className={styles.scrollBlock}>
        <Table variant="simple">
          <Tbody>
            {data &&
              data.map((dataItem) => {
                return <TableRow data={dataItem} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
