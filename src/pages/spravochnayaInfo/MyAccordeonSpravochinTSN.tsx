import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const MyAccordeonSpravochinTSN = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Трансформаторы собственных нужд
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Трансформатор для собственных нужд ТСН предназначен для питания
          нагрузки и энергоснабжения подстанций, комплектных распределительных
          устройств КРУ и КРУН. Он необходим для работы электроустановки,
          обеспечения функциональности подсоединенных потребителей. Нагрузки ТСН
          распространяются на обогреватели релейных шкафов, ячейки приводов
          силовых выключателей, а при применении постоянного тока - на зарядные
          устройства временного, аварийного, действующего освещения на объекте.
          При использовании прибора в сети переменного тока как правило
          используют питающую сеть напряжением 380/220 В c заземленной
          нейтралью. Параметры и функции силовой установки ТСН Трансформатор для
          собственных нужд обеспечивает электроэнергией релейную защиту, системы
          пожаротушения, средства оперативной связи, телемеханику. ОСНОВНЫЕ
          ХАРАКТЕРИСТИКИ:
          <ul>
            <li>Номинальное напряжение, кВ</li>
            <li>Количество силовых трансформаторов</li>
            <li>Мощность силового трансформатора</li>
            <li>
              Оборудование РУВН - (6)10 кВ: - коммутационные аппараты
              (разъединители)
            </li>
            <li>Габаритные размеры (воздушный ввод)</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinTSN;