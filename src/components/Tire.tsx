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

import styles from "./Tire.module.scss";

const Tire = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className={styles.tire}>
      <NodeResizeControl minWidth={100} minHeight={50}></NodeResizeControl>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ marginLeft: "15px" }}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default Tire;
