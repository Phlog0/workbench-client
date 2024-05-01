import React from "react";
import { FC } from "react";

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
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import MainMenu from "./pages/MainMenu";
import RequireAuth from "./pages/RequireAuth";
import Login from "./pages/Login";
import Missing from "./pages/Missing";
import AuthProvider from "./context/AuthProvider";
import UpdateProfile from "./pages/UpdateProfile";
import Registration from "./pages/Registration";
import OprosnyList from "./pages/oprosnyList/OprosnyList";

const App: FC = () => {
  return (
    <Routes>
      <Route path="project/" element={<Project />} />

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
