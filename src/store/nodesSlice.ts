import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import orderItems from "./utils/orderItems";
import { act } from "react-dom/test-utils";
import initialProps from "./utils/initialProps";

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
  currentId: { id: string };
  tireId: string;
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
};

const initialState = {
  properties: {},
  nodes: [],

  currentNode: {
    id: "",
  },
  snapGrid: ["10", "50", "100"],
  currentGrid: {
    index: 0,
  },
};

const nodeSlice = createSlice({
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

    deleteNode(state, action: PayloadAction<TCurrentNodeId>) {
      // if (action.payload.id.match("group")) return;
      console.log(action.payload);
      const filteredNodes = state.nodes.filter(
        (node) => node.id !== action.payload.currentId.id
      );
      state.nodes = filteredNodes;
      // const filteredChildren = filteredNodes.filter()
      const tire = state.nodes.find(
        (item) => item.id === action.payload.tireId
      ); //🔥🔥🔥🔥🔥🔥🔥🔥🔥

      if (tire) state.nodes = orderItems(filteredNodes, tire);
    },

    updateNodePropSelect(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      // if (node) node.currentCellType = action.payload.index;
      if (node) node[action.payload.key] = action.payload.index;
    },

    updatePropsByRow(state, action) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      const currentProps = node[action.payload.type];
      let i = 0;
      if (node)
        for (const property in currentProps) {
          currentProps[property] = action.payload.rowData[i];
          i++;
        }
      node[action.payload.type] = currentProps;
      // if (node) node.instrumentCurrentTransformers = action.payload.rowData;
    },

    updateProp(state, action) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      console.log(
        action.payload.key1,
        action.payload.key2,
        action.payload.value
      );
      if (node && action.payload.key2 !== "") {
        node[action.payload.key1][action.payload.key2] = action.payload.value;
      } else {
        node[action.payload.key1] = action.payload.value;
      }
    },

    setInitialProps(state, action) {
      console.log(action.payload.props);
      let node = state.nodes.find((item) => item.id === action.payload.id);
      console.log(node);

      if (node) {
        // node.currentCellOption = initialProps.currentCellOption;
        node.currentTypeOfSwitchingDevice =
          initialProps.currentTypeOfSwitchingDevice;
        node.switchingDeviceVV = initialProps.switchingDeviceVV;
        node.switchingDeviceVN = initialProps.switchingDeviceVN;
        node.switchingDeviceR = initialProps.switchingDeviceR;
        node.thereIsACircuitBreakers = initialProps.thereIsACircuitBreakers;
        node.circuitBreakers = initialProps.circuitBreakers;
        node.currentTransformatorOption =
          initialProps.currentTransformatorOption;
        node.instrumentCurrentTransformers =
          initialProps.instrumentCurrentTransformers;
        node.ratedCurrentOfTheMainCircuits =
          initialProps.ratedCurrentOfTheMainCircuits;
        node.isThereAnOpn = initialProps.isThereAnOpn;
        node.opn = initialProps.opn;
        node.isThereAMicroprocessorProtectionDeviceAndAutomation =
          initialProps.isThereAMicroprocessorProtectionDeviceAndAutomation;
        node.microprocessorProtectionDeviceAndAutomation =
          initialProps.microprocessorProtectionDeviceAndAutomation;
        node.isThereAnElectromagneticLocking =
          initialProps.isThereAnElectromagneticLocking;
        node.electromagneticLocking = initialProps.electromagneticLocking;
        node.isThereAVoltageTransformers =
          initialProps.isThereAVoltageTransformers;

        node.voltageTransformers = initialProps.voltageTransformers;
        node.isThereAElectricityMeter = initialProps.isThereAElectricityMeter;
        node.electricityMeter = initialProps.electricityMeter;
        node.transformersForOwnNeeds = initialProps.transformersForOwnNeeds;
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

      if (node) node.style = action.payload.style;
      if (node) node.position = action.payload.position;
    },

    updateGroup(state, action: PayloadAction<TUpdateGroup>) {
      const node = state.nodes.find(
        (item, index) => item.id === action.payload.nodeId
      );

      const tire = state.nodes.find(
        (item, index) => item.id === action.payload.tireId
      );

      if (node) {
        node.parentNode = action.payload.tireId;
        node.draggable = false;
      }

      state.nodes = orderItems(state.nodes, tire);
      // const allTires = state.nodes.filter((item) => item.id.includes("group"));
    },

    uploadNodes(state, action) {
      state.nodes = action.payload;
    },

    changeCurrentNode(state, action: PayloadAction<TCurrentNodeId>) {
      state.currentNode.id = action.payload.id;
    },
    changeCurrentGrid(state, action: PayloadAction<TCurrentIndex>) {
      state.currentGrid.index = action.payload.index;
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
  addNode,
  deleteNode,
  changeCurrentNode,
  changeCurrentGrid,
  setInitialProps,
  updatePropsByRow,
  updateProp,
} = nodeSlice.actions;

export const { getCurrentId } = nodeSlice.selectors;

export default nodeSlice.reducer;
