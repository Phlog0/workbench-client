import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import orderItems from "./utils/orderItems";
import { act } from "react-dom/test-utils";

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
  id: string;
};
type TCurrentIndex = {
  index: number;
};

type TTransformator = {
  id: string;
  index: number;
};

type TUpdateGroup = {
  id: string;
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

const initialState = {
  properties: {},
  nodes: [
    {
      id: "group1",
      position: { x: 420, y: 300 },
      type: "TireNodeType",
      // className: "light",
      style: {
        width: 360,
        height: 30,
      },
    },
    {
      id: "1",
      type: "CustomNodeType",
      position: { x: 30, y: 0 },
      parentNode: "group1",
      draggable: false,
      currentCellOption: 0,
      currentTypeOfSwitchingDevice: 0,
      switchingDeviceVV: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
      },
      switchingDeviceVN: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
        numberOfGroundShafts: "",
        locationOfGroundingBlades: "",
        switchDriveLocation: "",
        locationOfTheGroundingBladeDrive: "",
      },
      switchingDeviceR: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        thermalCurrent: "",
        ratedVoltage: "",
      },

      thereIsAFuseCurrent: 0,
      // ===============================================================
      currentTransformatorOption: 1,
    
      ratedCurrentOfTheMainCircuits: 0, // Номинальный ток главных цепей,А
      opn: {
        type: "",
        name: "",
        manufacturer: "",
        ratedOperatingVoltage: "",
        throughput: "",
        ratedDischargeCurrent: "",
        maximumContinuousPermissibleOperatingVoltage: "",
      },
      microprocessorProtectionDeviceAndAutomation: {
        type: "",
        name: "",
        manufacturer: "",
      },
      electromagneticLocking: {
        type: "",
        name: "",
        manufacturer: "",
      },
      instrumentCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        accuracyClass: "",
        oneSecondThermalCurrent: "",
        typeOfService: "",
      },
      voltageTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedThreePhasePowerOfTheFirstWinding: "",
        accuracyClassOfTheFirstSecondaryWinding: "",
        ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
        accuracyClassOfTheSecondSecondaryWinding: "",
        ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
        accuracyClassOfSecondaryReturnWires: "",
        ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
      },
      currentTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      currentTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      frequencyConvertersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      frequencyConvertersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      voltageTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      voltageTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      powerTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      powerTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      circuitBreakers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrentOfFuseLink: "",
      },
      electricityMeter: {
        type: "",
        name: "",
        manufacturer: "",
        accuracyClass: "",
      },
      transformersForOwnNeeds: {
        type: "",
        name: "",
        manufacturer: "",
        ratedPower: "",
      },
      zeroSequenceCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        oneSecondThermalCurrentOfTheSecondaryWinding: "",
      },
    },
    // ========================================================ITEM #2===============================================================
    {
      // ==========================REACT-FLOW PROPS==========================
      id: "2",
      type: "CustomNodeType",
      position: { x: 0, y: 100 },
      draggable: true,
      // ==========================END OF REACT-FLOW PROPS==========================
      currentCellOption: 2,
      // ==========================КОММУТАЦИОННЫЙ АППАРАТ==========================
      currentTypeOfSwitchingDevice: 1,
      switchingDeviceVV: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
      },
      switchingDeviceVN: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        ratedBreakingCurrent: "",
        ratedVoltage: "",
        numberOfGroundShafts: "",
        locationOfGroundingBlades: "",
        switchDriveLocation: "",
        locationOfTheGroundingBladeDrive: "",
      },
      switchingDeviceR: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrent: "",
        thermalCurrent: "",
        ratedVoltage: "",
      },

      thereIsAFuseCurrent: 0,

      // ==========================КОНЕЦ КОММУТАЦИОННОГО АППАРАТА==========================
      currentTransformatorOption: 2,
      parentNode: "",
      ratedCurrentOfTheMainCircuits: 1,
      opn: {
        type: "",
        name: "",
        manufacturer: "",
        ratedOperatingVoltage: "",
        throughput: "",
        ratedDischargeCurrent: "",
        maximumContinuousPermissibleOperatingVoltage: "",
      },
      microprocessorProtectionDeviceAndAutomation: {
        type: "",
        name: "",
        manufacturer: "",
      },
      electromagneticLocking: {
        type: "",
        name: "",
        manufacturer: "",
      },
      instrumentCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        accuracyClass: "",
        oneSecondThermalCurrent: "",
        typeOfService: "",
      },
      voltageTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedThreePhasePowerOfTheFirstWinding: "",
        accuracyClassOfTheFirstSecondaryWinding: "",
        ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
        accuracyClassOfTheSecondSecondaryWinding: "",
        ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
        accuracyClassOfSecondaryReturnWires: "",
        ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
      },
      currentTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      currentTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      frequencyConvertersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      frequencyConvertersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        frequencyMeasurementRange: "",
        quantity: "",
      },
      voltageTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      voltageTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputVoltageRange: "",
        outputCurrentRange: "",
        quantity: "",
      },
      powerTransducersType1: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      powerTransducersType2: {
        type: "",
        name: "",
        manufacturer: "",
        numberOfChannels: "",
        inputCurrentRange: "",
        outputCurrentRange: "",
        inputVoltageRange: "",
        outputVoltageRange: "",
        sin: "",
        cos: "",
      },
      circuitBreakers: {
        type: "",
        name: "",
        manufacturer: "",
        ratedCurrentOfFuseLink: "",
      },
      electricityMeter: {
        type: "",
        name: "",
        manufacturer: "",
        accuracyClass: "",
      },
      transformersForOwnNeeds: {
        type: "",
        name: "",
        manufacturer: "",
        ratedPower: "",
      },
      zeroSequenceCurrentTransformers: {
        type: "",
        name: "",
        manufacturer: "",
        transformationRatio: "",
        oneSecondThermalCurrentOfTheSecondaryWinding: "",
      },
    },
  ],

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
      console.log(action.payload);
      state.nodes.push(action.payload);
    },
    deleteNode(state, action: PayloadAction<TCurrentNodeId>) {
      if (action.payload.id === "group1") return;
      const filteredNodes = state.nodes.filter(
        (node) => node.id !== action.payload.id
      );
      // const filteredChildren = filteredNodes.filter()
      const tire = state.nodes.find((item) => item.id === "group1");

      state.nodes = orderItems(filteredNodes, tire);
    },

    updateNodePropSelect(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      // if (node) node.currentCellType = action.payload.index;
      if (node) node[action.payload.key] = action.payload.index;
    },
    // updateCommutationType(state, action: PayloadAction<TUpdateNodeProps>) {
    //   const node = state.nodes.find((item) => item.id === action.payload.id);
    //   if (node) node.currentCommutationOption = action.payload.index;
    // },
    // updateTransformatorType(state, action: PayloadAction<TTransformator>) {
    //   const node = state.nodes.find((item) => item.id === action.payload.id);
    //   if (node) node.currentTransformatorOption = action.payload.index;
    // },
    // updateRatedCurrentOfTheMainCircuits(state, action) {
    //   console.log(action.payload);
    //   const node = state.nodes.find((item) => item.id === action.payload.id);
    //   if (node) node.ratedCurrentOfTheMainCircuits = action.payload.index;
    // },

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
        action.payload.id,
        action.payload.value
      );
      if (node)
        node[action.payload.key1][action.payload.key2] = action.payload.value;
    },

    updateCoordinats(state, action: PayloadAction<TUpdateNodeCoords>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);

      if (node) node.position = action.payload.position;
    },

    updateTireSize(state, action: PayloadAction<TUpdateNodeSize>) {
      const node = state.nodes.find((item) => item.id === "group1");
      if (node) node.style = action.payload;
    },

    updateGroup(state, action: PayloadAction<TUpdateGroup>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      const tire = state.nodes.find((item) => item.id === "group1");

      if (node) {
        node.parentNode = "group1";
        node.draggable = false;
      }

      state.nodes = orderItems(state.nodes, tire);
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
  updateGroup,
  updateTireSize,
  uploadNodes,
  addNode,
  deleteNode,
  changeCurrentNode,
  changeCurrentGrid,

  updatePropsByRow,
  updateProp,
} = nodeSlice.actions;

export const { getCurrentId } = nodeSlice.selectors;

export default nodeSlice.reducer;
