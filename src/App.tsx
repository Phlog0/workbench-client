import { useState, FC } from "react";

import "./App.css";

import TopNavbar from "./widgets/TopNavbar";
import RightSidebar from "./widgets/RightSidebar";
import Flow from "./widgets/Flow";
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
