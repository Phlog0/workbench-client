import React, { useCallback, useState } from "react";
import ReactFlow, {
  Handle,
  Position,
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
  NodeResizer,
  NodeResizeControl,
} from "reactflow";

import styles from "./ElectricalPanelsNode.module.scss";
const ElectricalPanelsNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    // console.log(evt.target.value);
  }, []);
// console.log(data);
  return (
    <div className={styles.customNode}>
      <div>{data.label}</div>
    </div>
  );
};

export default ElectricalPanelsNode;
