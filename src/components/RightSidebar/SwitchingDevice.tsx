import React, { useState, FC } from "react";
import styles from "./SwitchingDevice.module.scss";
import { useAppSelector } from "../../hook";
const SwitchingDevice: FC<{ id: string }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenClass, setIsOpenClass] = useState<string>(
    styles.SwitchingDevicePropertiesClosed
  );

  const currentItemProperties = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === id)
  );
    const currentCommutationOption = currentItemProperties?.currentCommutationOption;


  const handleClick = (): void => {
    if (isOpen === false) {
      setIsOpen(true);
      setIsOpenClass(styles.SwitchingDeviceProperties);
    } else {
      setIsOpen(false);
      setIsOpenClass(styles.SwitchingDevicePropertiesClosed);
    }
  };

  return (
    <div>
      {currentCommutationOption !== 0 ? (
        <div className={styles.SwitchingDevice}>
          <span className={styles.SwitchingDeviceTitle} onClick={handleClick}>
            {isOpen === false ? "▶" : "▼"}Коммутационный аппарат
          </span>
          <div className={isOpenClass}>
            <label htmlFor="SwitchingDeviceType">Тип</label>
            <input
              type="text"
              name="SwitchingDeviceType"
              id="SwitchingDeviceType"
            />
            <label htmlFor="SwitchingDeviceName">Наименование</label>
            <input
              type="text"
              name="SwitchingDeviceName"
              id="SwitchingDeviceName"
            />
            <label htmlFor="SwitchingDeviceRatedCurrent">
              Номинальный ток (А)
            </label>
            <input
              type="number"
              name="SwitchingDeviceRatedCurrent"
              id="SwitchingDeviceRatedCurrent"
            />
            <label htmlFor="SwitchingDeviceRatedCutOffCurrent">
              Номинальный ток отключения (кА)
            </label>
            <input
              type="number"
              name="SwitchingDeviceRatedCutOffCurrent"
              id="SwitchingDeviceRatedCutOffCurrent"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SwitchingDevice;
