import React from "react";
import Header from "./components/Header";
import PromoEvent from "./components/PromoEvent";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Header />
      <PromoEvent />
      <Speakers />
      <Footer />
    </>
  );
}

export default App;
