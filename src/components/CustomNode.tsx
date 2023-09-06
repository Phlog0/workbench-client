import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

import styles from "./CustomNode.module.scss";
const CustomNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      className={styles.customNode}
    >
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
