import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
import styles from "./ContextMenu.module.scss";
import { deleteNode } from "../store/nodesSlice";
import { useDispatch } from "react-redux";

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteNode({id}));
  };

  return (
    <div
      style={{ top, left, right, bottom }}
      className={styles.contextMenu}
      {...props}
    >
      <p style={{ margin: "0.5em" }}>
        <small>node: {id}</small>
      </p>
      <button onClick={deleteItem}>Удалить</button>
    </div>
  );
}
