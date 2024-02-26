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
  useRef,
  useState,
  useTransition,
} from "react";
import { useDispatch } from "react-redux";
import { updateOPNProp, updateProp } from "../store/nodesSlice";
import { useAppSelector } from "../hook";
import useDebounce from "../hooks/useDebounce";

import debounce from "debounce";

// import styles from "./MyInputModal.module.scss";
const MyInput = ({
  tag,
  label,
  inputType,
  value,
  opt1,
  onChange,
  opt2,
  myId,
}) => {
  const dispatch = useDispatch();

  const currentId = useAppSelector((state) => state.nodes.currentNode.id);

  const redValue = useAppSelector((state) =>
    state.nodes.nodes.find((node) => node.id === currentId)
  );
  const [localInputState, setLocalInputState] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  // const debouncedSearchTerm = useDebounce(localInputState, 500);
  // useEffect(() => {
  //   setLocalInputState(redValue[opt1][opt2]);
  // }, [currentId]);

  useEffect(() => {
    inputValue.current.value = value;
  }, [currentId, value]);

  const inputValue = useRef(null);
  const handleChange = (e) => {
    console.log("debounce inside");
    dispatch(
      updateProp({
        id: myId || currentId,
        key1: opt1,
        key2: opt2,
        value: e.target.value,
      })
    );
  };

  const debouncedHandleChange = debounce(handleChange, 1000);

  // useEffect(() => {
  //  debounce(handleChange, 500);
  // console.log("debuncing");
  // console.log(answer);
  // }, [localInputState]);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     setIsSearching((prev) => true);
  //     dispatch(
  //       updateProp({
  //         id: currentId,
  //         key1: opt1,
  //         key2: opt2,
  //         value: localInputState,
  //       })
  //     );
  //     // setIsSearching((prev) => false);
  //   }
  // }, [debouncedSearchTerm, localInputState]);

  // const handleChange = (event) => {
  //   setLocalInputState(event.target.value);

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

  // dispatch(
  //   updateProp({
  //     id: currentId,
  //     key1: event.target.dataset.opt1,
  //     key2: event.target.dataset.opt2,
  //     value: event.target.value,
  //   })
  // );

  // };

  // useEffect(() => {
  //   setLocalInputState(value);
  // }, [value]);

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
      {inputValue !== null && (
        <Input
          type={inputType}
          name={tag}
          id={tag}
          // value={localInputState}
          // ПРЯМО С РЕДАКСА
          // data-opt1={redValue[opt1]}
          // data-opt2={redValue[opt2]}
          data-opt1={opt1}
          data-opt2={opt2}
          // ref={inputValue}
          // onChange={(e) => (inputValue.current.value = e.target.value)}
          // onChange={onChange}
          // onChange={handleChange}
          ref={inputValue}
          // onChange={(e) => setLocalInputState(e.target.value)}
          onChange={debouncedHandleChange}
        />
      )}
      <Divider marginBlock={"1rem"} />
    </FormControl>
  );
};

export default MyInput;
