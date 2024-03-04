import React, { FC, useEffect, useRef } from "react";
import { Select } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  updateCellType,
  changeCurrentGrid,
  updateNodePropSelect,
  updatePropsByRow,
  setInitialProps,
} from "../store/nodesSlice";

import styles from "./MySelect.module.scss";
import initialProps from "../store/utils/initialProps";

interface IMySelectProps {
  options: string[];
  itemId?: string;
  current: number;
  label: string;
  tag: string;
  disabledOpts?: number[];
}

const MySelect: FC<IMySelectProps> = ({
  options,
  itemId,
  current,
  label,
  tag,
  disabledOpts,
}) => {
  const dispatch = useAppDispatch();
  console.log(itemId);
  disabledOpts = disabledOpts || "";
  const selectRef = useRef(null);
  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;
    if (select.id === "snapGrid")
      dispatch(changeCurrentGrid({ index: select.selectedIndex }));

    dispatch(
      updateNodePropSelect({
        id: itemId,
        index: select.selectedIndex,
        key: select.id,
      })
    );

    if (select.id === "currentTransformatorOption")
      dispatch(
        updatePropsByRow({
          id: itemId,
          type: "instrumentCurrentTransformers",
          rowData: ["", "", "", "", "", "", ""],
        })
      );
    if (
      select.id === "currentCellOption" &&
      (select.selectedIndex === 1 || select.selectedIndex === 4)
    )
      dispatch(
        setInitialProps({
          id: itemId,
          props: initialProps,
        })
      );
  };

  useEffect(() => {
    console.log(selectRef.current.selectedIndex);
    if (disabledOpts.includes(selectRef.current.selectedIndex))
      console.log("NNNNOOOOOOO");
  }, [disabledOpts]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={tag}>
        {label}
      </label>
      <Select
        ref={selectRef}
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
                disabled={disabledOpts?.includes(index)}
              >
                {item}
              </option>
            );
          })}
      </Select>
    </div>
  );
};

export default MySelect;
