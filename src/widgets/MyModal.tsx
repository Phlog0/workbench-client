import React, {
  useState,
  useRef,
  useTransition,
  useDeferredValue,
  Suspense,
} from "react";
import {
  Button,
  Radio,
  RadioGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";

import styles from "./MyModal.module.scss";

import {
  useFetchAllOPNQuery,
  useFetchDataQuery,
} from "../services/dictService";
import MyTable from "../shared/ModalTable/MyTable";
import FilterItems from "../features/FilterItems";
const MyModal = ({ isOpen, onOpen, onClose, type, query }) => {
  query = query || "";

  const { data, error, isLoading } = useFetchDataQuery(`${type}/${query}`);
  // const { data, error, isLoading } = useFetchDataQuery(`${type}`);

  // console.log(error);

  return (
    <>
      <Modal
        size="full"
        onClose={onClose}
        // finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>ОПН🟥</ModalHeader> */}
          <ModalCloseButton />
          {error ? (
            <h1>{error.error}</h1>
          ) : (
            <ModalBody className={styles.modalContainer}>
              <MyTable
                isLoading={isLoading}
                data={data}
                type={type}
                onClose={onClose}
              />
              <FilterItems />
            </ModalBody>
          )}
          <ModalFooter>
            <Button onClick={onClose} colorScheme="red">
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
