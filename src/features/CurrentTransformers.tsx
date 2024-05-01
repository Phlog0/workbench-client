// @ts-nocheck
import React, { useEffect } from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
import { useFetchDataQuery } from "../services/dictService";
import InstrumentCurrentTransformers from "./InstrumentCurrentTransformers";
import MyTest from "./MyText";
import MySpinner from "../shared/MySpinner";

const CurrentTransformers = ({ id, data }) => {
  // const { data, error, isLoading } = useFetchDataQuery(
  //   "currentTransformatorOption"
  // );

  const currentTransformatorOption = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)
        ?.currentTransformatorOption
  );

  // useEffect(()=>{
  //   console.log('CURRENT_TRANS REDNER!');
  // },[])

  return (
    <div>
      {/* {isLoading && <MySpinner />} */}

      <MySelect
        tag={"currentTransformatorOption"}
        label={"Трансформаторы тока"}
        options={data}
        itemId={id}
        current={currentTransformatorOption}
      />

      {/* <MyTest /> */}

      {currentTransformatorOption !== 0 && (
        <InstrumentCurrentTransformers id={id} isDisabled={false} />
      )}
    </div>
  );
};

export default CurrentTransformers;
