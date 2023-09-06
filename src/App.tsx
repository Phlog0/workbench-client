import { useState, FC } from "react";

import "./App.css";

import TopNavbar from "./components/TopNavbar";
import RightSidebar from "./components/RightSidebar";
import Flow from "./components/Flow";
import { TArrivalSidebarProps } from "./types/types";
const App: FC = () => {
  const [currentProps, setCurrentProps] = useState<TArrivalSidebarProps | null>(
    null
  );

  const [reactFlowGridGap, setReactFlowGridGap] = useState([10, 10]);
  return (
    <div className="app">
      <TopNavbar
        reactFlowGridGap={reactFlowGridGap}
        setReactFlowGridGap={setReactFlowGridGap}
      />
      <Flow
        currentProps={currentProps || null}
        setCurrentProps={setCurrentProps}
        reactFlowGridGap={reactFlowGridGap}
        setReactFlowGridGap={setReactFlowGridGap}
      />
      <RightSidebar
        currentProps={currentProps || null}
        setCurrentProps={setCurrentProps}
      />
    </div>
  );
};

export default App;
