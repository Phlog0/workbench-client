import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import orderItems from "./utils/orderItems";

type TUpdateNodeProps = {
  id: string;
  index: number;
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

type TNode = {
  id: string;
  type: string;
  position: TCoords;
  draggable: boolean;
  currentCellOption: number;

  currentCommutationOption: number;

  currentTransformatorOption: number;
  parentNode: string;
};

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

const initialState = {
  properties: {
    cellOptions: [
      "ТСН",
      "Шинный мост",
      "СВ",
      "СР",
      "Шинный переход",
      "Ввод",
      "Отходящая линия",
      "УКРМ",
      "ТН",
    ],
    commutationOptions: ["нет", "ВВ", "ВР", "ВНВР"],
    transformatorOptions: [
      "нет",
      "2 трансформатора тока 2 обмотки",
      "2 трансформатора тока 3 обмотки",
      "2 трансформатора тока 4 обмотки",
      "2 трансформатора тока 5 обмотки",
      "2 трансформатора тока 6 обмотки",
      "3 трансформатора тока 2 обмотки",
      "3 трансформатора тока 3 обмотки",
      "3 трансформатора тока 4 обмотки",
      "3 трансформатора тока 5 обмотки",
      "3 трансформатора тока 6 обмотки",
    ],
  },
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
      draggable: false,
      currentCellOption: 0,
      currentCommutationOption: 0,
      currentTransformatorOption: 1,
      parentNode: "group1",
    },

    {
      id: "2",
      type: "CustomNodeType",
      position: { x: 0, y: 100 },
      draggable: true,
      currentCellType: 2,
      currentCommutationOption: 1,
      currentTransformatorOption: 9,
      parentNode: "",
    },
  ],

  currentNode: {
    id: "1",
  },
  snapGrid: ["10", "50", "100"],
  currentGrid: {
    index: 0,
  },
};

const nodeSlice = createSlice({
  name: "properties",

  initialState,

  reducers: {
    addNode(state, action: PayloadAction<TNode>) {
      console.log(action.payload);
      state.nodes.push(action.payload);
    },
    deleteNode(state,  action: PayloadAction<TCurrentNodeId>) {
      if (action.payload.id === 'group1') return
      const filteredNodes = state.nodes.filter(node => node.id !== action.payload.id);
      // const filteredChildren = filteredNodes.filter()
      const tire = state.nodes.find((item) => item.id === "group1");

      state.nodes = orderItems(filteredNodes, tire)
   
    },

    updateCellType(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      if (node) node.currentCellOption = action.payload.index;
    },
    updateCommutationType(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      if (node) node.currentCommutationOption = action.payload.index;
    },
    updateTransformatorType(state, action: PayloadAction<TTransformator>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      if (node) node.currentTransformatorOption = action.payload.index;
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
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
  updateCoordinats,
  updateGroup,
  updateTireSize,
  uploadNodes,
  addNode,
  deleteNode,
  changeCurrentNode,
  changeCurrentGrid,
} = nodeSlice.actions;

export default nodeSlice.reducer;
