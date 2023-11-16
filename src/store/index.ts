import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { dictAPI } from "../services/dictService";

const store = configureStore({
  //STORE
  reducer: {
    nodes: nodesReducer,
    [dictAPI.reducerPath]: dictAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
