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
import { Button } from "@chakra-ui/react";

// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = { CustomNodeType: CustomNode, TireNodeType: TireNode };

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC = () => {
  let reduxNodes = useAppSelector((state) => state.nodes.nodes);
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
  const [steps, setSteps] = useState([]);
  const [stepsCounter, setStepsCounter] = useState(0);

  const { getIntersectingNodes } = useReactFlow();

  const currentGrid = useAppSelector((state) => state.nodes.currentGrid.index);
  const snapGrid = useAppSelector((state) =>
    state.nodes.snapGrid.find((item, index) => index === currentGrid)
  );

  // console.log(snapGrid)

  useEffect(() => {
    setNodes(renderNodes);
    setSteps((prev) => [...prev, renderNodes]);
    setStepsCounter((prev) => prev + 1);
  }, [reduxNodes]);

  const onSave = (event) => {
    const data = JSON.stringify(reduxNodes);
    const blob = new Blob([data], { type: "application/json" });
    event.target.href = URL.createObjectURL(blob);
  };

  const onNodeClick = (event, node) => {
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        className: node.id === n.id ? styles.currentNode : "",
      }))
    );
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
    dispatch(updateCoordinats({ id: node.id, position: node.position }));
    const intersectTire = getIntersectingNodes(node).find(
      (n) => n.id === "group1"
    );
    if (intersectTire) {
      dispatch(updateGroup({ id: node.id }));
    }
  };

  const prevStep = () => {
    if (stepsCounter === 0) {
      console.log("stepCounter=0");
      return;
    }

    setStepsCounter((prev) => prev - 1);
    setNodes(steps[stepsCounter]);
  };
  const nextStep = () => {
    const { length } = steps;
    console.log(length);

    setNodes(steps[length - 1]);
  };
  console.log(reduxNodes);

  const handleContext = (event) => {
    event.preventDefault();
    console.log("right-click");
  };


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
        onContextMenu={handleContext}
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
          <a
            download={`${Date.now()}.json`}
            href="#"
            onClick={onSave}
            className={styles.downloadJSON}
          >
            Скачать JSON
          </a>
        </Panel>
        <Panel position="top-left">
          <div className={styles.stepsContainer}>
            <Button colorScheme="green" onClick={prevStep}>
              Шаг назад
            </Button>
            <Button colorScheme="green" onClick={nextStep}>
              Шаг вперёд
            </Button>
          </div>
        </Panel>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
