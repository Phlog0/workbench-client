import React, { FC, useCallback, useState, useEffect } from "react";
import styles from "./Flow.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateProperties } from "../store/rightSidebarSlice";
import RightSidebar from "./RightSidebar";
import ReactFlow, {
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
} from "reactflow";
import "reactflow/dist/style.css";
import Shkaf from "./Shkaf";
import { TArrivalSidebarProps } from "../types/types";
import { Dispatch } from "@reduxjs/toolkit";
import { updateCoordinats } from "../store/nodesSlice";
import CustomNode from "./CustomNode";

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

type FlowProps = {
  currentProps: TArrivalSidebarProps;
  setCurrentProps?: Dispatch<SetStateAction<TArrivalSidebarProps>> | null;
  reactFlowGridGap : number[]
  setReactFlowGridGap:Dispatch<SetStateAction<number[]>>;
};
const nodeTypes = { CustomNodeType: CustomNode };

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC<FlowProps> = ({ currentProps, setCurrentProps, reactFlowGridGap }) => {
  const reduxNodes = useAppSelector((state) => state.nodes.nodes);
  const renderNodes = reduxNodes.map((node) => ({
    ...node,
    data: {
      label: <Shkaf id={node.id} />,
    },
  }));
  const dispatch = useAppDispatch();
  console.log("REDUX STATE>>>>>>>>>>>>", renderNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState(renderNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    setNodes(renderNodes);
  }, [reduxNodes]);

  // console.log(nodes);
  const onSave = () => {
    console.log(JSON.stringify(reduxNodes));
  };

  const onNodeClick = (event, node) => {
    console.log(node);
    // setNodes(renderNodes);
    if (node !== null)
      setCurrentProps({
        id: node.id,
        prop1: +node.prop1,
        prop2: +node.prop2,
        prop3: +node.prop3,
      });
  };

  const handleCoords = (event, node) => {
    event.preventDefault();
    event.stopPropagation();
    // ❗❗❗❗❗❗❗❗ЧИЧАС Я БЕРУ ОТНОСИТЕЛЬНУЮ ПОЗИЦИЮ(А ЕСТЬ АБСОЛЮТНАЯ)
    // console.log(node.position);
    dispatch(updateCoordinats({ id: node.id, position: node.position }));
  };

  return (
    <div className={styles.mainFlow}>
      <ReactFlow
        style={{ width: "100%", height: "100vh" }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid={true}
        snapGrid={[...reactFlowGridGap]}
        onNodeClick={onNodeClick}
        className={styles.reactFlow}
        nodeTypes={nodeTypes}
        onNodeDragStop={handleCoords}
      >
        <Background
          id="1"
          gap={10}
          color="#f1f1f1"
          variant={BackgroundVariant.Lines}
        />
        <Background
          id="2"
          gap={100}
          offset={1}
          color="#ccc"
          variant={BackgroundVariant.Lines}
        />
        <Panel position="top-right">
          <button onClick={onSave}>save</button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Flow;
