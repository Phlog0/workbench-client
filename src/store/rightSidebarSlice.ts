import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TArrivalSidebarProps } from "../types/types";
import { useAppSelector } from "../hook";
// const values = useAppSelector(state=>state.nodes)
const initialState: TArrivalSidebarProps = {

  prop1: 1,
  prop2: 1,
  prop3: 1,
};

const figuresSlice = createSlice({
  name: "properties",

  initialState,

  reducers: {
    updateProperties(state, action: PayloadAction<TArrivalData>) {
      //state = store
      // console.log(action.payload);
      // const { key } = action.payload;
      // const { value } = action.payload;
      // state[key as keyof typeof initialState] = value;

//    ❓❓❓❓❓❓❓❓❓❓❓❓❓❓
      state.prop1 = action.payload.prop1
      state.prop2 = action.payload.prop2
      state.prop3 = action.payload.prop3
    
      // console.log(initialState);
   
    },
  },

  
});

export const { updateProperties } = figuresSlice.actions;

export default figuresSlice.reducer;
