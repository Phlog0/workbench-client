import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
import styles from "./ContextMenu.module.scss";
import { deleteNode } from "../store/flowSlice";
import { useDispatch } from "react-redux";
import { useDeleteShkafMutation } from "../services/projectService";

export default function ImageContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const [deleteShkaf, resultDel] = useDeleteShkafMutation();
  const dispatch = useDispatch();

  const deleteItem = () => {
    console.log(id);
    const idObject = {
      currentId: { id },
      tireId: "",
    };
    dispatch(deleteNode(idObject));
    deleteShkaf({ shkafId: id, type: "ImageNodeType" });
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
