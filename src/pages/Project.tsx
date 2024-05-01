import { useState, FC, useEffect } from "react";

import styles from './Project.module.scss'

import TopNavbar from "../widgets/TopNavbar";
import RightSidebar from "../widgets/RightSidebar";
import Flow from "../widgets/Flow";
import { ReactFlowProvider } from "reactflow";


const Project: FC = () => {

    

  return (
    <div className={styles.app}>
      <TopNavbar />

      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>

      <RightSidebar />
    </div>
  );
};

export default Project;
