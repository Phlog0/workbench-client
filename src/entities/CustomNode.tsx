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

import styles from "./CustomNode.module.scss";
const CustomNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className={styles.customNode}>
      <div>{data.label}</div>
    </div>
  );
};

export default CustomNode;
