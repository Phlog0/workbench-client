import React, { FC, useState, SyntheticEvent } from "react";
import styles from "./TopNavbar.module.scss";
import { useAppDispatch } from "../hook";
import { addNode } from "../store/nodesSlice";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";


type TopNavbarProps = {

  reactFlowGridGap : number[]
  setReactFlowGridGap:Dispatch<SetStateAction<number[]>>;
};
const TopNavbar: FC<TopNavbarProps> = ({reactFlowGridGap, setReactFlowGridGap}) => {


  const dispatch = useAppDispatch()

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const gap = event.target.value
    setReactFlowGridGap([+gap, +gap])
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
          <option value="1">1</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </header>
  );
};

export default TopNavbar;
