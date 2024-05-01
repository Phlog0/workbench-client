import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "./flowSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { dictAPI } from "../services/dictService";
import { projectsApi } from "../services/projectService";
import { authAPI } from "../services/authService";

const store = configureStore({
  //STORE
  reducer: {
    flow: flowReducer,
    [dictAPI.reducerPath]: dictAPI.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictAPI.middleware, projectsApi.middleware, authAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
