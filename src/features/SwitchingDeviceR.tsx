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
import { useDispatch } from "react-redux";
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";

const SwitchingDeviceR = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  
  const currentItemProperties = useAppSelector((state) =>
  state.nodes.nodes.find((node) => node.id === id)
);
const switchingDeviceR =
  currentItemProperties?.switchingDeviceR;

const AllswitchingDeviceR = Object.values(switchingDeviceR);

const dispatch = useDispatch();

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
                    <Text>Коммутационный аппарат Р</Text>
                      <MyInput
                      tag={"switchingDeviceRType"}
                      label={"Тип"}
                      inputType={"text"}
                      value={switchingDeviceR.type}
                      opt1={"switchingDeviceR"}
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
                        type={'switchingDeviceR'}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={switchingDeviceR.name}
                    opt1={"switchingDeviceR"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={switchingDeviceR.manufacturer}
                    opt1={"switchingDeviceR"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={switchingDeviceR.ratedCurrent}
                    opt1={"switchingDeviceR"}
                    opt2={"ratedCurrent"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRThermalCurrent"}
                    label={"Ток термической стойкости (А)"}
                    inputType={"text"}
                    value={switchingDeviceR.thermalCurrent}
                    opt1={"switchingDeviceR"}
                    opt2={"thermalCurrent"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={switchingDeviceR.ratedVoltage}
                    opt1={"switchingDeviceR"}
                    opt2={"ratedVoltage"}
                    
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

export default SwitchingDeviceR;
