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
      <NodeResizeControl minWidth={100} minHeight={50}></NodeResizeControl>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
       
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default CustomNode;
