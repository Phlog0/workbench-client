import React from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";

const CurrentTransformers = ({ id }) => {
  const { data, error, isLoading } = useFetchDataQuery(
    "currentTransformatorOption"
  );

  const currentTransformatorOption = useAppSelector(
    (state) =>
      state.nodes.nodes.find((node) => node.id === id)
        ?.currentTransformatorOption
  );
  return (
    <MySelect
      tag={"currentTransformatorOption"}
      label={"Трансформаторы тока"}
      options={data}
      itemId={id}
      current={currentTransformatorOption}
    />
  );
};

export default CurrentTransformers;
