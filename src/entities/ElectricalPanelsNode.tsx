// @ts-nocheck
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
let ElectricalPanelsNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    // console.log(evt.target.value);
  }, []);
  return (
    <div className={styles.customNode}>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default ElectricalPanelsNode;
