import {
  AbsoluteCenter,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  TagLabel,
} from "@chakra-ui/react";
import React, {
  Suspense,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import { useDispatch } from "react-redux";
import { updateOPNProp, updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
// import styles from "./MyInputModal.module.scss";
const MyInput = ({ tag, label, inputType, value, opt1, onChange, opt2 }) => {
  const dispatch = useDispatch();
  const currentId = useAppSelector((state) => state.nodes.currentNode.id);

  const [localInputState, setLocalInputState] = useState(value);
  const deferredInput = useDeferredValue(localInputState);

  const handleChange = (event) => {
    setLocalInputState(event.target.value);



    // ==========================🕐🕐🕐ТАЙМЕР ========================== (если быстро переключить то может забаговать)

    // setTimeout(() => {
    //   console.log("new timeout");
    //   console.log(event.target.dataset.opt1, event.target.dataset.opt2);
    //   dispatch(
    //     updateProp({
    //       id: currentId,
    //       key1: event.target.dataset.opt1,
    //       key2: event.target.dataset.opt2,
    //       value: event.target.value,
    //     })
    //   );
    // }, 1000);

    // ========================== ПРОСТО МЕДЛЕННО ==========================


    dispatch(
      updateProp({
        id: currentId,
        key1: event.target.dataset.opt1,
        key2: event.target.dataset.opt2,
        value: event.target.value,
      })
    );



  };

  useEffect(() => {
    setLocalInputState(value);
  }, [value]);

  // useEffect(() => {
  //   if (localInputState !== deferredInput)
  //     dispatch(
  //       updateProp({
  //         id: currentId,
  //         key1: opt1,
  //         key2: opt2,
  //         value: deferredInput,
  //       })
  //     );
  // }, [deferredInput]);

  return (
    <FormControl className={"styles.container"}>
      <Box position={"relative"}>
        <label htmlFor={tag}>{label}</label>
      </Box>
      <Input
        type={inputType}
        name={tag}
        id={tag}
        value={localInputState}
        onChange={handleChange}
        data-opt1={opt1}
        data-opt2={opt2}
      />
      <Divider marginBlock={"1rem"} />
    </FormControl>
  );
};

export default MyInput;
