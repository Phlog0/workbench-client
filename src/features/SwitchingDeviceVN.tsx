// @ts-nocheck
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
import { updateProp } from "../store/flowSlice";
import { useAppSelector } from "../hook";

const SwitchingDeviceVN = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const locationOfGroundingBlades = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.locationOfGroundingBlades
  );
  const locationOfTheGroundingBladeDrive = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.locationOfTheGroundingBladeDrive
  );
  const manufacturer = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.manufacturer
  );
  const name = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.name
  );
  const numberOfGroundShafts = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.numberOfGroundShafts
  );
  const ratedBreakingCurrent = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.ratedBreakingCurrent
  );
  const ratedCurrent = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.ratedCurrent
  );
  const ratedVoltage = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.ratedVoltage
  );
  const switchDriveLocation = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.switchDriveLocation
  );
  const type = useAppSelector((state) =>
    state.flow.nodes.find((node) => node.id === id)?.switchingDeviceVN.type
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
                    <Text>Коммутационный аппарат ВН</Text>
                    <MyInput
                      tag={"switchingDeviceVNType"}
                      label={"Тип"}
                      inputType={"text"}
                      value={type}
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
                    value={name}
                    opt1={"switchingDeviceVN"}
                    opt2={"name"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={manufacturer}
                    opt1={"switchingDeviceVN"}
                    opt2={"manufacturer"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedCurrent"}
                    label={"Номинальный ток, А"}
                    inputType={"number"}
                    value={ratedCurrent}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedCurrent"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedBreakingCurrent"}
                    label={"Номинальный ток отключения, кА"}
                    inputType={"text"}
                    value={ratedBreakingCurrent}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedBreakingCurrent"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNRatedVoltage"}
                    label={"Номинальное напряжение, кВ"}
                    inputType={"text"}
                    value={ratedVoltage}
                    opt1={"switchingDeviceVN"}
                    opt2={"ratedVoltage"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNNumberOfGroundShafts"}
                    label={"Количество валов заземления"}
                    inputType={"text"}
                    value={numberOfGroundShafts}
                    opt1={"switchingDeviceVN"}
                    opt2={"numberOfGroundShafts"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNLocationOfGroundingBlades"}
                    label={"Расположение ножей заземления"}
                    inputType={"text"}
                    value={locationOfGroundingBlades}
                    opt1={"switchingDeviceVN"}
                    opt2={"locationOfGroundingBlades"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNSwitchDriveLocation"}
                    label={"Расположение привода выключателя"}
                    inputType={"text"}
                    value={switchDriveLocation}
                    opt1={"switchingDeviceVN"}
                    opt2={"switchDriveLocation"}

                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"switchingDeviceVNLocationOfTheGroundingBladeDrive"}
                    label={"Расположение привода ножей заземления"}
                    inputType={"text"}
                    value={locationOfTheGroundingBladeDrive}
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
