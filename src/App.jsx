/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import PdfDocument from "./components/GenerateInvoice/Invoice";
import { PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="App">
      <PDFViewer width={800} height={600} showToolbar={false}>
        <PdfDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
