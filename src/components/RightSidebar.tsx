import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateProperties } from "../store/nodesSlice";
import { TArrivalSidebarProps } from "../types/types";
import { Dispatch } from "@reduxjs/toolkit";

type RightSidebarProps = {
  currentProps: TArrivalSidebarProps;
  setCurrentProps?: Dispatch<SetStateAction<TArrivalSidebarProps>> | null;
};

const RightSidebar: FC<RightSidebarProps> = ({
  currentProps,
  setCurrentProps,
}) => {
  // const values = useAppSelector((state) => state.sidebarProps); //REDUX
  // console.log({ prop1, prop2, prop3 });

  // const [properties, setProperties] = useState({
  //   prop1,
  //   prop2,
  //   prop3,
  // });

  const dispatch = useAppDispatch();
  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.id, event.target.value);
    setCurrentProps({
      ...currentProps,
      [`${event.target.id}`]: +event.target.value,
    });
    const key = event.target.id;
    const value = +event.target.value;
    dispatch(updateProperties({id:currentProps.id, key, value}));
  };

  // console.log(currentProps);
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectItem}>
        <label htmlFor="prop1">Счётчики</label>
        <select
          name=""
          id="prop1"
          onChange={(e) => selectChange(e)}
        >
          {Array(3)
            .fill("")
            .map((item, index) => {
              return (
                <option
                  key={index + 1}
                  value={index + 1}
                  selected={index + 1 === currentProps?.prop1 ? true : false}
                >
                  {index + 1}
                </option>
              );
            })}
        </select>
      </div>
      <div className={styles.selectItem}>
        <label htmlFor="prop2">Предохранители</label>
        <select name="" id="prop2"  onChange={(e) => selectChange(e)}>
          {Array(3)
            .fill("")
            .map((item, index) => {
              return (
                <option
                  key={index + 1}
                  value={index + 1}
                  selected={index + 1 === currentProps?.prop2 ? true : false}
                >
                  {index + 1}
                </option>
              );
            })}
        </select>
      </div>
      <div className={styles.selectItem}>
        <label htmlFor="prop3">Транзисторы</label>
        <select name="" id="prop3"  onChange={(e) => selectChange(e)}>
          {Array(3)
            .fill("")
            .map((item, index) => {
              return (
                <option
                  key={index + 1}
                  value={index + 1}
                  selected={index + 1 === currentProps?.prop3 ? true : false}
                >
                  {index + 1}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default RightSidebar;
