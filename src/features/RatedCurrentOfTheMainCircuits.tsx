import React from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchAllRatedCurrentOfTheMainCircuitsQuery } from "../services/dictService";

const RatedCurrentOfTheMainCircuits = ({ id }) => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );

  const { data, error, isLoading } =
    useFetchAllRatedCurrentOfTheMainCircuitsQuery();

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const ratedCurrentOfTheMainCircuits =
    currentItemProperties?.ratedCurrentOfTheMainCircuits;

  return (
    <MySelect
      tag={"RatedCurrentOfTheMainCircuits"}
      label={"Номинальный ток главных цепей,А"}
      options={data}
      id={currentItemId}
      current={ratedCurrentOfTheMainCircuits}
    />
  );
};

export default RatedCurrentOfTheMainCircuits;
