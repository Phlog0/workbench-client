import React from "react";
import styles from "./SpravochInf.module.scss";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import spravochinArray from "./spravochinArray";
import { Link } from "react-router-dom";
import MyAccordeonSpravochin from "./MyAccordeonSpravochin";
import MyAccordeonSpravochin2 from "./MyAccordeonSpravochin2";
import MyAccordeonSpravochinTT from "./MyAccordeonSpravochinTT";
import MyAccordeonSpravochinTN from "./MyAccordeonSpravochinTN";
import MyAccordeonSpravochinTSN from "./MyAccordeonSpravochinTSN";
import MyAccordeonSpravochinOPN from "./MyAccordeonSpravochinOPN";
import MyAccordeonSpravochinEL from "./MyAccordeonSpravochinEL";
import MyAccordeonSpravochinMICRO from "./MyAccordeonSpravochinMICRO";
import MyAccordeonSpravochinCOS from "./MyAccordeonSpravochinCOS";
const SpravochInfModal = ({ onClose, isOpen }) => {
  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Спрачоная информация</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MyAccordeonSpravochin />
          <MyAccordeonSpravochin2 />
          <MyAccordeonSpravochinTT />
          <MyAccordeonSpravochinTN />
          <MyAccordeonSpravochinTSN />
          <MyAccordeonSpravochinOPN />
          <MyAccordeonSpravochinEL />
          <MyAccordeonSpravochinMICRO />
          <MyAccordeonSpravochinCOS />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SpravochInfModal;
