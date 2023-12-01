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

import { useFetchAllOPNQuery } from "../services/dictService";
import MyTable from "../shared/ModalTable/MyTable";
import FilterItems from "../features/FilterItems";
const MyModal = ({ isOpen, onOpen, onClose }) => {
  // const { data, error, isLoading } = useFetchAllOPNQuery();
  console.log("Modal render!");
  const deferredQuery = useDeferredValue(isOpen);
  const { data, error, isLoading } = useFetchAllOPNQuery();
  const deferredData = useDeferredValue(data);
  console.log(data);
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
          <ModalHeader>ОПН🟥</ModalHeader>
          <ModalCloseButton />
          <ModalBody className={styles.modalContainer}>
            
              <MyTable isLoading={isLoading} data={data} />
              <FilterItems />
      
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="red">
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
  // return (
  //   <Modal isOpen={isOpen} onClose={onClose}>
  //     <ModalOverlay />
  //     <ModalContent>
  //       <ModalHeader>Modal Title</ModalHeader>
  //       <ModalCloseButton />
  //       <ModalBody>
  //         hello svinka!
  //       </ModalBody>

  //       <ModalFooter>
  //         <Button colorScheme="blue" mr={3} onClick={onClose}>
  //           Close
  //         </Button>
  //         <Button variant="ghost">Secondary Action</Button>
  //       </ModalFooter>
  //     </ModalContent>
  //   </Modal>
  // );
};

export default MyModal;
