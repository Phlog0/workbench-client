import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MySelect from "../../shared/MySelect";
import styles from "./CreateProjectModal.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useCreateNewProjectMutation } from "../../services/projectService";
const CreateProjectModal = ({ isOpen, onClose, projectName, setProjectName, info, setInfo }) => {

  const [tireCount, setTireCount] = useState(1);
  const [voltage, setVoltage] = useState(10);
  const isProjectNameError = projectName === "";
  const isInfoError = info === "";

  const [createNewProjectApi, resultCreateNewProject] =
    useCreateNewProjectMutation();

  const createNewProject = () => {
    if (projectName === "" || info === "") return;
    onClose();
    const newProjectId = uuidv4();
    createNewProjectApi({
      id: newProjectId,
      projectName,
      tireCount,
      voltage,
      info,
    });
  };
  return (
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Создать новый проект</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box className={styles.modalItem}>
            <FormControl isRequired={true} isInvalid={isProjectNameError}>
              <FormLabel>Название проекта:</FormLabel>
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                name="createProjectName"
                // id="createProjectName"
              />
              {isProjectNameError && (
                <FormHelperText>Заполните поле!</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box className={styles.modalItem}>
            <FormControl>
              <FormLabel> Количество секций РП:</FormLabel>
              <Select
                onChange={(e) => setTireCount(e.target.value)}
                name="createProjectTireCount"
                defaultValue={tireCount}
              >
                {[1, 2].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.modalItem}>
            <FormControl>
              <FormLabel>Нанпряжение, кВ</FormLabel>
              <Select
                name="createProjectVoltage"
                onChange={(e) => setVoltage(e.target.value)}
              >
                {[10, 6].map((item) => (
                  <option key={item} value={`${item}`}>
                    {item} кВ
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.modalItem}>
            <FormControl isRequired={true} isInvalid={isInfoError}>
              <FormLabel>Информация:</FormLabel>
              <Textarea
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                name="createProjectInfo"
              ></Textarea>
              {isInfoError && <FormHelperText>Заполните поле!</FormHelperText>}
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={createNewProject}>
            Создать
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
