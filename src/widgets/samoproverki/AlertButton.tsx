// @ts-nocheck
import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./AlertButton.module.scss";
import ErrorsModal from "./ErrorsModal";
import { useAppSelector } from "../../hook";
import { shallowEqual } from "react-redux";

const AlertButton = ({ tip }) => {
  const {
    isOpen: errorIsOpen,
    onOpen: errorOnOpen,
    onClose: errorOnClose,
  } = useDisclosure();
  const {
    isOpen: warningIsOpen,
    onOpen: warningOnOpen,
    onClose: warningOnClose,
  } = useDisclosure();
  const [errorsCount, setErrorsCount] = useState(0);

  const allVvodErrors = useAppSelector(
    (state) => state.flow.nodes.filter((item) => item.type === "TireNodeType"),
    shallowEqual
  ).map((item) => item.vvodError);
  const allUkrmErrors = useAppSelector(
    (state) => state.flow.nodes.filter((item) => item.type === "TireNodeType"),
    shallowEqual
  ).map((item) => item.ukrmError);



  useEffect(() => {
    if (allVvodErrors.includes(true) && allUkrmErrors.includes(true)) {
      setErrorsCount(2);
      return;
    }
    if (allVvodErrors.includes(true) !== allUkrmErrors.includes(true)) {
      setErrorsCount(1);
    } else {
      setErrorsCount(0);
    }
  }, [allVvodErrors, allUkrmErrors]);

  const handleClick = () => {
    if (tip === "error") {
      errorOnOpen();
      return;
    }

    warningOnOpen();
  };

  return (
    <Button
      className={styles.container}
      onClick={handleClick}
      isDisabled={errorsCount === 0 ? true : false}
      colorScheme="red"
    >
      <div className={styles.errorsCount}>{errorsCount}</div>
      <div className={styles.btn}>⚠️</div>
      {errorIsOpen && (
        <ErrorsModal isOpen={errorIsOpen} onClose={errorOnClose} />
      )}
    </Button>
  );
};

export default AlertButton;
