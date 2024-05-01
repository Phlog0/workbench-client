import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import orderItems from "./utils/orderItems";
import { act } from "react-dom/test-utils";
import initialProps from "./utils/initialProps";
import { IStore } from "./types";


type TUpdateNodeProps = {
  id: string;
  index: number;
  key: string;
};

type TCoords = {
  x: number;
  y: number;
};
type TUpdateNodeCoords = {
  id: string;
  position: TCoords;
};
type TUpdateNodeSize = {
  width: number;
  height: number;
};

// type TNode = {
//   id: string;
//   type: string;
//   position: TCoords;
//   draggable: boolean;
//   currentCellOption: number;

//   currentCommutationOption: number;

//   currentTransformatorOption: number;
//   parentNode: string;
// };

type TCurrentNodeId = {
  currentItemNode: string
};
type TCurrentIndex = {
  index: number;
};

type TTransformator = {
  id: string;
  index: number;
};

type TUpdateGroup = {
  nodeId: string;
  tireId: string;
};

type TrowData = {
  type: string;
  name: string;
  manufacturer: string;
  ratedOperatingVoltage: string;
  throughput: string | number;
  ratedDischargeCurrent: string;
  maximumContinuousPermissibleOperatingVoltage: string;
};

type TSwitchOPN = {
  id: string;

  rowData: TrowData;
};

type TStyle = {
  width: number;
  height: number;
};

type TUpdateSizeOnResizeEnd = {
  id: string;
  style: TStyle;
  position: TCoords;
  addedToGroup: string;
};

const initialState: IStore = {
  properties: {},
  nodes: [],
  edges: [],

  currentNodeId: "",

  snapGrid: ["10", "50", "100"],
  currentGrid: {
    index: 0,
  },
};

const flowSlice = createSlice({
  name: "properties",

  initialState,
  selectors: {
    getCurrentId: (state) => state,
  },

  reducers: {
    addNode(state, action: PayloadAction<TNode>) {
      // console.log(action.payload);

      state.nodes.push(action.payload);
    },

    deleteNode(state, action) {
      // if (action.payload.id.match("group")) return;
      console.log(action.payload.currentNodeId);
      const filteredNodes = state.nodes.filter(
        (node) => node.id !== action.payload.currentNodeId
      );
      state.nodes = filteredNodes;
      // const filteredChildren = filteredNodes.filter()
      // const tire = state.nodes.find(
      //   (item) => item.id === action.payload.tireId
      // ); //🔥🔥🔥🔥🔥🔥🔥🔥🔥

      // if (tire) state.nodes = orderItems(filteredNodes, tire.id);
    },

    updateNodePropSelect(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      // if (node) node.currentCellType = action.payload.index;
      if (node) node[action.payload.key] = action.payload.index;
    },

    updatePropsByRow(state, action) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      node[action.payload.type] = action.payload.updatedProps;
      // if (node) node.instrumentCurrentTransformers = action.payload.rowData;
    },

    updateProp(state, action) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      console.log(
        action.payload.key1,
        action.payload.value
      );
      if (node && action.payload.key2 !== "") {
        node[action.payload.key1][action.payload.key2] = action.payload.value;
      } else {
        node[action.payload.key1] = action.payload.value;
      }
    },

    setInitialProps(state, action) {
      const { id, initialProps } = action.payload
      console.log(initialProps);
      let node = state.nodes.find((item) => item.id === id);

      if (node) {
        for (const key in initialProps) {
          node[key] = initialProps[key]
        }
      }

    },

    updateCoordinats(state, action: PayloadAction<TUpdateNodeCoords>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);

      if (node) node.position = action.payload.position;
    },

    updateSizeOnResizeEnd(
      state,
      action: PayloadAction<TUpdateSizeOnResizeEnd>
    ) {
      const node = state.nodes.find((item) => item.id === action.payload.id);

      if (node) {
        node.style = action.payload.style;
        node.position = action.payload.position;
        node.addedToGroup = action.payload.addedToGroup

      }
    },

    updateGroup(state, action) {
      const node = state.nodes.find(
        (item, index) => item.id === action.payload.nodeId
      );

      // const tire = state.nodes.find(
      //   (item, index) => item.id === action.payload.tireId
      // );
      state.nodes = [...action.payload.items];

      // if (node) {
      //   node.parentNode = action.payload.tireId;
      //   node.draggable = false;
      // }


      // const allTires = state.nodes.filter((item) => item.id.includes("group"));

    },

    uploadNodes(state, action) {
      state.nodes = action.payload;

    },
    uploadEdges(state, action) {

      state.edges = action.payload
    },
    changeTireWidth(state, action) {

      const { id, newTireWidth, otherTiresRightIds, numberWidth } = action.payload
      const tire = state.nodes.find(item => item.id === id)
      const rightTires = state.nodes.filter(item => otherTiresRightIds.includes(item.id))
      for (let i = 0; i < rightTires.length; i++) {
        rightTires[i].position.x += numberWidth
      }
      tire.style.width = newTireWidth;
    },
    changeRightTiresPosition(state, action) {

      const { id, newTireWidth } = action.payload
      const tire = state.nodes.find(item => item.id === id)
      tire.style.width = newTireWidth;
    },

    updateFastenerShkaf(state, action) {
      const { shkafId, updatedShkafProps } = action.payload
      const shkaf = state.nodes.find(item => item.id === shkafId)
      if (shkaf) {
        shkaf.parentNode = updatedShkafProps.parentNode;
        shkaf.position = updatedShkafProps.position;
        shkaf.draggable = updatedShkafProps.draggable;
      }
    },
    removeRelationship(state, action) {
      const { id, parentNode, offset, draggable } = action.payload
      const shkaf = state.nodes.find(item => item.id === id)
      if (shkaf) {
        shkaf.parentNode = parentNode;
        shkaf.position.y = shkaf.position.y + offset.y;
        shkaf.draggable = draggable;
      }
    },

    changeCurrentNode(state, action: PayloadAction<TCurrentNodeId>) {
      state.currentNodeId = action.payload.currentItemNode;
    },
    changeCurrentGrid(state, action: PayloadAction<TCurrentIndex>) {
      state.currentGrid.index = action.payload.index;
    },
    // =======================================САМОПРОВЕРКИ=======================================


    changeError(state, action) {
      const { id, prop, value } = action.payload
      const node = state.nodes.find(item => item.id === id)
      if (prop) node[prop] = value || false;
    },




    addEdgeRedux(state, action) {
      // console.log(action.payload);

      state.edges.push(action.payload);
    },
    deleteEdgeRedux(state, action) {
      // console.log(action.payload);

      state.edges = state.edges.filter(item => item.id !== action.payload.id)
    },

  },












});

export const {
  updateNodePropSelect,
  updateCoordinats,
  updateSizeOnResizeEnd,
  updateGroup,
  // updateTireSize,
  uploadNodes,
  uploadEdges,
  addNode,
  deleteNode,
  changeCurrentNode,
  changeCurrentGrid,
  setInitialProps,
  updatePropsByRow,
  updateProp,



  //
  changeTireWidth,
  updateFastenerShkaf,
  removeRelationship,



  changeError

  ,


  addEdgeRedux,
  deleteEdgeRedux,
} = flowSlice.actions;

export const { getCurrentId } = flowSlice.selectors;

export default flowSlice.reducer;
