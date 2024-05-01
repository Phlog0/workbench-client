import React, { useRef } from "react";
import {
  Accordion,
  AccordionButton,

  AccordionItem,
  AccordionPanel,

  Button,

  useDisclosure,

  Text,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
import MyModal from "../widgets/MyModal";
import styles from "./properties.module.scss";

import { useAppSelector } from "../hook";

const SwitchingDeviceR = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const manufacturer = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR
        .manufacturer
  );
  const name = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR.name
  );
  const ratedCurrent = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR
        .ratedCurrent
  );
  const ratedVoltage = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR
        .ratedVoltage
  );
  const thermalCurrent = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR
        .thermalCurrent
  );
  const type = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.switchingDeviceR.type
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
                    <Text>Коммутационный аппарат Р</Text>
                    <MyInput
                      tag={"switchingDeviceRType"}
                      label={"Тип"}
                      inputType={"text"}
                      value={type}
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
                        type={"switchingDeviceR"}
                      />
                    )}
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}></div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={name}
                    opt1={"switchingDeviceR"}
                    opt2={"name"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={manufacturer}
                    opt1={"switchingDeviceR"}
                    opt2={"manufacturer"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={ratedCurrent}
                    opt1={"switchingDeviceR"}
                    opt2={"ratedCurrent"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRThermalCurrent"}
                    label={"Ток термической стойкости (А)"}
                    inputType={"text"}
                    value={thermalCurrent}
                    opt1={"switchingDeviceR"}
                    opt2={"thermalCurrent"}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceRRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={ratedVoltage}
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
