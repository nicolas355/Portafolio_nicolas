
import React, { useEffect, useState } from "react";
import "../src/style/header.css";
import arrow from "../src/assets/img/arrow.png";

const Header = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="header"  >

     {showButton && (
        <a className={`arrow ${showButton ? "show" : ""}`} href="#inicio">
          <img src={arrow} alt="flecha" />
        </a>
      )}
    
  

     {/* HEADER */}
      <header className="contenedor-header">
        <div className="logo">
          <a href="#inicio"> <h3 >Nicolas Gonzalez</h3></a>
    
        </div>
   

  {/* Menu / Navegacion */}

        <nav id="inicio">
          <ul className="menu">
            <li>
              <a href="#inicio">INICIO</a>
            </li>

            <li>
              <a href="#sobre">SOBRE MÍ</a>
            </li>

            <li>
              <a href="#proyectos">PROYECTOS </a>
            </li>

            <li >
              <a href="#experiencia">EXPERIENCIA </a>
            </li>
          </ul>
        </nav>


      </header>
    </div>
  );
};

export default Header;
