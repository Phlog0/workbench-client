import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TArrivalSidebarProps } from "../types/types";
import { act } from "react-dom/test-utils";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

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

type TNode = {
  id: string;
  type: string;
  position: TCoords;
  prop1: number;
  prop2: number;
  prop3: number;
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

const initialState = {
  nodes: [
    // {
    //   id: "group1",
    //   data: { label: "Group A" },
    //   position: { x: 220, y: 200 },
    //   // className: "light",
    //   style: {
    //     // backgroundColor: "rgba(255, 0, 0, 0.2)",
    //     width: 200,
    //     height: 200,
    //   },
    // },
    // {
    //   id: "tire1",
    //   data: { label: "tire" },
    //   type: "TireNodeType",
    //   position: { x: 0, y: 0 },
    //   // className: "light",
    //   parentNode: "group1",
    //   extent: "parent",
    //   style: { width: 100, height: 10 },
    // },

    {
      id: "1",
      type: "CustomNodeType",
      position: { x: 0, y: 0 },

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
      currentCellOption: 0,

      commutationOptions: ["нет", "ВВ", "ВР", "ВНВР"],
      currentCommutationOption: 0,

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
      currentTransformatorOption: 1,
    },

    {
      id: "2",
      type: "CustomNodeType",
      position: { x: 0, y: 100 },
      // prop1: 3,
      // prop2: 2,
      // prop3: 1,
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
      currentCellType: 2,

      commutationOptions: ["нет", "ВВ", "ВР", "ВНВР"],
      currentCommutationOption: 1,

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
      currentTransformatorOption: 9,
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

    updateCellType(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      node.currentCellOption = action.payload.index;
    },
    updateCommutationType(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      node.currentCommutationOption = action.payload.index;
    },
    updateTransformatorType(state, action: PayloadAction<TTransformator>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      node.currentTransformatorOption = action.payload.index;
    },
    updateCoordinats(state, action: PayloadAction<TUpdateNodeCoords>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);

      if (node != undefined) node.position = action.payload.position;
    },

    changeCurrentNode(state, action: PayloadAction<TCurrentNodeId>) {
      state.currentNode.id = action.payload.id;
    },
    changeCurrentGrid(state, action: PayloadAction<TCurrentIndex>) {
      console.log(action.payload);
      state.currentGrid.index = action.payload.index;
    },
  },
});

export const {
  updateCellType,
  updateCommutationType,
  updateTransformatorType,
  updateCoordinats,
  addNode,
  changeCurrentNode,
  changeCurrentGrid,
} = nodeSlice.actions;

export default nodeSlice.reducer;
