import React, { useState, useRef } from "react";
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
} from "@chakra-ui/react";

import styles from "./MyModal.module.scss";

import { useFetchAllOPNQuery } from "../services/dictService";
import MyTable from "../shared/ModalTable/MyTable";
const MyModal = ({ isOpen, onOpen, onClose, btnRef }) => {
  // const { data, error, isLoading } = useFetchAllOPNQuery();

  return (
    <>
      <Modal
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ОПН🟥</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <TableContainer className={styles.scrollBlock}>
              <Table variant="simple">
                <Tbody>
                  {data &&
                    data.map((dataItem) => {
                      return <TableRow data={dataItem} />;
                    })}
                </Tbody>
              </Table>
            </TableContainer> */}
            {/* {isLoading && <h1>LOADING......</h1>} */}
            <MyTable  />
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
};

export default MyModal;
