import React from "react";
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
import styles from "./properties.module.scss";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { updateProp } from "../store/nodesSlice";
const ElectromagneticLocking = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const electromagneticLocking = currentItemProperties?.electromagneticLocking;

  const allElectromagneticLocking = Object.values(electromagneticLocking);
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

                  <div className={styles.inputContainer}>
                    <MyInputModal
                      label={"Электромагнитная блокировка"}
                      value={allElectromagneticLocking.toString()}
                    />
                    <Button
                      className={styles.OpenMenuDots}
                      ref={btnRef}
                      onClick={onOpen}
                    >
                      ...
                    </Button>
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"ElectromagneticLockingType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={electromagneticLocking.type}
                    opt1={"electromagneticLocking"}
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
                      type={"electromagneticLocking"}
                    />
                  )}
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"ElectromagneticLockingName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={electromagneticLocking.name}
                    opt1={"electromagneticLocking"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"ElectromagneticLockingManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={electromagneticLocking.manufacturer}
                    opt1={"electromagneticLocking"}
                    opt2={"manufacturer"}
                    
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

export default ElectromagneticLocking;
