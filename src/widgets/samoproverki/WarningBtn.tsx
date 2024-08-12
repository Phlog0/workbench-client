import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./AlertButton.module.scss";
import ErrorsModal from "./ErrorsModal";
import { useAppSelector } from "../../hook";
import { shallowEqual } from "react-redux";
import WarningsModal from "./WarningsModal";

const WarningBtn = () => {
  const {
    isOpen: warningIsOpen,
    onOpen: warningOnOpen,
    onClose: warningOnClose,
  } = useDisclosure();
  const [errorsCount, setErrorsCount] = useState(0);

  const currentItemId = useAppSelector((state) => state.flow.currentNodeId);

  const allChildFasteners = useAppSelector((state) =>
    state.flow.nodes.filter((item) => item.parentNode === currentItemId)
  );

  const allChildFastenersIds = allChildFasteners.map((item) => item.id);

  const vvodLength = useAppSelector(
    (state) =>
      state.flow.nodes.filter(
        (item) =>
          item.currentCellOption === 5 &&
          allChildFastenersIds.includes(item.parentNode)
      ),
    shallowEqual
  ).length;

  const allZeroVvodWarning = useAppSelector(
    (state) => state.flow.nodes.filter((item) => item.type === "TireNodeType"),
    shallowEqual
  ).map((item) => item.zeroVvodWarning);



  // const [dis, setDis] = useState<boolean>(true)
  // useEffect(() => {
  //     if (allZeroVvodWarning.includes(true) || vvodLength === 0) {
  //       setDis(false)
  //     }

  //   }, [allZeroVvodWarning, vvodLength]);


  const handleClick = () => {
    warningOnOpen();
  };

  return (
    <Button
      className={styles.container}
      onClick={handleClick}
      colorScheme="yellow"

    >
      <div className={styles.btn}>⚠️</div>
      {warningIsOpen && (
        <WarningsModal isOpen={warningIsOpen} onClose={warningOnClose} />
      )}
    </Button>
  );
};

export default WarningBtn;
