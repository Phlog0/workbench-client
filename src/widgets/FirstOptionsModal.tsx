import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const FirstOptionsModal = ({ tireCount, setTireCount,setTotalVoltageState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const selectChange = (e) => {
    setTireCount(+e.target.selectedIndex);
  };


  const totalVoltageChange = (e)=>{
    setTotalVoltageState(e.target.value)
  }

  // ====================================================================================
  return (
    <Modal
      size="full"
      onClose={onClose}
      // finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody className={"styles.modalContainer"}>
          <Select onChange={selectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Select onChange={totalVoltageChange}>
            <option value="10">10 кВ</option>
            <option value="6">6 кВ</option>
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} colorScheme="green">
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FirstOptionsModal;
