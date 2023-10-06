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

import styles from "./TireNode.module.scss";
import { useAppDispatch } from "../hook";
import { updateTireSize } from "../store/nodesSlice";



const TireNode = ({ data, isConnectable }) => {

  const dispatch = useAppDispatch()


  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);


  const resizeTire = (event, params) => {
    console.log(params);
    dispatch(updateTireSize({width: params.width, height: params.height}))
  };
  // minWidth={300} minHeight={7} maxHeight={7}
  return (
    <div className={styles.tire}>
      {/* <NodeResizeControl minWidth={300} maxHeight={10}  onResizeEnd={resizeTire}>
        <FaExchangeAlt/>
      </NodeResizeControl> */}
      {/* <Handle
        type="source"
        position={Position.Bottom}
        className={styles.NodeTireHandle}
        id="a"
        isConnectable={isConnectable}
      /> */}
    </div>
  );
};

export default TireNode;
