import { useState, FC, useEffect } from "react";

import "./App.scss";

import TopNavbar from "./widgets/TopNavbar";
import RightSidebar from "./widgets/RightSidebar";
import Flow from "./widgets/Flow";
import { ReactFlowProvider } from "reactflow";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
const App: FC = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   onOpen();
  // }, []);

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
