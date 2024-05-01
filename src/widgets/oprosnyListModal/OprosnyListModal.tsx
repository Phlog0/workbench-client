import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import OprosnyList from "../../pages/oprosnyList/OprosnyList";
import { useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const OprosnyListModal = ({ isOpen, onClose }) => {
  const oprListRef = useRef(null);

  const savePdfHandle = (dataUrl, pdfW, pdfH) => {
    console.log(pdfW, pdfH);

    const doc = new jsPDF("l", "mm", [+pdfW / 4, +pdfH / 4]);
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const image = new Image();
    image.src = dataUrl;

    doc.addImage(image, "PNG", 0, 0, width, height);
    doc.save("test.pdf");
    // doc.save("two-by-four.pdf");
    // console.log("PDF>>>>");
    // doc.addImage(flowRef.current, {
    //   callback: function (doc) {
    //     // Save the PDF
    //     doc.save("sample-document.pdf");
    //   },
    //   x: 15,
    //   y: 15,
    //   width: 170, //target width in the PDF document
    //   windowWidth: 650, //window width in CSS pixels
    // });
  };
  const imageWidth = 1024 * 9;
  const imageHeight = 768 * 9;

  const onClick = async () => {
    console.log(oprListRef.current.getBoundingClientRect().width);
    toPng(
      oprListRef.current,

      {
        backgroundColor: "#FFF",
        width: oprListRef.current.getBoundingClientRect().width * 1,
        height: oprListRef.current.getBoundingClientRect().height * 1,
        // height: imageHeight,
        style: {
          // transform: `translate(${oprListRef.current.getBoundingClientRect().width / 2}px,${
          //   oprListRef.current.getBoundingClientRect().height / 2
          // }px) scale(2)`,
        },
        // style: {
        //   width: oprListRef.current.innerWidth * 8,
        //   height: oprListRef.current.innerHeight * 8,
        // },
      }
    ).then((dataUrl) =>
      savePdfHandle(
        dataUrl,
        oprListRef.current.getBoundingClientRect().width,
        oprListRef.current.getBoundingClientRect().height
      )
    );
  };

  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Опросный лист</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <OprosnyList myRef={oprListRef} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={onClick}>
            Скачать
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OprosnyListModal;
