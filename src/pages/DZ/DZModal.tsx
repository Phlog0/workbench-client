import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import modalImg from "./modal.png";
const DZModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>WORKBENCH</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Данное веб-приложение представляет собой систему автоматизированного
          проектирования электрораспределительного оборудования. Для
          автоматизации используется база данных типовых решений, что
          значительно сокращает время проектирования. Однако, использование
          типовых решений не всегда удовлетворит проектировщика, поэтому в
          систему включен модуль свободного проектирования, который в паре с
          электронным архивом комплектующих ведущих мировых производителей
          позволяет быстро решить поставленную задачу. Работа в программе
          позволяет избегать ошибок, так как система сама себя перепроверяет.
          Этот факт положительно оценят молодые специалисты, которые недавно
          пришли в профессию и еще только набираются опыта.
          <img src={modalImg} alt="#" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Понял!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DZModal;
