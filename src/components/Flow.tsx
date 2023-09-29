import React, { FC, useCallback, useState, useEffect } from "react";
import styles from "./Flow.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateProperties } from "../store/rightSidebarSlice";
import RightSidebar from "./RightSidebar";
import { changeCurrentNode, updateGroup } from "../store/nodesSlice";
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
  NodeResizer,
  NodeResizeControl,
  useReactFlow,
  getOutgoers,
} from "reactflow";

import "reactflow/dist/style.css";
import Shkaf from "./Shkaf";

import { updateCoordinats } from "../store/nodesSlice";
import CustomNode from "./CustomNode";
import TireNode from "./TireNode";
import axios from "axios";

// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = { CustomNodeType: CustomNode, TireNodeType: TireNode };

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC = () => {
  const reduxNodes = useAppSelector((state) => state.nodes.nodes);
  const renderNodes = reduxNodes.map((node) => {
    if (node.type === "CustomNodeType")
      return {
        ...node,
        data: {
          label: <Shkaf id={node.id} />,
        },
      };
    return {
      ...node,
      data: {
        label: "GROUP NODE!",
      },
    };
  });
  const dispatch = useAppDispatch();
  // console.log("REDUX STATE>>>>>>>>>>>>", renderNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState(renderNodes); //НОВЫЕ НОДЫ
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges]
  // );

  const { getIntersectingNodes } = useReactFlow();

  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);
  const snapGrid = useAppSelector((state) =>
    state.nodes.snapGrid.find((item, index) => index === currentGrid)
  );

  // console.log(snapGrid)

  useEffect(() => {
    setNodes(renderNodes);
  }, [reduxNodes]);

  // console.log(nodes);
  const onSave = () => {
    console.log(JSON.stringify(reduxNodes));
    axios.post("http://localhost:3000/savedata", reduxNodes);
  };

  const onNodeClick = (event, node) => {
    console.log(node);
    if (node !== null) dispatch(changeCurrentNode({ id: node.id }));
  };

  const onNodeDrag = useCallback((_: MouseEvent, node: Node) => {
    const intersectTire = getIntersectingNodes(node).find(
      (n) => n.id === "group1"
    );
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        className: intersectTire?.id === n.id ? styles.highlight : "",
      }))
    );
  }, []);

  const handleCoords = (event, node: Node) => {
    event.preventDefault();

    // ❗❗❗❗❗❗❗❗ЧИЧАС Я БЕРУ ОТНОСИТЕЛЬНУЮ ПОЗИЦИЮ(А ЕСТЬ АБСОЛЮТНАЯ)
    // console.log(node.position);
    dispatch(updateCoordinats({ id: node.id, position: node.position }));

    // 1 функция уже много чего делает...
    // поставить условия(типо если мы соединяем, то вызовем хелпер ниже)
    const intersectTire = getIntersectingNodes(node).find(
      (n) => n.id === "group1"
    );
    if (intersectTire) {
      dispatch(updateGroup({ id: node.id }));
    }
  };

  // const children = getOutgoers(reduxNodes[0], getNodes(), getEdges())
  //   console.log(children);

  const handleDelete = () => {};

  return (
    <div className={styles.mainFlow}>
      <ReactFlow
        style={{ width: "100%", height: "100vh" }}
        nodes={nodes}
        // edges={edges}
        onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        snapToGrid={true}
        snapGrid={[+snapGrid, +snapGrid]}
        onNodeClick={onNodeClick}
        className={styles.reactFlow}
        nodeTypes={nodeTypes}
        onNodeDragStop={handleCoords}
        onNodeDrag={onNodeDrag}
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
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Panel position="top-right">
          <button onClick={onSave}>save</button>
        </Panel>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
