import React, { FC, useEffect, useState } from "react";
import styles from "./Skkaf.module.scss";
import { useAppDispatch, useAppSelector } from "../hook";

interface IShkafProps {
  id: string;
}

const Shkaf: FC<IShkafProps> = ({ id }) => {
  // const values = useAppSelector((state) =>
  //   state.nodes.nodes.find((item) => item.id === id)
  // );
  const values = useAppSelector((state) => state.nodes.nodes);

  const item = values.find((item) => item.id === id);
  // console.log(item);

  // console.log('SHKAF>>>',topItemsCount, middleItemsCount,bottomItemsCount);
  return (
    <div>
      <div className={styles.shkafTop}>
        {item?.prop1 &&
          Array(item?.prop1)
            .fill("")
            .map((i) => {
              return <div key={Math.random()}></div>;
            })}
      </div>
      <div className={styles.shkafMiddle}>
        {item?.prop2 &&
          Array(item?.prop2)
            .fill(" ")
            .map<JSX.Element>((i) => {
              return <div key={Math.random()}></div>;
            })}
      </div>
      <div className={styles.shkafBottom}>
        {item?.prop3 &&
          Array(item?.prop3)
            .fill("")
            .map((i) => {
              return <div key={Math.random()}></div>;
            })}
      </div>
    </div>
  );
};

export default Shkaf;
