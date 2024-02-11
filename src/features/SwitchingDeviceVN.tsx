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

const SwitchingDeviceVN = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const switchingDeviceVN =
    currentItemProperties?.switchingDeviceVN;

  const AllswitchingDeviceVN = Object.values(switchingDeviceVN);

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
                    <Text>Коммутационный аппарат ВН</Text>
                    <MyInput
                      tag={"switchingDeviceVNType"}
                      label={"Тип"}
                      inputType={"text"}
                      value={switchingDeviceVN.type}
                      opt1={"switchingDeviceVN"}
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
                        type={'switchingDeviceVN'}
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
                    tag={"switchingDeviceVNName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={switchingDeviceVN.name}
                    opt1={"switchingDeviceVN"}
                    opt2={"name"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={switchingDeviceVN.manufacturer}
                    opt1={"switchingDeviceVN"}
                    opt2={"manufacturer"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={switchingDeviceVN.ratedCurrent}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedCurrent"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedBreakingCurrent"}
                    label={"Номинальный ток отключения, кА"}
                    inputType={"text"}
                    value={switchingDeviceVN.ratedBreakingCurrent}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedBreakingCurrent"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={switchingDeviceVN.ratedVoltage}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedVoltage"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNNumberOfGroundShafts"}
                    label={"Количество валов заземления"}
                    inputType={"text"}
                    value={switchingDeviceVN.numberOfGroundShafts}
                    opt1={"switchingDeviceVN"}
                    opt2={"numberOfGroundShafts"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNLocationOfGroundingBlades"}
                    label={"Расположение ножей заземления"}
                    inputType={"text"}
                    value={switchingDeviceVN.locationOfGroundingBlades}
                    opt1={"switchingDeviceVN"}
                    opt2={"locationOfGroundingBlades"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNSwitchDriveLocation"}
                    label={"Расположение привода выключателя"}
                    inputType={"text"}
                    value={switchingDeviceVN.switchDriveLocation}
                    opt1={"switchingDeviceVN"}
                    opt2={"switchDriveLocation"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNLocationOfTheGroundingBladeDrive"}
                    label={"Расположение привода ножей заземления"}
                    inputType={"text"}
                    value={switchingDeviceVN.ratedVoltage}
                    opt1={"switchingDeviceVN"}
                    opt2={"locationOfTheGroundingBladeDrive"}

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

export default SwitchingDeviceVN;
