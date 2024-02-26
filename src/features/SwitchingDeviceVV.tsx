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
import { updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
import useDebounce from "../hooks/useDebounce";

const SwitchingDeviceVV = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );

  const switchingDeviceVV = currentItemProperties?.switchingDeviceVV;

  const [state, setState] = useState({ ...switchingDeviceVV });

  const AllswitchingDeviceVV = Object.values(switchingDeviceVV);

  const dispatch = useDispatch();
  console.log(state);
  let isSearching = useRef(false);

  // const debouncedSearchTerm = useDebounce(state, 1000);

  // const inputChange = (event) => {
  //   console.log(event.target);
  //   setState((prev) => ({
  //     ...prev,
  //     [event.target.dataset.opt2]: event.target.value,
  //   }));
  //   if (debouncedSearchTerm) {
  //     isSearching.current = true;
  //     dispatch(
  //       updateProp({
  //         id: id,
  //         key1: event.target.dataset.opt1,
  //         key2: event.target.dataset.opt2,
  //         value: event.target.value,
  //       })
  //     );
  //     isSearching.current = false;
  //   }
  // };

  // useEffect(() => {
  //   setState({ ...switchingDeviceVV });
  // }, [id, switchingDeviceVV]);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     isSearching.current = true;
  //     dispatch(
  //       updateProp({
  //         id: id,
  //         key1: event.target.dataset.opt1,
  //         key2: event.target.dataset.opt2,
  //         value: event.target.value,
  //       })
  //     );
  //     isSearching.current = false;
  //   }
  // }, [state]);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     setIsSearching(true);
  //     inputChange();

  //   }

  //   return () => {
  //     setIsSearching(false);
  //   };
  // }, [debouncedSearchTerm]);

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
                      value={state.type}
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
                    value={state.name}
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
                    value={state.manufacturer}
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
                    value={state.ratedCurrent}
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
                    value={state.ratedBreakingCurrent}
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
                    value={state.ratedVoltage}
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
