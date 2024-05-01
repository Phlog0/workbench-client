import { Box, FormControl, FormLabel, Input, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { useLoginMutation } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styles from "./Login.module.scss";
import MySlider from "./DZ/MySlider";
import DZModal from "./DZ/DZModal";
const Login = () => {
  const [login, { data }] = useLoginMutation();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    username: "sergo01",
    password: "sergo01",
  });

  {
    /* ==============================================🏠 ДЗ 🏠============================================== */
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  {
    /* ==============================================🏠 ДЗ 🏠============================================== */
  }

  const toast = useToast();

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      // login({ data: formState });
      const user = await login({ data: formState }).unwrap();
      console.log(user);
      setAuth(user);
      navigate("./projects");
    } catch (err) {
      toast({
        title: `${err.data.message}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* {resultLogin && <h1>{resultLogin.error?.message}</h1>} */}
      {/* {resultLogin && <h1>{resultLogin.data}</h1>} */}
      <header className={styles.header}>
        <h1>Авторизация</h1>
        {/* ==============================================🏠 ДЗ 🏠============================================== */}
        <h1 onClick={() => onOpen()}>Что это за приложение???</h1>
        {isOpen && <DZModal onClose={onClose} isOpen={isOpen} />}
        {/* ==============================================🏠 ДЗ 🏠============================================== */}
        <h2>
          Нет аккаунта?
          <Link className={styles.link} to={"/registration"}>
            Зарегистрируйтесь в системе
          </Link>
        </h2>
      </header>
      <Box className={styles.formContainer}>
        <FormControl className={styles.formControl}>
          <FormLabel>Логин</FormLabel>
          <Input
            onChange={handleChange}
            value={formState?.username}
            type="text"
            required
            name="username"
          />
        </FormControl>
        <FormControl className={styles.formControl}>
          <FormLabel>Пароль</FormLabel>
          <Input
            onChange={handleChange}
            value={formState?.password}
            type="password"
            name="password"
          />
        </FormControl>
        <Input
          className={styles.loginBtn}
          type="button"
          value="Войти"
          onClick={handleClick}
        />
      </Box>

      {/* ==============================================🏠 ДЗ 🏠============================================== */}
      <MySlider />
      {/* ==============================================🏠 ДЗ 🏠============================================== */}
    </div>
  );
};

export default Login;
