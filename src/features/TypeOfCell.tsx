import React from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import { Spinner } from "@chakra-ui/react";
import MySpinner from "../shared/MySpinner";

const TypeOfCell = ({ id }) => {
  const { data, error, isLoading } = useFetchDataQuery("typeOfCell");

  const currentCellOption = useAppSelector(
    (state) =>
      state.nodes.nodes.find((node) => node.id === id)?.currentCellOption
  );
  return (
    <>
      {isLoading ? (
        <MySpinner />
      ) : (
        <MySelect
          tag={"currentCellOption"}
          label={"Тип ячейки"}
          options={data}
          itemId={id}
          current={currentCellOption}
        />
      )}
    </>
  );
};

export default TypeOfCell;
