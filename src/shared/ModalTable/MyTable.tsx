import { Spinner, Table, TableContainer, Tbody } from "@chakra-ui/react";
import TableRow from "./TableRow";
import styles from "./MyTable.module.scss";
import "react-virtualized/styles.css";
import { defaultRowRenderer as DefaultRowRenderer } from "react-virtualized/dist/es/Table";
import { defaultTableRowRenderer as DefaultTableRowRenderer } from "react-virtualized";
import React, {
  FC,
  Suspense,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { Column, Table as VirtTable } from "react-virtualized";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { List } from "react-virtualized";
import { useFetchAllOPNQuery } from "../../services/dictService";
import { useDispatch } from "react-redux";
import { updatePropsByRow } from "../../store/nodesSlice";
import { useAppSelector } from "../../hook";
import Draggable from "react-draggable";
import MyHeaderRenderer from "./resizeColumns/MyHeaderRenderer";
import { MdDragIndicator } from "react-icons/md";
import RowRenderer from "./RowRenderer";
// import { DragHandleIcon} from '@chakra-ui/icons'
interface IMyTableProps {
  data: string[][];
}

// const testState = {
//   Тип: 1 / 4,
//   Наименование: 1 / 4,
//   Производитель: 1 / 4,
//   "НОМИНАЛЬНАЯ МОЩНОСТЬ (КВА)": 1 / 4,
// };
const testState = [1 / 4, 1 / 4, 1 / 4, 1 / 4];

const MyTable = ({ data, isLoading, type, onClose }) => {
  const dispatch = useDispatch();
  const currentId = useAppSelector((state) => state.nodes.currentNode.id);
  const totalPowerOfAllElectricalAppliances = useAppSelector(
    (state) =>
      state.nodes.nodes.find((item) => item.id === currentId)
        ?.totalPowerOfAllElectricalAppliances
  );

  const [state, setState] = useState(testState);
  const [renderData, setRenderData] = useState(null);

  useEffect(() => {
    const resizeTableMetrics = async (data) => {
      const quantity = await data[0].length;
      const render = await data.slice(1);
      const metrics = Array(quantity).fill(1 / quantity);
      setState(metrics);
      setRenderData(render);
    };

    resizeTableMetrics(data);
  }, [data]);
  console.log(data);
  console.log(renderData);

  const onRowClick = ({ _, index, rowData }) => {
    dispatch(
      updatePropsByRow({
        id: currentId,
        type,
        rowData,
      })
    );

    onClose();
  };

  const resizeRow = ({ dataKey, deltaX }) => {
    const prevWidths = state;
    const percentDelta = deltaX / 1596;
    console.log(percentDelta);
    // This is me being lazy :)
    const nextDataKey = +dataKey + 1;

    setState({
      ...prevWidths,
      [dataKey]: prevWidths[dataKey] + percentDelta,
      [nextDataKey]: prevWidths[nextDataKey] - percentDelta,
    });
  };

  const MyHeaderRenderer = ({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection,
  }) => {
    return (
      <div key={dataKey} className={styles.virtTableHeader}>
        <div className="ReactVirtualized__Table__headerTruncatedText">
          {label}
        </div>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) =>
            resizeRow({
              dataKey,
              deltaX,
            })
          }
          position={{ x: 100 }}
          zIndex={999}
        >
          <div className={styles.dragHandleIcon}>
            <MdDragIndicator />
          </div>
        </Draggable>
      </div>
    );
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
            <Tbody className={styles.tableContainer}>
              {renderData && (
                <AutoSizer>
                  {({ height, width }) => (
                    <VirtTable
                      className={styles.virtTable}
                      width={width}
                      height={height}
                      headerHeight={40}
                      rowHeight={50}
                      rowCount={data.length - 1}
                      rowGetter={({ index }) => {
                        // if (index === data.length - 1) return data[index];
                        // return data[index + 1];

                        // if (index === data.length - 1) return data[index];
                        return renderData[index];
                      }}
                      onRowClick={onRowClick}
                      rowRenderer={(props) => {
                        console.log(Number(props.columns[3].props.title.split("/")[0]));
                        return (
                          <DefaultRowRenderer
                            {...props}
                            className={totalPowerOfAllElectricalAppliances > Number(props.columns[3].props.title.split("/")[0]) ? styles.disabledRow:styles.row}
                            disabled
                            // className={styles.disabledRow}
                          ></DefaultRowRenderer>
                        );
                      }}
                      // onRowsRendered={RowRenderer}
                    >
                      {renderData &&
                        data[0].map((col: string, index: number) => {
                          if (index === data[0].length - 1) {
                            return (
                              <Column
                                className={styles.column}
                                // width={width / data[0].length}
                                width={state[index] * width}
                                label={col}
                                dataKey={String(index)}
                              />
                            );
                          }
                          return (
                            <Column
                              className={styles.column}
                              // width={width / data[0].length}
                              width={state[index] * width}
                              label={col}
                              dataKey={String(index)}
                              // dataKey={String(col)}
                              headerRenderer={MyHeaderRenderer}
                            />
                          );
                        })}
                    </VirtTable>
                  )}
                </AutoSizer>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default MyTable;
