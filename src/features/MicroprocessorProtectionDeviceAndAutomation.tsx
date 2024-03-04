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
  Text,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";
import styles from "./properties.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { updateProp } from "../store/nodesSlice";
import MySelect from "../shared/MySelect";

const MicroprocessorProtectionDeviceAndAutomation = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useDispatch();

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const microprocessorProtectionDeviceAndAutomation =
    currentItemProperties?.microprocessorProtectionDeviceAndAutomation;
  const isThereAMicroprocessorProtectionDeviceAndAutomation =
    currentItemProperties?.isThereAMicroprocessorProtectionDeviceAndAutomation;

  return (
    <div className={styles.container}>
      <MySelect
        tag={"isThereAMicroprocessorProtectionDeviceAndAutomation"}
        label={"Есть Микропроциссорное устройство защиты и автоматики"}
        options={["Нет", "Да"]}
        itemId={id}
        current={isThereAMicroprocessorProtectionDeviceAndAutomation}
      />
      {isThereAMicroprocessorProtectionDeviceAndAutomation !== 0 && (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <div className={styles.inputContainer}>
                      <Text>
                        Микропроциссорное устройство защиты и автоматики
                      </Text>
                      <MyInput
                        tag={"MicroprocessorProtectionDeviceAndAutomationType"}
                        label={"Тип"}
                        inputType={"text"}
                        value={microprocessorProtectionDeviceAndAutomation.type}
                        opt1={"microprocessorProtectionDeviceAndAutomation"}
                        opt2={"type"}
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
                          type={"microprocessorProtectionDeviceAndAutomation"}
                        />
                      )}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.inputContainer}></div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"MicroprocessorProtectionDeviceAndAutomationName"}
                      label={"Наименование"}
                      inputType={"text"}
                      value={microprocessorProtectionDeviceAndAutomation.name}
                      opt1={"microprocessorProtectionDeviceAndAutomation"}
                      opt2={"name"}
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
                    />
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default MicroprocessorProtectionDeviceAndAutomation;
