import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TArrivalSidebarProps } from "../types/types";
import { act } from "react-dom/test-utils";

type TUpdateNodeProps = {
  id: string;
  key: string;
  value: number;
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

const initialState = {
  nodes: [
    {
      id: "group1",
      data: { label: "Group A" },
      position: { x: 220, y: 200 },
      // className: "light",
      style: {
        // backgroundColor: "rgba(255, 0, 0, 0.2)",
        width: 200,
        height: 200,
      },
    },
    {
      id: "tire1",
      data: { label: "tire" },
      type: 'TireNodeType',
      position: { x: 0, y: 0 },
      // className: "light",
      parentNode: "group1",
      extent: "parent",
      style: { width: 100, height: 10 },
    },

    {
      id: "1",
      type: "CustomNodeType",
      position: { x: 0, y: 0 },

      prop1: 1,
      prop2: 2,
      prop3: 3,
    },
    {
      id: "2",
      type: "CustomNodeType",
      position: { x: 0, y: 100 },
      prop1: 3,
      prop2: 2,
      prop3: 1,
    },

    // {
    //   id: "1693935908222",
    //   type: "CustomNodeType",
    //   position: { x: 0, y: 100 },
    //   prop1: 1,
    //   prop2: 1,
    //   prop3: 1,
    // },
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

    updateProperties(state, action: PayloadAction<TUpdateNodeProps>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);

      node[action.payload.key] = action.payload.value;
      //as keyof
    },
    updateCoordinats(state, action: PayloadAction<TUpdateNodeCoords>) {
      const node = state.nodes.find((item) => item.id === action.payload.id);
      4;
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
  updateProperties,
  updateCoordinats,
  addNode,
  changeCurrentNode,
  changeCurrentGrid,
} = nodeSlice.actions;

export default nodeSlice.reducer;
