import { Spinner, Table, TableContainer, Tbody } from "@chakra-ui/react";
import TableRow from "./TableRow";
import styles from "./MyTable.module.scss";
import "react-virtualized/styles.css";
import React, { FC, Suspense, useDeferredValue } from "react";
import { Column, Table as VirtTable } from "react-virtualized";
import { List } from "react-virtualized";
import { useFetchAllOPNQuery } from "../../services/dictService";
import { useDispatch } from "react-redux";
import { updatePropsByRow } from "../../store/nodesSlice";
import { useAppSelector } from "../../hook";
interface IMyTableProps {
  data: string[][];
}

const MyTable = ({ data, isLoading, type, onClose }) => {
  const dispatch = useDispatch();

  const currentId = useAppSelector((state) => state.nodes.currentNode.id);

  const onRowClick = ({ _, index, rowData }) => {
    console.log({ currentId, rowData });

    dispatch(
      updatePropsByRow({
        id: currentId,
        type,
        rowData,
      })
    );

    onClose();
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

                {data &&
                  data[0].map((col: string, index: number) => {
                    return (
                      <Column
                        className={styles.column}
                        width={200}
                        label={col}
                        dataKey={String(index)}
                      />
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
