import { Spinner, Table, TableContainer, Tbody } from "@chakra-ui/react";
import TableRow from "./TableRow";
import styles from "./MyTable.module.scss";
import "react-virtualized/styles.css";
import React, { FC, Suspense, useDeferredValue } from "react";
import { Column, Table as VirtTable } from "react-virtualized";
import { List } from "react-virtualized";
import { useFetchAllOPNQuery } from "../../services/dictService";
interface IMyTableProps {
  data: string[][];
}

const MyTable = ({ data, isLoading }) => {
  const onRowClick = ({ _, index, rowData }) => {
    console.log(index, rowData);
  };
  return (
    <div className={styles.MyTable}>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <TableContainer className={styles.scrollBlock}>
          <Table variant="simple">
            <Tbody>
              <VirtTable
                className={styles.virtTable}
                width={900}
                height={600}
                headerHeight={40}
                rowHeight={30}
                rowCount={data.length}
                rowGetter={({ index }) => {
                  if (index === data.length - 1) return data[index];
                  return data[index + 1];
                }}
                onRowClick={onRowClick}
              >
                {/* <Column width={200} label="0" dataKey="0" />
                <Column width={200} label="1" dataKey="1" />
                <Column width={200} label="2" dataKey="2" />
                <Column width={200} label="3" dataKey="3" /> */}
                {data &&
                  data[0].map((col: string, index: number) => {
                    return (
                      <Column width={200} label={col} dataKey={String(index)} />
                    );
                  })}
              </VirtTable>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default MyTable;
