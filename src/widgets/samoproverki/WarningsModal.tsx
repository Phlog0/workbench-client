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
const WarningsModal = ({ isOpen, onClose }) => {
  const allZeroVvodWarning = useAppSelector(
    (state) => state.flow.nodes.filter((item) => item.type === "TireNodeType"),
    shallowEqual
  ).map((item) => item.zeroVvodWarning);

  const currentItemId = useAppSelector((state) => state.flow.currentNodeId);

  const currentTypeOfSwitchingDevice = useAppSelector((state) =>
    state.flow.nodes.find((item) => item.id === currentItemId)
  )?.currentTypeOfSwitchingDevice;
  const currentTransformatorOption = useAppSelector((state) =>
    state.flow.nodes.find((item) => item.id === currentItemId)
  )?.currentTransformatorOption;
  const microprocessorProtectionDeviceAndAutomation = useAppSelector(
    (state) => state.flow.nodes.find((item) => item.id === currentItemId),
    shallowEqual
  )?.microprocessorProtectionDeviceAndAutomation;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ошибки</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {allZeroVvodWarning.includes(true) && (
              <Box className={styles.errorItem}>
                <MdError />
                <p>
                  ВНИМАНИЕ! В каждой секции должна присутствовать 1 вводная
                  ячейка (тип ячейки: "Ввод")
                </p>
              </Box>
            )}
            {currentTypeOfSwitchingDevice === 1 &&
              (currentTransformatorOption === 0 ||
                microprocessorProtectionDeviceAndAutomation?.type === "") && (
                <Box className={styles.errorItem}>
                  <MdError />
                  <p>
                    ВНИМАНИЕ! При использовании вакуумного выключателя (ВВ)
                    необходимо заполнить поля "микропроцессорная защита" и
                    выбрать трансформаторы тока!
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

export default WarningsModal;
