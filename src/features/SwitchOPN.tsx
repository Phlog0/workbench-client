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
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
// import styles from "./Switchopn.module.scss";
import MyModal from "../widgets/MyModal";
import MyInput from "../shared/MyInput";
import MyInputModal from "../shared/MyInputModal";
import { useFetchDataQuery } from "../services/dictService";
import { useAppSelector } from "../hook";
import { useDispatch } from "react-redux";
import { getCurrentId, updateopn, updateProp } from "../store/nodesSlice";
import styles from "./properties.module.scss";

interface ISwitchopnProps {
  id: string;
}

const Switchopn: FC<ISwitchopnProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);

  const [isPending, startTransition] = useTransition();

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  // const test = useAppSelector(getCurrentId);
  // console.log(test);
  // const currentItemProperties = useAppSelector(getCurrentId);

  console.log(currentItemProperties);
  const opn = currentItemProperties?.opn;


  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    type: "",
    name: "",
    manufacturer: "",
    ratedOperatingVoltage: "",
    throughput: "",
    ratedDischargeCurrent: "",
    maximumContinuousPermissibleOperatingVoltage: "",
  });

  const allopn = Object.values(opn);

  // const allopn = Object.values(inputState);
  // console.log(`OPN RENDER >>>>>>`);

  // const inputChange = (event) => {
  //   startTransition(() => {
  //     dispatch(
  //       updateProp({
  //         id: id,
  //         key1: event.target.dataset.opt1,
  //         key2: event.target.dataset.opt2,
  //         value: event.target.value,
  //       })
  //     );
  //   });
  // };
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
                    <MyInputModal label={"ОПН"} value={allopn.toString()} />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <div className={styles.inputContainer}>
                  <MyInput
                    tag={"SwitchopnType"}
                    label={"Тип"}
                    inputType={"text"}
                    value={opn.type}
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

                <div className={styles.AccordionPanelItem}>
                  <MyInput
                    tag={"SwitchopnName"}
                    label={"Наименование"}
                    inputType={"text"}
                    value={opn.name}
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
                    value={opn.manufacturer}
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
                    value={opn.ratedOperatingVoltage}
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
                    value={opn.throughput}
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
                    value={opn.ratedDischargeCurrent}
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
                    value={opn.maximumContinuousPermissibleOperatingVoltage}
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
    </>
  );
};

export default Switchopn;
