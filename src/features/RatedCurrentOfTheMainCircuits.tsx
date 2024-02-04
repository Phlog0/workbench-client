import React from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import {useFetchDataQuery } from "../services/dictService";

const RatedCurrentOfTheMainCircuits = ({ id }) => {
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );

  const { data, error, isLoading } = useFetchDataQuery(
    "RatedCurrentOfTheMainCircuits"
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const ratedCurrentOfTheMainCircuits =
    currentItemProperties?.ratedCurrentOfTheMainCircuits;

  return (
    <MySelect
      tag={"ratedCurrentOfTheMainCircuits"}
      label={"Номинальный ток главных цепей,А"}
      options={data}
      itemId={currentItemId}
      current={ratedCurrentOfTheMainCircuits}
    />
  );
};

export default RatedCurrentOfTheMainCircuits;
