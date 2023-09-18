import React, { FC, useState, useMemo } from "react";
import styles from "./RightSidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateProperties } from "../store/nodesSlice";



const RightSidebar: FC = () => {

  const currentItemId:string = useAppSelector(state => state.nodes.currentNode.id);
  const currentItemProperties = useAppSelector(state=>state.nodes.nodes.find(node => node.id === currentItemId));
  // console.log(currentItemProperties.prop1, currentItemProperties.prop2,currentItemProperties.prop3)



  const dispatch = useAppDispatch();
  const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {

    console.log(event.target.id)
    const key = event.target.id;
    const value = +event.target.value;
    dispatch(updateProperties({id:currentItemId, key, value}));
  };


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
                  selected={index + 1 === currentItemProperties?.prop1 ? true : false}
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
                  selected={index + 1 === currentItemProperties?.prop2 ? true : false}
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
                  selected={index + 1 === currentItemProperties?.prop3 ? true : false}
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
