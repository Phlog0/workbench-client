import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import Login from "./pages/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </ReduxProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
