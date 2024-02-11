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

const SwitchingDeviceVV = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  
  const currentItemProperties = useAppSelector((state) =>
  state.nodes.nodes.find((node) => node.id === id)
);
const switchingDeviceVV =
  currentItemProperties?.switchingDeviceVV;

const AllswitchingDeviceVV = Object.values(switchingDeviceVV);

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
                    <Text>Коммутационный аппарат ВВ</Text>
                  <MyInput
                    tag={"switchingDeviceVVType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={switchingDeviceVV.type}
                    opt1={"switchingDeviceVV"}
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
                      type={'switchingDeviceVV'}
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
                    tag={"switchingDeviceVVName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={switchingDeviceVV.name}
                    opt1={"switchingDeviceVV"}
                    opt2={"name"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={switchingDeviceVV.manufacturer}
                    opt1={"switchingDeviceVV"}
                    opt2={"manufacturer"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={switchingDeviceVV.ratedCurrent}
                    opt1={"switchingDeviceVV"}
                    opt2={"ratedCurrent"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedBreakingCurrent"}
                    label={"Номинальный ток отключения, кА"}
                    inputType={"text"}
                    value={switchingDeviceVV.ratedBreakingCurrent}
                    opt1={"switchingDeviceVV"}
                    opt2={"ratedBreakingCurrent"}
                    
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={switchingDeviceVV.ratedVoltage}
                    opt1={"switchingDeviceVV"}
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

export default SwitchingDeviceVV;
