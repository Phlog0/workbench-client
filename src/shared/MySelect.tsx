import React, { FC } from "react";
import { Select } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,

  changeCurrentGrid,
  updateNodePropSelect
} from "../store/nodesSlice";

interface IMySelectProps {
  options: string[];
  itemId?: string;
  current: number;
  label: string;
  tag: string;
}

const MySelect: FC<IMySelectProps> = ({
  options,
  itemId,
  current,
  label,
  tag,
}) => {
  const dispatch = useAppDispatch();

  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;
    console.log(select.id);
    if (select.id === "snapGrid")
      dispatch(changeCurrentGrid({ index: select.selectedIndex }));

    dispatch(
      updateNodePropSelect({
        id: itemId,
        index: select.selectedIndex,
        key: select.id,
      })
    );

    // if (select.id === "commutationType")
    //   dispatch(
    //     updateCommutationType({
    //       id: id,
    //       index: select.selectedIndex,
    //     })
    //   );
    // if (select.id === "transformatorType")
    //   dispatch(
    //     updateTransformatorType({
    //       id: id,
    //       index: select.selectedIndex,
    //     })
    //   );
    // if (select.id === "RatedCurrentOfTheMainCircuits")
    //   dispatch(
    //     updateRatedCurrentOfTheMainCircuits({
    //       id: id,
    //       index: select.selectedIndex,
    //     })
    //   );
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
