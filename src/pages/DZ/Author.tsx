import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ya from "./ya.jpg";
import styles from "./MySlider.module.scss";
const Author = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: "ВНИМАНИЕ! ВНИМАНИЕ!",
      description: "Я использую ваши cookie🍪. Вы согласны? Вы согласны.",
      status: "success",
      duration: 1500,
    });
  };
  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Показать автора</Button>
      <Button onClick={() => setIsVisible(false)}>Скрыть автора</Button>
      <Button onClick={() => setIsVisible((prev) => !prev)}>
        Показать \ скрыть автора
      </Button>
      <Button onClick={handleClick}>ПЕЧЕНЬЯ?????🍪🍪🍪🍪🍪🍪🍪</Button>
      <div className={isVisible ? styles.visible : styles.invisible}>
        <img src={ya} alt="#" />
        <p>
          Сергей Задоркин. Он же Серафим Задоркин. Студент Калужского филиала
          МГТУ им. Н.Э. Баумана.
        </p>
      </div>
    </div>
  );
};

export default Author;
