import React, { FC, useCallback, useState, useEffect, useRef } from "react";
import styles from "./Flow.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import { updateProperties } from "../store/rightSidebarSlice";
import RightSidebar from "./RightSidebar";
import {
  changeCurrentNode,
  updateGroup,
  uploadNodes,
} from "../store/nodesSlice";
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
import Shkaf from "../entities/Shkaf";

import { updateCoordinats } from "../store/nodesSlice";
import CustomNode from "../entities/CustomNode";
import TireNode from "../features/TireNode";
import axios from "axios";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";

import pdfMake from "pdfmake/build/pdfmake";
import DownloadButton from "../features/exportPDF/DownLoadButton";
import PDFScheme from "../features/exportPDF/PDFScheme";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useFetchDataQuery } from "../services/dictService";
import MySpinner from "../shared/MySpinner";

const nodeTypes = { CustomNodeType: CustomNode, TireNodeType: TireNode };

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC = () => {
  // const { data, error, isLoading } = useFetchDataQuery(`myapp`);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const firstRender = async () => {
  //     //ПОЧЕМУ РАБОТАЕТ С ASYNC????
  //     dispatch(uploadNodes(JSON.parse(data)));
  //   };
  //   firstRender();
  // }, [data, dispatch]);

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

  const flowRef = useRef();
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

  const onSave = (event) => {
    const data = JSON.stringify(reduxNodes);
    const blob = new Blob([data], { type: "application/json" });
    event.target.href = URL.createObjectURL(blob);
  };

  const onNodeClick = (event, node) => {
    // console.log(node.id);
    if (node.id === "group1") return;
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        className: node.id === n.id ? styles.currentNode : "",
      }))
    );
    if (node !== null) dispatch(changeCurrentNode({ id: node.id }));
    // console.log(node.id);
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

  const handleContext = (event) => {
    event.preventDefault();
    console.log("right-click");
  };

  // if (error)
  //   return (
  //     <div className={styles.errorMessage}>
  //       <Alert status="error">
  //         <AlertIcon />
  //         <AlertTitle>error.status</AlertTitle>
  //         <AlertDescription>?????</AlertDescription>
  //       </Alert>
  //     </div>
  //   );
  return (
    <div className={styles.mainFlow}>

       <ReactFlow
          ref={flowRef}
          style={{ width: "100%", height: "100dvh" }}
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
            <Button colorScheme="green" p="0">
              <a
                download={`${Date.now()}.json`}
                href="#"
                onClick={onSave}
                className={styles.downloadJSON}
              >
                Скачать JSON
              </a>
            </Button>
          </Panel>
          <DownloadButton myRef={flowRef} />
          <Panel position="top-left">
            {/* <PDFDownloadLink
            document={<PDFScheme myRef={flowRef} />}
            fileName="Scheme"
          >
            {({ loading }) =>
              loading ? <button>Loading...</button> : <button>Download</button>
            }
          </PDFDownloadLink> */}
          </Panel>
          <Controls />
        </ReactFlow>
    </div>
  );
};

export default Flow;
