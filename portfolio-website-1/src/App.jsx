import React, { Component } from "react";
import Header from "./componetnts/header/Header";
import Nav from "./componetnts/nav/Nav";
import About from "./componetnts/about/About";
import Exp from "./componetnts/exp/Exp";
import Servicess from './componetnts/servicess/Servicess'
import Port from './componetnts/port/Port'
import Testmo from './componetnts/testmo/Testmo'
import Contact from './componetnts/contact/Contact' 
import Footer from './componetnts/footer/Footer'

function App() {
  return (
    <>
      <Header />

      <Nav />

      <About />

      <Exp />

      <Servicess />

      <Port />

      <Testmo />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
