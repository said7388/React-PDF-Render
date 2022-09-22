import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { NextPage } from "next";
import PDFGenerate from "../src/pdfFile/PDFGenerate";

const Home: NextPage = () => {
  return (
    <PDFViewer height='700' width='100%'>
      <PDFGenerate />
    </PDFViewer>
  );
};

export default Home;
