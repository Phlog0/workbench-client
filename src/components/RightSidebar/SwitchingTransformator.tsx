import React, { FC, useState } from "react";
import styles from "./SwitchingTransformator.module.scss";
import { useAppSelector } from "../../hook";
const SwitchingTransformator: FC<{ id: string }> = ({ id }) => {
  const [openMenu, setOpenMenu] = useState({
    mainMenu: false,
    subMenu1: false,
    subMenu2: false,
  });
  const [openMenuClass, setOpenMenuClass] = useState({
    mainMenu: `${styles.openMenu} ${styles.closed}`,
    subMenu1: `${styles.openMenu} ${styles.closed}`,
    subMenu2: `${styles.openMenu} ${styles.closed}`,
  });

  const [isOpenClass, setIsOpenClass] = useState<string>(
    styles.SwitchingDevicePropertiesClosed
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
  const currentTransformatorOption =
    currentItemProperties?.currentTransformatorOption;


  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!(event.target instanceof HTMLDivElement)) {
      return;
    }
    setOpenMenu((prev) => ({
      ...prev,
      [event.target.dataset.name]: !openMenu[event.target.dataset.name],
    }));
    if (openMenu[event.target.dataset.name] === false)
      setOpenMenuClass((prev) => ({
        ...prev,
        [event.target.dataset.name]: `${styles.openMenu}`,
      }));
    if (openMenu[event.target.dataset.name] === true)
      setOpenMenuClass((prev) => ({
        ...prev,
        [event.target.dataset.name]: `${styles.openMenu} ${styles.closed}`,
      }));
  };

  return (
    <>
      {currentTransformatorOption !== 0 ? (
        <div className={styles.menu}>
          <div
            className={styles.SwitchingTransformatorTitle}
            onClick={handleClick}
            data-name="mainMenu"
          >
            {openMenu.mainMenu === false ? "▶" : "▼"}Изменить траснформаторы
            тока
          </div>
          <div className={openMenuClass.mainMenu}>
            <label htmlFor="SwitchingTransforamtorType">Тип</label>
            <input
              type="text"
              name="SwitchingTransforamtorType"
              id="SwitchingTransforamtorType"
            />
            <label htmlFor="SwitchingTransformatorName">Наименование</label>
            <input
              type="text"
              name="SwitchingTransformatorName"
              id="SwitchingTransformatorName"
            />
            <div className={styles.menu}>
              <div
                className={styles.SwitchingTransformatorTitle}
                onClick={handleClick}
                data-name="subMenu1"
              >
                {openMenu.subMenu1 === false ? "▶" : "▼"}Коэффициент
                трансформации
              </div>
              <div className={openMenuClass.subMenu1}>
                <div className={styles.typeItem}>
                  <label htmlFor="primaryCurrent">Первичный ток</label>
                  <input
                    type="number"
                    name="primaryCurrent"
                    id="primaryCurrent"
                  />
                </div>
                <div className={styles.typeItem}>
                  <label htmlFor="secondaryCurrent">Вторичный ток</label>
                  <input
                    type="number"
                    name="secondaryCurrent"
                    id="secondaryCurrent"
                  />
                </div>
              </div>
            </div>
            <div className={styles.typeItem}>
              <label htmlFor="Quantity">Количество</label>
              <input type="number" name="Quantity" id="Quantity" />
            </div>

            <div className={styles.menu}>
              <div
                className={styles.SwitchingTransformatorTitle}
                onClick={handleClick}
                data-name="subMenu2"
              >
                {openMenu.subMenu2 === false ? "▶" : "▼"}Класс точности
                <input type="text" />
              </div>
              <div className={openMenuClass.subMenu2}>
                <div className={styles.typeItem}>
                  <label htmlFor="firstWinding">Первая обмотка</label>
                  <input type="text" name="firstWinding" id="firstWinding" />
                </div>
                <div className={styles.typeItem}>
                  <label htmlFor="secondWinding">Вторая обмотка</label>
                  <input type="text" name="secondWinding" id="secondWinding" />
                </div>
                <div className={styles.typeItem}>
                  <label htmlFor="thirdWinding">Третья обмотка</label>
                  <input type="text" name="thirdWinding" id="thirdWinding" />
                </div>
                <div className={styles.typeItem}>
                  <label htmlFor="fourthWinding">Четвёртая обмотка</label>
                  <input type="text" name="fourthWinding" id="fourthWinding" />
                </div>
              </div>
            </div>
            <div className={styles.typeItem}>
              <label htmlFor="oneSecCurrentTermo">
                Односекундный ток термической стойкости (кА)
              </label>
              <input
                type="number"
                name="oneSecCurrentTermo"
                id="oneSecCurrentTermo"
              />
            </div>
            <div className={styles.typeItem}>
              <label htmlFor="preloadResistor">
              Догрузочный резистор
              </label>
              <input
                type="text"
                name="preloadResistor"
                id="preloadResistor"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SwitchingTransformator;
