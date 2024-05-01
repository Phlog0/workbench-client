import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
// import styles from "./ContextMenu.module.scss";

import { useDispatch } from "react-redux";
import {
  useDeleteShkafMutation,
  useRemoveFastenerRelationshipMutation,
} from "../services/projectService";
import styles from "../ContextMenu.module.scss";
import { deleteEdgeRedux } from "../../store/flowSlice";
import { useRemoveEdgeApiMutation } from "../../services/projectService";
export default function EdgeContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();

  const dispatch = useDispatch();
  const [removeEdgeApi] = useRemoveEdgeApiMutation();
  const removeItem = async () => {
    dispatch(deleteEdgeRedux({ id }));
    await removeEdgeApi({ id });
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
