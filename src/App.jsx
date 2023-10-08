import React from "react";
import icono from '../public/vite.svg'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import Experiencia from "../components/Experiencia";
import "../src/style/variables.css";

const App = () => {
  return (
    
    <div className="body" id="inicio">


      <Header/>


        <Hero />


        <SobreMi/>

        <Experiencia/>
      <Footer />
    </div>
  );
};



export default App;
