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
import ElectricalPanelsNode from "../entities/ElectricalPanelsNode";
import TireNode from "../entities/TireNode";
import axios from "axios";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import pdfMake from "pdfmake/build/pdfmake";
import DownloadButton from "../features/exportPDF/DownLoadButton";
import PDFScheme from "../features/exportPDF/PDFScheme";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useFetchDataQuery } from "../services/dictService";
import MySpinner from "../shared/MySpinner";
import testReduxState from "../store/utils/testReduxState";
import MainSchemeNode from "../entities/mainSchemeNode";
import renderNodesInFlow from "./helpers/renderNodesInFlow";
import FirstOptionsModal from "./FirstOptionsModal";
import createScheme from "./helpers/createScheme";
import ImageNode from "../entities/ImageNode";
import ContextMenu from "./ContextMenu";

const nodeTypes = {
  ElectricalPanelsNodeType: ElectricalPanelsNode,
  TireNodeType: TireNode,
  MainSchemeType: MainSchemeNode,
  ImageNodeType: ImageNode,
};

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC = () => {
  // const { data, error, isLoading } = useFetchDataQuery(`myapp`);
  const dispatch = useAppDispatch();

  const btnRef = useRef(null);
  const [menu, setMenu] = useState(null);
  // useEffect(() => {
  //   const firstRender = async () => {
  //     //ПОЧЕМУ РАБОТАЕТ С ASYNC????
  //     dispatch(uploadNodes(JSON.parse(data)));
  //   };
  //   firstRender();
  // }, [data, dispatch]);
  const currentItemId: string = useAppSelector(
    (state) => state.nodes.currentNode.id
  );
  let reduxNodes = useAppSelector((state) => state.nodes.nodes);
  // let renderNodes;
  const [renderNodes, setRenderNodes] = useState([]);

  // let renderNodes = reduxNodes.map((node) => {
  //   if (node.type === "ElectricalPanelsNodeType")
  //     return {
  //       ...node,
  //       className: node.id === currentItemId ? styles.currentNode : "",
  //       data: {
  //         label: <Shkaf id={node.id} />,
  //       },
  //     };
  //   return {
  //     ...node,
  //     data: {
  //       label: "GROUP NODE!",
  //     },
  //   };
  // });

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

  const [tireCount, setTireCount] = useState(0);
  const [totalVoltageState, setTotalVoltageState] = useState(10);

  useEffect(() => {
    // if (reduxNodes.length === 0) { //🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // const nodes = createScheme(tireCount + 1, totalVoltageState);
    // dispatch(uploadNodes(nodes));
    dispatch(uploadNodes(testReduxState));
    // }
  }, [tireCount, totalVoltageState]);

  useEffect(() => {
    const rend = async () => {
      const res = await renderNodesInFlow(reduxNodes, currentItemId);
      setRenderNodes(res);
    };
    rend();
  }, [reduxNodes, currentItemId]);
  // useEffect(() => {
  //   setRenderNodes(renderNodesInFlow(reduxNodes, currentItemId));
  // }, [reduxNodes, currentItemId]);

  useEffect(() => {
    setNodes(renderNodes);
  }, [reduxNodes, renderNodes]);

  const onSave = (event) => {
    const data = JSON.stringify(reduxNodes);
    const blob = new Blob([data], { type: "application/json" });
    event.target.href = URL.createObjectURL(blob);
  };

  const onNodeClick = (event, node) => {
    console.log(node.id);
    if (
      node.id.includes("group") ||
      node.id.includes("mainScheme") ||
      node.id.includes("img")
    )
      return;
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
    // const intersectTire = getIntersectingNodes(node).find(
    //   (n) => n.id === "group1"
    const intersectTire = getIntersectingNodes(node).find((n) =>
      n.id.includes("group")
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
    // const intersectTire = getIntersectingNodes(node).find(
    //   (n) => n.id === "group1"
    const intersectTire = getIntersectingNodes(node).find((n) =>
      n.id.includes("group")
    );
    // console.log(intersectTire.id);
    if (intersectTire && !node.id.includes("img")) {
      dispatch(updateGroup({ nodeId: node.id, tireId: intersectTire.id }));
    }
  };

  const onNodeContextMenu = useCallback(
    (event, node:Node) => {
      // Prevent native context menu from showing
      event.preventDefault();
      if (!node.id.includes('img')) return;
      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = flowRef.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu]
  );

  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

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
      {reduxNodes.length === 0 && (
        <FirstOptionsModal
          tireCount={tireCount}
          setTireCount={setTireCount}
          setTotalVoltageState={setTotalVoltageState}
        />
      )}
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
        onNodeContextMenu={onNodeContextMenu}
      fitView
      onPaneClick={onPaneClick}
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
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </div>
  );
};

export default Flow;
