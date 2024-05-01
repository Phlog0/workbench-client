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

const MyAccordeonSpravochinOPN = ({ title, info }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Ограничители перенапряжения
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Ограничитель предназначен для работы в районах с умеренным и холодным
          климатом и промышленной атмосферой при сильном загрязнении внешней
          среды на открытом воздухе. Предельное верхнее значение температуры
          окружающей среды – плюс 45°С, нижнее – минус 60°С. Высота установки
          ограничителей – не более 1000 м над уровнем моря. Ограничитель
          представляет собой защитный аппарат опорно-подвесного исполнения,
          содержащий последовательно соединенные оксидно-цинковые варисторы,
          заключенные в герметизированный полимерный корпус.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordeonSpravochinOPN;
