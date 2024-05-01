import { Button, Wrap, WrapItem, useToast } from "@chakra-ui/react";

function ToastStatusExample() {
  const toast = useToast();

  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: `Ошибочка!`,
              status: "error",
              isClosable: true,
            })
          }
        ></Button>
      </WrapItem>
    </Wrap>
  );
}
export default ToastStatusExample;
