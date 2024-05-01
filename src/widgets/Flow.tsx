import React, { FC, useCallback, useState, useEffect, useRef } from "react";
import styles from "./Flow.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  changeCurrentNode,
  updateFastenerShkaf,
  updateGroup,
  uploadEdges,
  uploadNodes,
} from "../store/flowSlice";
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
import { updateCoordinats } from "../store/flowSlice";
import ElectricalPanelsNode from "../entities/ElectricalPanelsNode";
import TireNode from "../entities/TireNode";
import axios from "axios";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
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
import MainSchemeNode from "../entities/MainSchemeNode";
import renderNodesInFlow from "./helpers/renderNodesInFlow";
import FirstOptionsModal from "./FirstOptionsModal";
import createScheme from "./helpers/createScheme";
import ImageNode from "../entities/ImageNode";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {
  useAddFastenerRelationshipMutation,
  useUpdateCoordsMutation,
  useUpdateGroupMutation,
} from "../services/projectService";
import orderItems from "../store/utils/orderItems";
import orderItemsForApi from "../store/utils/orderItemsForApi";
import debounce from "debounce";
import { useFetchProjectQuery } from "../services/projectService";
import FastenerNode from "../entities/FastenerNode";
import ImageContextMenu from "./ImageContextMenu";
import ShkafContextMenu from "./ShkafContextMenu";
import FileSaver from "file-saver";
import { shallowEqual } from "react-redux";
import AlertButton from "./samoproverki/AlertButton";
import jsPDF from "jspdf";
import DownloadPDFSchemeV2 from "../features/exportPDF/DownloadPDFSchemeV2";
import DownloadQuestionnaireTable from "../features/exportPDF/DownloadQuestionnaireTable";
import WarningBtn from "./samoproverki/WarningBtn";
import EdgeContextMenu from "./edgeContextMenu/EdgeContextMenu";

const nodeTypes = {
  ElectricalPanelsNodeType: ElectricalPanelsNode,
  TireNodeType: TireNode,
  MainSchemeType: MainSchemeNode,
  ImageNodeType: ImageNode,
  FastenerNodeType: FastenerNode,
};

// =====================НАЧАЛО КОМПОНЕНТА=========================

const Flow: FC = () => {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("projectId");

  console.log(params);
  const { data, error, isLoading } = useFetchProjectQuery(
    `findOrCreateAndGetProject?projectId=${searchParams.get(
      "projectId"
    )}&tCount=${searchParams.get("tCount")}`
  );

  // const { data, error, isLoading } = useFetchDataQuery(
  //   `getCurrentProject/${id}`
  // );
  // console.log(data);
  const dispatch = useAppDispatch();
  const [triggerCoords, setTriggerCoords] = useState(false);
  const btnRef = useRef(null);
  const [menuImage, setMenuImage] = useState(null);
  const [menuShkaf, setMenuShkaf] = useState(null);
  const [menuEdge, setMenuEdge] = useState(null);
  useEffect(() => {
    const firstRender = async () => {
      //ПОЧЕМУ РАБОТАЕТ С ASYNC????
      // console.log(JSON.parse(data));
      if (data) {
        // dispatch(uploadNodes(JSON.parse(data).nodes));
        // dispatch(uploadEdges(JSON.parse(data).edges));
        dispatch(uploadNodes(data.nodes));
        dispatch(uploadEdges(data.edges));
      }
    };
    firstRender();
  }, [data, dispatch]);
  console.log(data, error, isLoading);
  const currentItemId: string = useAppSelector(
    (state) => state.flow.currentNodeId
  );
  const reduxNodes = useAppSelector((state) => state.flow.nodes);
  const reduxEdges = useAppSelector((state) => state.flow.edges);
  // console.log(reduxNodes);
  const flowRef = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]); //НОВЫЕ НОДЫ
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const [updateCoordsApi, resultCoords] = useUpdateCoordsMutation();
  const [updateGroupApi, resultGroup] = useUpdateGroupMutation();
  const { getIntersectingNodes } = useReactFlow();

  const currentGrid = useAppSelector((state) => state.flow.currentGrid.index);
  const snapGrid = useAppSelector((state) =>
    state.flow.snapGrid.find((item, index) => index === currentGrid)
  );

  const [addFastenerRelationship, resultRelationship] =
    useAddFastenerRelationshipMutation();

  const [tireCount, setTireCount] = useState(0);
  const [totalVoltageState, setTotalVoltageState] = useState(10);

  useEffect(() => {
    const rend = async () => {
      const res = await renderNodesInFlow(reduxNodes, currentItemId);
      setNodes(res);
      setEdges(
        reduxEdges.map((edge) => ({
          ...edge,
          style: { strokeWidth: 2, stroke: "#000" },
        }))
      );
    };
    rend();
  }, [reduxNodes, reduxEdges]);

  // useEffect(() => {
  //   setNodes(renderNodes);
  // }, [reduxNodes, renderNodes]);

  // const onSave = (event) => {
  //   const data = JSON.stringify(reduxNodes);
  //   const blob = new Blob([data], { type: "application/json" });
  //   event.target.href = URL.createObjectURL(blob);
  // };

  const [rfInstance, setRfInstance] = useState(null);

  const onJsonSave = useCallback(
    (event) => {
      const flow = rfInstance.toObject();
      console.log(flow);
      const blob = new Blob([JSON.stringify(flow)], {
        type: "application/json",
      });
      FileSaver.saveAs(blob, "hi.json");
    },
    [rfInstance]
  );

  const onNodeClick = (event, node) => {
    console.log(node);
    if (!(node.type === "ElectricalPanelsNodeType")) return;
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        className: node.id === n.id ? styles.currentNode : "",
      }))
    );
    if (node !== null)
      dispatch(changeCurrentNode({ currentItemNode: node.id }));
    // console.log(node.id);
  };

  const onNodeDrag = useCallback((_: MouseEvent, node) => {
    const intersectNode = getIntersectingNodes(node).find(
      (n) => n.type === "FastenerNodeType"
    );
    // const intersectShkaf = getIntersectingNodes(node).find(
    //   (n) => n.type === "ElectricalPanelsNodeType"
    // );

    console.log(intersectNode?.id);

    // const intersectTire = getIntersectingNodes(node)
    if (node?.type === "ImageNodeType") return;
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        className: intersectNode?.id === n.id ? styles.highlight : "",
      }))
    );
  }, []);

  const handleCoords = async (event, node: Node) => {
    // event.preventDefault();

    const fastener = getIntersectingNodes(node).find(
      (n) => n.type === "FastenerNodeType"
    );
    const childShkaf = reduxNodes.find(
      (item) => item.parentNode === fastener?.id
    );
    if (fastener?.id && !(node.type === "ImageNodeType") && !childShkaf?.id) {
      // console.log(childShkaf);
      // if (childShkaf?.id) return;
      // const addedToGroup = `${Date.now()}`;
      console.log(fastener);

      const updatedShkafProps = {
        parentNode: fastener.id,
        position: { x: -147, y: 0 },
        draggable: false,
      };

      dispatch(
        updateFastenerShkaf({
          shkafId: node.id,
          updatedShkafProps,
        })
      );

      await addFastenerRelationship({
        id: node.id,
        updatedShkafProps,
      });
    } else if (
      ["ImageNodeType", "MainSchemeType", "ElectricalPanelsNodeType"].includes(
        node?.type
      )
    ) {
      dispatch(updateCoordinats({ id: node.id, position: node.position }));
      await updateCoordsApi({
        id: node?.id,
        position: node.position,
        type: node.type,
      });
    }
  };

  const onNodeContextMenu = useCallback(
    (event, node: Node) => {
      event.preventDefault();
      if (!["ImageNodeType", "ElectricalPanelsNodeType"].includes(node.type))
        return;

      const pane = flowRef?.current?.getBoundingClientRect();
      if (node.type === "ImageNodeType") {
        setMenuImage({
          id: node.id,
          top: event.clientY < pane.height - 200 && event.clientY,
          left: event.clientX < pane.width - 200 && event.clientX,
          right:
            event.clientX >= pane.width - 200 && pane.width - event.clientX,
          bottom:
            event.clientY >= pane.height - 200 && pane.height - event.clientY,
        });
      }
      if (node.type === "ElectricalPanelsNodeType") {
        setMenuShkaf({
          id: node.id,
          top: event.clientY < pane.height - 200 && event.clientY,
          left: event.clientX < pane.width - 200 && event.clientX,
          right:
            event.clientX >= pane.width - 200 && pane.width - event.clientX,
          bottom:
            event.clientY >= pane.height - 200 && pane.height - event.clientY,
        });
      }
    },
    [setMenuImage, setMenuShkaf]
  );
  const onEdgeContextMenu = useCallback(
    (event, edge) => {
      event.preventDefault();
      const pane = flowRef.current.getBoundingClientRect();
      setMenuEdge({
        id: edge.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenuEdge]
  );

  const onPaneClick = useCallback(() => {
    setMenuImage(null);
    setMenuShkaf(null);
    setMenuEdge(null);
  }, [setMenuImage, setMenuShkaf]);

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
  let content;
  return (
    <div className={styles.mainFlow}>
      {error && <h1>{error.error}</h1>}
      <ReactFlow
        ref={flowRef}
        style={{ width: "100%", height: "100dvh" }}
        nodes={nodes}
        edges={edges}
        // edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
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
        onEdgeContextMenu={onEdgeContextMenu}
        // fitView
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onInit={setRfInstance}
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
          {/* <Button colorScheme="green" p="0">
            <a
              download={`${Date.now()}.json`}
              href="#"
              onClick={onSave}
              className={styles.downloadJSON}
            >
              Скачать JSON
            </a>
          </Button> */}
          <Button
            colorScheme="green"
            p="0"
            onClick={onJsonSave}
            className={styles.downloadJSON}
          >
            Скачать JSON
          </Button>
        </Panel>
        {/* <DownloadButton myRef={flowRef} /> */}
        <Panel position="top-left">
          <DownloadPDFSchemeV2 flowRef={flowRef} />
          {/* <DownloadQuestionnaireTable /> */}
          {/* <PDFDownloadLink
            document={<PDFScheme myRef={flowRef} />}
            fileName="Scheme"
          >
            {({ loading }) =>
              loading ? <button>Loading...</button> : <button>Download</button>
            }
          </PDFDownloadLink> */}
        </Panel>
        <Panel position="bottom-left">
          {/* {resultCoords && (
            <Box color={"black"}>КООРДИНАТЫ:{resultCoords.status}</Box>
          )}
          {resultGroup && (
            <Box color={"green"}>ДОБАВЛЕНО В ГРУППУ:{resultGroup.status}</Box>
          )} */}

          <AlertButton tip={"error"} />
          <WarningBtn />
        </Panel>
        <Controls />
        {menuImage && <ImageContextMenu onClick={onPaneClick} {...menuImage} />}
        {menuShkaf && <ShkafContextMenu onClick={onPaneClick} {...menuShkaf} />}
        {menuEdge && <EdgeContextMenu onClick={onPaneClick} {...menuEdge} />}
      </ReactFlow>
    </div>
  );
};

export default Flow;
