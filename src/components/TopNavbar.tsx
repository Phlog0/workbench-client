import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
//  ===============================REDUX===============================
import { useAppDispatch, useAppSelector } from "../hook";
import { changeCurrentGrid } from "../store/nodesSlice";
import { addNode } from "../store/nodesSlice";

// =============================COMPONENT============================
const TopNavbar: FC = () => {

  const snapGrids = useAppSelector(state => state.nodes.snapGrid); // ❗❗❗❗❗❗❗Научиться типизировать массив объектов
  const currentGrid = useAppSelector(state => state.nodes.currentGrid.index);


  const dispatch = useAppDispatch()

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target);
    const gap = event.target.value
    dispatch(changeCurrentGrid({index: +gap}))
  };

  const addFigure = (): void => {
    console.log("add");
    const node = {
      id: Date.now().toString(),
      type: "CustomNodeType",
      position: { x: 0, y:100 },
      prop1: 1,
      prop2: 1,
      prop3: 1,
    };
    dispatch(addNode(node))

  };

  return (
    <header className={styles.header}>
      <button className={styles.addBtn} onClick={addFigure}>
        Добавить
      </button>
      <div className={styles.navbarStep}>
        <label htmlFor="select-step">Шаг:(сетка)</label>
        <select name="select-step" id="select-step" onChange={selectChange}>
          {snapGrids.map((gridItem, index) => (<option value={index} key={index} selected={index === currentGrid ? true : false}>{gridItem}</option>))}
        </select>
      </div>
    </header>
  );
};

export default TopNavbar;
