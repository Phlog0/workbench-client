import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice"
import srightSidebarReducer from "./rightSidebarSlice";
import nodesReducer from "./nodesSlice";

const store = configureStore({
  //STORE
  reducer: {
    rightSidebarProps: srightSidebarReducer,
    nodes: nodesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
