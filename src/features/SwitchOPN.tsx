// @ts-nocheck
import React, {
  FC,
  useState,
  useRef,
  useTransition,
  useDeferredValue,
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
  Divider,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
// import styles from "./Switchopn.module.scss";
import MyModal from "../widgets/MyModal";
import MyInput from "../shared/MyInput";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { getCurrentId, updateopn, updateProp } from "../store/flowSlice";
import styles from "./properties.module.scss";
import MySelect from "../shared/MySelect";

interface ISwitchopnProps {
  id: string;
}

const Switchopn: FC<ISwitchopnProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);

  const manufacturer = useAppSelector(
    (state) => state.flow.nodes.find((node) => node.id === id)?.opn.manufacturer
  );
  const maximumContinuousPermissibleOperatingVoltage = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.opn
        .maximumContinuousPermissibleOperatingVoltage
  );
  const name = useAppSelector(
    (state) => state.flow.nodes.find((node) => node.id === id)?.opn.name
  );
  const ratedDischargeCurrent = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.opn.ratedDischargeCurrent
  );
  const ratedOperatingVoltage = useAppSelector(
    (state) =>
      state.flow.nodes.find((node) => node.id === id)?.opn.ratedOperatingVoltage
  );
  const throughput = useAppSelector(
    (state) => state.flow.nodes.find((node) => node.id === id)?.opn.throughput
  );
  const type = useAppSelector(
    (state) => state.flow.nodes.find((node) => node.id === id)?.opn.type
  );

  const isThereAnOpn = useAppSelector(
    (state) => state.flow.nodes.find((node) => node.id === id)?.isThereAnOpn
  );

  return (
    <div className={styles.container}>
      <MySelect
        tag={"isThereAnOpn"}
        label={"Есть ОПН (Ограничители перенапряжения)"}
        options={["Нет", "Да"]}
        itemId={id}
        current={isThereAnOpn}
      />

      {isThereAnOpn !== 0 && (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <div className={styles.inputContainer}>
                      <Text>ОПН</Text>
                      <MyInput
                        tag={"SwitchopnType"}
                        label={"Тип"}
                        inputType={"text"}
                        value={type}
                        opt1={"opn"}
                        opt2={"type"}
                        // value={inputState}
                        //
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
                          type={"opn"}
                        />
                      )}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"SwitchopnName"}
                      label={"Наименование"}
                      inputType={"text"}
                      value={name}
                      opt1={"opn"}
                      opt2={"name"}
                      // value={inputState}

                      //
                    />
                  </div>
                  {/* <Divider orientation='horizontal' /> */}
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"SwitchopnManufacturer"}
                      label={"Производитель"}
                      inputType={"text"}
                      value={manufacturer}
                      opt1={"opn"}
                      opt2={"manufacturer"}
                      // value={inputState}

                      //
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"SwitchopnRatedOperatingVoltage"}
                      label={"Номинальное рабочее напряжение"}
                      inputType={"text"}
                      value={ratedOperatingVoltage}
                      opt1={"opn"}
                      opt2={"ratedOperatingVoltage"}
                      // value={inputState}

                      //
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"SwitchopnThroughput"}
                      label={"Пропускная способность, А"}
                      inputType={"number"}
                      value={throughput}
                      opt1={"opn"}
                      opt2={"throughput"}
                      // value={inputState}

                      //
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={"SwitchopnRatedDischargeCurrent"}
                      label={"Номинальный разрядный ток, А"}
                      inputType={"text"}
                      value={ratedDischargeCurrent}
                      opt1={"opn"}
                      opt2={"ratedDischargeCurrent"}
                      // value={inputState}

                      //
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <MyInput
                      tag={
                        "SwitchopnMaximumContinuousPermissibleOperatingVoltage"
                      }
                      label={
                        "Наибольшее длительно допустимое рабочее напряжение, кВ"
                      }
                      inputType={"text"}
                      value={maximumContinuousPermissibleOperatingVoltage}
                      opt1={"opn"}
                      opt2={"maximumContinuousPermissibleOperatingVoltage"}
                      // value={inputState}

                      //
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

export default Switchopn;
