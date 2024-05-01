// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
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
import { updateProp } from "../store/flowSlice";
import { useAppSelector } from "../hook";
import useDebounce from "../hooks/useDebounce";

const SwitchingDeviceVV = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const manufacturer = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.manufacturer
  );
  const name = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.name
  );
  const ratedBreakingCurrent = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.ratedBreakingCurrent
  );
  const ratedCurrent = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.ratedCurrent
  );
  const ratedVoltage = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.ratedVoltage
  );
  const type = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVV.type
  );



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
                      value={type}
                      opt1={"switchingDeviceVV"}
                      opt2={"type"}
                    />
                    <Button
                      // id="OpenMenuDots"
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
                        type={"switchingDeviceVV"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}></div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={name}
                    opt1={"switchingDeviceVV"}
                    opt2={"name"}
                    // onChange={inputChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={manufacturer}
                    opt1={"switchingDeviceVV"}
                    opt2={"manufacturer"}
                    // onChange={inputChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={ratedCurrent}
                    opt1={"switchingDeviceVV"}
                    opt2={"ratedCurrent"}
                    // onChange={inputChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedBreakingCurrent"}
                    label={"Номинальный ток отключения, кА"}
                    inputType={"text"}
                    value={ratedBreakingCurrent}
                    opt1={"switchingDeviceVV"}
                    opt2={"ratedBreakingCurrent"}
                    // onChange={inputChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVVRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={ratedVoltage}
                    opt1={"switchingDeviceVV"}
                    opt2={"ratedVoltage"}
                    // onChange={inputChange}
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
