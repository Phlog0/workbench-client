import React, { FC } from "react";
import { Select } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
  changeCurrentGrid,
  updateRatedCurrentOfTheMainCircuits
} from "../store/nodesSlice";

interface IMySelectProps {
  options: string[];
  id?: string;
  current: number;
  label: string;
  tag: string;
}

const MySelect: FC<IMySelectProps> = ({ options, id, current, label, tag }) => {
  const dispatch = useAppDispatch();

  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;
    console.log(select.id);
    if (select.id === "snapGrid") console.log(options);
    dispatch(changeCurrentGrid({ index: select.selectedIndex }));

    if (select.id === "cellType")
      dispatch(
        updateCellType({
          id: id,
          index: select.selectedIndex,
        })
      );

    if (select.id === "commutationType")
      dispatch(
        updateCommutationType({
          id: id,
          index: select.selectedIndex,
        })
      );
    if (select.id === "transformatorType")
      dispatch(
        updateTransformatorType({
          id: id,
          index: select.selectedIndex,
        })
      );
    if (select.id === "RatedCurrentOfTheMainCircuits")
      dispatch(
        updateRatedCurrentOfTheMainCircuits({
          id: id,
          index: select.selectedIndex,
        })
      );
  };
  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <Select
        name={tag}
        id={tag}
        onChange={(e) => selectChange(e)}
        // value={currentCellOption}
      >
        {options &&
          options.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                data-key={index}
                selected={index === current ? true : false}
              >
                {item}
              </option>
            );
          })}
      </Select>
    </>
  );
};

export default MySelect;
