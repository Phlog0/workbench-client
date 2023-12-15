import React, {
  FC,
  useState,
  useRef,
  useTransition,
  useDeferredValue,
  startTransition,
} from "react";
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
import styles from "./SwitchOPN.module.scss";
import MyModal from "../widgets/MyModal";
import MyInput from "../shared/MyInput";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { updateOPN, updateProp } from "../store/nodesSlice";

interface ISwitchOPNProps {
  id: string;
}

const SwitchOPN: FC<ISwitchOPNProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);

  const { data, error, isLoading } = useFetchDataQuery("opn");

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const opn = currentItemProperties?.OPN;

  const allOpn = Object.values(opn);

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

                  <Box as="span" flex="1" textAlign="left">
                    <MyInputModal label={"ОПН"} value={allOpn.toString()} />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <Flex w={"100%"}>
                  {" "}
                  <MyInput
                    tag={"SwitchOPNType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={opn.type}
                    opt1={"OPN"}
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
                      error={error}
                      isLoading={isLoading}
                      type={"opn"}
                    />
                  )}
                </Flex>

                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={opn.name}
                    opt1={"OPN"}
                    opt2={"name"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNManufacturer"}
                    label={"Производитель"}
                    inputType={"text"}
                    value={opn.manufacturer}
                    opt1={"OPN"}
                    opt2={"manufacturer"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNRatedOperatingVoltage"}
                    label={"Номинальное рабочее напряжение"}
                    inputType={"text"}
                    value={opn.ratedOperatingVoltage}
                    opt1={"OPN"}
                    opt2={"ratedOperatingVoltage"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNThroughput"}
                    label={"Пропускная способность, А"}
                    inputType={"text"}
                    value={opn.throughput}
                    opt1={"OPN"}
                    opt2={"throughput"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchOPNRatedDischargeCurrent"}
                    label={"Номинальный разрядный ток, А"}
                    inputType={"text"}
                    value={opn.ratedDischargeCurrent}
                    opt1={"OPN"}
                    opt2={"ratedDischargeCurrent"}
                    onChange={inputChange}
                  />
                </div>
                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={
                      "SwitchOPNMaximumContinuousPermissibleOperatingVoltage"
                    }
                    label={
                      "Наибольшее длительно допустимое рабочее напряжение, кВ"
                    }
                    inputType={"text"}
                    value={opn.maximumContinuousPermissibleOperatingVoltage}
                    opt1={"OPN"}
                    opt2={"maximumContinuousPermissibleOperatingVoltage"}
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

export default SwitchOPN;
