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

const MyAccordeonSpravochinTN = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Измерительные трансформаторы напряжения
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Трансформатор принадлежит к классу статических электромагнитных
          аппаратов, который преобразует ток одного напряжения в переменный ток
          другого напряжения. Измерительные трансформаторы признаны одними из
          самых надежных элементов в системе энергообеспечения. Помимо
          определения показателей нагрузки и напряжения служат для присоединения
          аппаратуры автоматического регулирования и защитных устройств. С
          помощью измерительных трансформаторов:
          <ul>
            <li>снижают габариты и вес приборов измерения;</li>
            <li>повышают уровень безопасного обслуживания оборудования;</li>
            <li>
              предупреждают последствия от ошибочных действий
              электротехнического персонала;
            </li>
            <li>расширяют пределы измерения переменного тока.</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinTN;
