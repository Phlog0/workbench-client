import React, { useEffect, useState } from "react";
import styles from "./MySlider.module.scss";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const imgs = [img1, img2, img3, img4];
const MySlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndex === 3) {
        setSlideIndex(0);
        return;
      }
      setSlideIndex((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        {/* {imgs.map((item) => (
          <img src={item} />
        ))} */}
        <img src={imgs[slideIndex]} alt="#" />
      </div>
    </div>
  );
};

export default MySlider;
