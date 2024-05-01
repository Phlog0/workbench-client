import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
import styles from "./ContextMenu.module.scss";
import { deleteNode, removeRelationship } from "../store/flowSlice";
import { useDispatch } from "react-redux";
import {
  useDeleteShkafMutation,
  useRemoveFastenerRelationshipMutation,
} from "../services/projectService";

export default function ShkafContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const [deleteShkaf, resultDel] = useDeleteShkafMutation();

  const [removeFastenerRelationship, resultRemoveFastenerRel] =
    useRemoveFastenerRelationshipMutation();

  const dispatch = useDispatch();

  const removeItem = async () => {
    console.log(id);
    const removedProps = {
      id,
      parentNode: null,
      offset: { x: 0, y: 30 },
      draggable: true,
    };

    dispatch(removeRelationship(removedProps));
   const res = await removeFastenerRelationship({removedProps});
    // dispatch(deleteNode(idObject));
    // deleteShkaf({ shkafId: id, type: "ImageNodeType" });
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
      <button onClick={removeItem}>Открепить от секции</button>
    </div>
  );
}
