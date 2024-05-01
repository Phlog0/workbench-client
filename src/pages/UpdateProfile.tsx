import React, { useEffect, useState } from "react";

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
  useToast,
} from "@chakra-ui/react";
import { IoIosReturnLeft } from "react-icons/io";

import styles from "./UpdateProfile.module.scss";
import { useUpdateProfileMutation } from "../services/authService";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const initialFormState = {
  name: "",
  surname: "",
  patronymic: "",
  username: "",
  password: "",
  email: "",
};

const UpdateProfile = () => {
  const { id } = useParams();

  const [avatar, setAvatar] = useState();
  const [imageSrc, setImageSrc] = useState();
  const { auth } = useAuth();
  const [formState, setFormState] = useState({ ...auth, password: "" });

  const toast = useToast();

  useEffect(() => {
    auth?.picture
      ? setImageSrc(`http://localhost:3000/avatars/${auth?.picture}`)
      : setImageSrc("http://localhost:3000/avatars/defaultAvatar.png");
  }, [auth.picture]);

  console.log(auth);
  const avatarHandle = (e) => {
    setAvatar(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageSrc(reader?.result);
    };

    e.target.value = null;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const [updateProfile, resultUpdate] = useUpdateProfileMutation();

  const handleSubmit = async () => {
    try {
      console.log({
        id,
        image: avatar,
        formData: formState,
      });
      const data = await updateProfile({
        id,
        image: avatar,
        formData: formState,
      });
      // setFormState(initialFormState);

      if (data?.error) {
        toast({
          title: "Произошла оишбка с обновлением ваших данных",
          description: "не круто!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      toast({
        title: "Данные обновлены!",
        description: "Круто!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isFirstnameError = formState.name === "" ? true : false;
  const isSurnameError = formState.surname === "" ? true : false;
  const isPatronymicError = formState.patronymic === "" ? true : false;
  const isUsernameError = formState.username === "" ? true : false;
  const isPasswordError = formState.password === "" ? true : false;
  const isEmailError = formState.email === "" ? true : false;

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Личные данные</h2>
        <Link to={"/projects"}>
          В меню <IoIosReturnLeft />
        </Link>
      </header>
      <div className={styles.updateContainer}>
        <div className={styles.avatar}>
          <img src={imageSrc} alt="🍕" />

          <input type="file" onChange={avatarHandle} />
        </div>
        <div className={styles.updateContent}>
          <Box className={styles.modalItem}>
            <FormControl isRequired={true} isInvalid={isFirstnameError}>
              <FormLabel>Имя</FormLabel>
              <Input
                value={formState.name}
                name="name"
                onChange={handleChange}
                type="text"
              />
              {isFirstnameError && (
                <FormHelperText>Заполните поле!</FormHelperText>
              )}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isSurnameError}>
              <FormLabel>Фамилия</FormLabel>
              <Input
                value={formState.surname}
                name="surname"
                onChange={handleChange}
                type="text"
                // id="createProjectName"
              />
              {isSurnameError && (
                <FormHelperText>Заполните поле!</FormHelperText>
              )}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isPatronymicError}>
              <FormLabel>Отчество</FormLabel>
              <Input
                value={formState.patronymic}
                onChange={handleChange}
                type="text"
                name="patronymic"
                // id="createProjectName"
              />
              {isPatronymicError && (
                <FormHelperText>Заполните поле!</FormHelperText>
              )}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isUsernameError}>
              <FormLabel>Логин</FormLabel>
              <Input
                value={formState.username}
                onChange={handleChange}
                type="text"
                name="username"
              />
              {isUsernameError && (
                <FormHelperText>Заполните поле!</FormHelperText>
              )}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isEmailError}>
              <FormLabel>Почта</FormLabel>
              <Input
                value={formState.email}
                onChange={handleChange}
                type="text"
                name="email"
              />
              {isEmailError && <FormHelperText>Заполните поле!</FormHelperText>}
            </FormControl>
            <FormControl>
              <FormLabel>Пароль</FormLabel>
              <Input
                value={formState.password}
                onChange={handleChange}
                type="text"
                name="password"
              />
            </FormControl>
            <Button colorScheme="green" onClick={handleSubmit}>
              Обновить
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
