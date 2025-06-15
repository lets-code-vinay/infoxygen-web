import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import UnderMaintenance from "./components/UnderMaintenance";

const App = () => {
  return (
    <>
      <Header />
      <UnderMaintenance />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
