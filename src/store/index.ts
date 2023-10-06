import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice";

const store = configureStore({
  //STORE
  reducer: {
    nodes: nodesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
