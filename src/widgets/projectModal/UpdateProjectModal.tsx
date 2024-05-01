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
import styles from "./CreateProjectModal.module.scss";
import { useUpdateProjectMutation } from "../../services/projectService";
const UpdateProjectModal = ({
  currentProject,
  isOpen,
  onClose,
  projectName,
  setProjectName,
  info,
  setInfo,
}) => {
  console.log(currentProject);
  const [updateProjectApi, resultUpdateProjectApi] = useUpdateProjectMutation();

  const [projectTitle, setProjectTitle] = useState(currentProject.name);
  const [projectInfo, setProjectInfo] = useState(currentProject.info);

  const isProjectNameError = projectTitle === "";
  const isInfoError = projectInfo === "";

  const updateProjectData = () => {
    if (projectTitle === "" || projectInfo === "") return;
    onClose();
    // const newProjectId = uuidv4();
    updateProjectApi({
      id: currentProject.id,
      projectTitle,
      projectInfo,
    });
  };

  return (
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Обновить данные</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box className={styles.modalItem}>
            <FormControl isRequired={true} isInvalid={isProjectNameError}>
              <FormLabel>Название проекта:</FormLabel>
              <Input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
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
            <FormControl isRequired={true} isInvalid={isInfoError}>
              <FormLabel>Информация:</FormLabel>
              <Textarea
                value={projectInfo}
                onChange={(e) => setProjectInfo(e.target.value)}
                name="createProjectInfo"
              ></Textarea>
              {isInfoError && <FormHelperText>Заполните поле!</FormHelperText>}
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={updateProjectData}>
            Обновить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProjectModal;
