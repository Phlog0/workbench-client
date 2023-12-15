import React, { useRef } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
  Input,
  Select,
  Button,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Lorem,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";
import styles from "./MicroprocessorProtectionDeviceAndAutomation.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { updateProp } from "../store/nodesSlice";

const MicroprocessorProtectionDeviceAndAutomation = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchDataQuery(
    "MicroprocessorProtectionDeviceAndAutomation"
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const microprocessorProtectionDeviceAndAutomation =
    currentItemProperties?.microprocessorProtectionDeviceAndAutomation;

  const allMicroprocessorProtectionDeviceAndAutomation = Object.values(
    microprocessorProtectionDeviceAndAutomation
  );
  const inputChange = (event) => {
    dispatch(
      updateProp({
        id: id,
        key1: event.target.dataset.opt1,
        key2: event.target.dataset.opt2,
        value: event.target.value,
      })
    );
  };
  return (
    <>
      <Accordion allowToggle className="">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                  <Box as="span" flex="1" textAlign="left">
                    <MyInputModal
                      label={"Микропроциссорное устройство защиты и автоматики"}
                      value={allMicroprocessorProtectionDeviceAndAutomation.toString()}
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"}>
                  <MyInput
                    tag={"MicroprocessorProtectionDeviceAndAutomationType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={microprocessorProtectionDeviceAndAutomation.type}
                    opt1={"microprocessorProtectionDeviceAndAutomation"}
                    opt2={"type"}
                    onChange={inputChange}
                  />
                  <Button
                    className={styles.OpenMenuDots}
                    ref={btnRef}
                    onClick={onOpen}
                  >
                    ...
                  </Button>

                  {isOpen && (
                    <MyModal
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                      data={data}
                      isLoading={isLoading}
                      error={error}
                      type={"microprocessorProtectionDeviceAndAutomation"}
                    />
                  )}
                </Flex>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"MicroprocessorProtectionDeviceAndAutomationName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={microprocessorProtectionDeviceAndAutomation.name}
                    opt1={"microprocessorProtectionDeviceAndAutomation"}
                    opt2={"name"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={
                      "MicroprocessorProtectionDeviceAndAutomationManufacturer"
                    }
                    label={"Производитель"}
                    inputType={"text"}
                    value={
                      microprocessorProtectionDeviceAndAutomation.manufacturer
                    }
                    opt1={"microprocessorProtectionDeviceAndAutomation"}
                    opt2={"manufacturer"}
                    onChange={inputChange}
                  />
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MicroprocessorProtectionDeviceAndAutomation;
