import { useState, FC } from "react";

import "./App.css";

import TopNavbar from "./components/TopNavbar";
import RightSidebar from "./components/RightSidebar";
import Flow from "./components/Flow";
import { ReactFlowProvider } from "reactflow";
const App: FC = () => {
  return (
    <div className="app">
      <TopNavbar />
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>

      <RightSidebar />
    </div>
  );
};

export default App;
