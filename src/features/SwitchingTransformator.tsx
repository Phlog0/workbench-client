import React, { FC, useState } from "react";
import styles from "./SwitchingTransformator.module.scss";
import { useAppSelector } from "../hook";
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
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import MyInput from "../shared/MyInput";
const SwitchingTransformator: FC<{ id: string }> = ({ id }) => {


  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const currentTransformatorOption =
    currentItemProperties?.currentTransformatorOption;



  return (
    <>
      {currentTransformatorOption !== 0 ? (
        <Accordion allowToggle className="">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

                    <Box as="span" flex="1" textAlign="left">
                      Изменить траснформаторы тока
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.AccordionPanelItem}>

                    <MyInput
                      tag={"SwitchingTransforamtorType"}
                      label={"Тип"}
                      inputType={"text"}
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
 
                    <MyInput
                      tag={"SwitchingTransformatorName"}
                      label={"Наименование"}
                      inputType={"text"}
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <Accordion allowToggle className="">
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                {isExpanded ? (
                                  <BsChevronDown />
                                ) : (
                                  <BsChevronRight />
                                )}
                                <Box as="span" flex="1" textAlign="left">
                                  Коэффициент трансформации
                                </Box>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              pb={4}
                              className={styles.AccordionPanel}
                            >
                              <div className={styles.AccordionPanelItem}>

                                <MyInput
                                  tag={"primaryCurrent"}
                                  label={"Первичный ток"}
                                  inputType={"number"}
                                />
                              </div>
                              <div className={styles.AccordionPanelItem}>

                                <MyInput
                                  tag={"secondaryCurrent"}
                                  label={"Вторичный ток"}
                                  inputType={"number"}
                                />
                              </div>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className={styles.AccordionPanelItem}>

                    <MyInput
                      tag={"quanity"}
                      label={"Количество"}
                      inputType={"number"}
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    <Accordion allowToggle className="">
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                {isExpanded ? (
                                  <BsChevronDown />
                                ) : (
                                  <BsChevronRight />
                                )}

                                <Box as="span" flex="1" textAlign="left">
                                  Класс точности
                                </Box>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              pb={4}
                              className={styles.AccordionPanel}
                            >
                              {Array(4)
                                .fill("")
                                .map((item, index) => {
                                  return (
                                    <div
                                      className={styles.AccordionPanelItem}
                                      key={index}
                                    >
                                      {`обмотка ${index + 1}`}
                                      <Select>
                                        <option>0.25</option>
                                        <option>0.5</option>
                                        <option>0.75</option>
                                        <option>1</option>
                                      </Select>
                                    </div>
                                  );
                                })}
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    {/* <label htmlFor="oneSecCurrentTermo">
                      Односекундный ток термической стойкости (кА)
                    </label>
                    <Input
                      type="number"
                      name="oneSecCurrentTermo"
                      id="oneSecCurrentTermo"
                    /> */}
                    <MyInput
                      tag={"oneSecCurrentTermo"}
                      label={"Односекундный ток термической стойкости (кА)"}
                      inputType={"number"}
                    />
                  </div>
                  <div className={styles.AccordionPanelItem}>
                    {/* <label htmlFor="preloadResistor">
                      Догрузочный резистор
                    </label>
                    <Input
                      type="text"
                      name="preloadResistor"
                      id="preloadResistor"
                    /> */}
                    <MyInput
                      tag={"preloadResistor"}
                      label={"Догрузочный резистор"}
                      inputType={"text"}
                    />
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      ) : null}
    </>
  );
};

export default SwitchingTransformator;
