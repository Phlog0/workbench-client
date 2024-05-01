// @ts-nocheck
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { MdError } from "react-icons/md";

import styles from "./RecModal.module.scss";

import { useAppSelector } from "../../hook";
import { shallowEqual } from "react-redux";
const ErrorsModal = ({ isOpen, onClose }) => {
  const allVvodErrors = useAppSelector((state) =>
    state.flow.nodes.filter((item) => item.type === "TireNodeType")
  , shallowEqual).map((item) => item.vvodError);
  const allUkrmErrors = useAppSelector((state) =>
    state.flow.nodes.filter((item) => item.type === "TireNodeType")
  , shallowEqual).map((item) => item.ukrmError);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ошибки</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {allVvodErrors.includes(true) && (
              <Box className={styles.errorItem}>
                <MdError />
                <p>
                  ВНИМАНИЕ! В секции используется более 1 вводной ячейки.
                  Рекомендуется оставить 1 ячейку в секции
                </p>
              </Box>
            )}
            {allUkrmErrors.includes(true) && (
              <Box className={styles.errorItem}>
                <MdError />
                <p>
                  ВНИМАНИЕ! В секции используется более 1 УКРМ ячейки.
                  Рекомендуется оставить 1 УКРМ ячейку в секции.
                </p>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ErrorsModal;
