// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Document, Page, Text, Image } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import styles from "./PDFScheme.module.scss";
import jsPDF from "jspdf";

import Drawout from "../../SvgModels/Drawout.svg";

const PDFScheme = ({ image }) => {
  // const [htmlState, setHtmlState] = useState(myRef?.current);
  // const [htmlState, setHtmlState] = useState(
  //   document.querySelector(".react-flow__viewport")
  // );

  // const html = `${document.querySelector("._navbarStep_11368_32")?.outerHTML}`;
  // const html = `${document.querySelector(".react-flow__viewport")?.outerHTML}`;
  // console.log(html);
  // if (htmlState !== null)
  //   strings = htmlState
  //     .map((item) => {
  //       return item;
  //     })
  //     .join(" ");
  // console.log(ReactDOMServer.renderToStaticMarkup(htmlState));
  // useEffect(() => {
  //   // let html = htmlState;
  //   // html = ReactDOMServer.renderToStaticMarkup(html);
  //   // console.log(html);
  //   myRef[0]?.current !== null
  //     ? console.log(myRef[0]?.current)
  //     : console.log("loadn....");
  //   // console.log(ReactDOMServer.renderToStaticMarkup(myRef[0]?.current));
  //   console.log(
  //     ReactDOMServer.renderToStaticMarkup(
  //       <div>
  //         <h1 className="hah">hey</h1>
  //         <h2 >Yo!</h2>
  //       </div>
  //     )
  //   );
  // }, [htmlState]);

  //   if (htmlState !== null) {
  //   }

  // setHtml(myRef?.current);

  // const html = (
  //   <b>
  //     <h1 textDecoration="underline" className={styles.red}>hello</h1>
  //   </b>
  // );

  //   const html1 = ReactDOMServer.renderToStaticMarkup(htmlState);
  //   console.log(html1);
  return (
    <Document>
      <Page orientation="landscape">
        {/* <Text>Hi guys! It's PDF</Text> */}
        {/* <Html>{html1}</Html> */}
        {/* {<Html>{html}</Html>} */}

        {/* <Image src={image} /> */}
        11111111111111111
      </Page>
    </Document>
  );
};

export default PDFScheme;
