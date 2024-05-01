import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

import styles from "./UpdateProfile.module.scss";
import { useRegistrationMutation } from "../services/authService";
import { Link } from "react-router-dom";
const Registration = () => {
  const [resgistation, resultReg] = useRegistrationMutation();

  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    patronymic: "",
    username: "",
    password: "",
    email: "",
    roleId: "1",
  });

  const isFirstnameError = formState.name === "" ? true : false;
  const isSurnameError = formState.surname === "" ? true : false;
  const isPatronymicError = formState.patronymic === "" ? true : false;
  const isUsernameError = formState.username === "" ? true : false;
  const isPasswordError = formState.password === "" ? true : false;
  const isPasswordLengthError = formState.password.length < 6 ? true : false;
  const isEmailError = formState.email === "" ? true : false;

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const toast = useToast();

  const handleSubmit = async () => {
    try {
      if (
        [
          isFirstnameError,
          isSurnameError,
          isPatronymicError,
          isUsernameError,
          isPasswordError,
          isEmailError,
        ].includes(true)
      ) {
        toast({
          title: "Все должны быть заполнены!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      if (isPasswordLengthError) {
        toast({
          title: "Пароль должен быть минимум 6 символов!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      const data = await resgistation({
        data: formState,
      });
      // setFormState(initialFormState);
      console.log(data);

      if (data?.error) {
        toast({
          title: "Произошла оишбка с регистрацией",
          description: "не круто!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      toast({
        title: "Пользователь успешно создан!",
        description: "Круто!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* {resultLogin && <h1>{resultLogin.error?.message}</h1>} */}
      {/* {resultLogin && <h1>{resultLogin.data}</h1>} */}
      <FormControl>
        <h1>Регистрация</h1>
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
            {isSurnameError && <FormHelperText>Заполните поле!</FormHelperText>}
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
          <FormControl isRequired={true} isInvalid={isPasswordError}>
            <FormLabel>Пароль</FormLabel>
            <Input
              value={formState.password}
              onChange={handleChange}
              type="text"
              name="password"
            />
            {isPasswordError && (
              <FormHelperText>Заполните поле!</FormHelperText>
            )}
          </FormControl>
          <FormControl isRequired={true} isInvalid={isPasswordError}>
            <FormLabel>Роль</FormLabel>
            <Select defaultValue={formState?.roleId} name="roleId" onChange={handleChange}>
              <option value="1">Начальник</option>
              <option value="2">Инженер</option>
              <option value="3">Наблюдатель</option>
            </Select>
          </FormControl>
          <Button colorScheme="green" onClick={handleSubmit}>
            Регистрация
          </Button>
        </Box>
      </FormControl>
      <Link to={'/'}>Есть аккаунт? Войдите</Link>
    </div>
  );
};

export default Registration;
