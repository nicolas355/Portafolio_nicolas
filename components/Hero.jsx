
import React from "react";
import guitarLa from "../src/assets/img/cap.png";
import pacientes from "../src/assets/img/cap2.png";
import curriculum from "../src/assets/img/curriculum.jpeg";
import imagen_planificador from "../src/assets/img/proyectos/imagen_planificador.png";

import nicolas from "../src/assets/img/Nicolas.pdf";
import iconReactjs from "../src/assets/img/tecnologias/reactjs.svg";
import "../src/style/hero.css";
import imagen_muebleria from "../src/assets/img/proyectos/imagen_muebleria.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import curso from '../src/assets/img/proyectos/imagen_curso.png'
import { faWhatsapp,faGithub,faLinkedin     } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Hero = () => {
    
  return (
    <>

      <div className="bg">
        <section className="contenedor">
          <div className="card">
          
        
            <div className="contenido">
          
              <img src={curriculum} className="img-perfil" alt="imagen_perfil_nicolas_gonzalez" loading="lazy" />
              <h1>Nicolas Gonzalez</h1>
              <h2>Frontend Developer</h2>
            </div>

            <div className="redes-sociales">
              <div className="correo">
         
                  {" "}
                  <a  target="_blank" href="mailto:gonzaleznicolas8000@gmail.com"> <FontAwesomeIcon className="icono" icon={faEnvelope } />    </a>
           
       
              </div>

              <div className="linkedin">
              
                  {" "}
                  <a  target="_blank" href="https://www.linkedin.com/in/nicolas-gonzalez-68b5081b0/"> <FontAwesomeIcon className="icono" icon={faLinkedin} />  </a>
        
              
              </div>

              <div className="github">
         
                  {" "}
                  <a  target="_blank" href="https://github.com/nicolas355"> <FontAwesomeIcon className="icono" icon={faGithub} /></a>
            
             
              </div>

              <div className="whatsapp">
           
                  {" "}
                  <a  target="_blank" href="https://api.whatsapp.com/send/?phone=5491141904103">       <FontAwesomeIcon className="icono" icon={faWhatsapp} /> </a>
               
               
              </div>
            </div>

            <div className="boton_cv">
              <a href={nicolas} download="Curriculum_Nicolas">
                DESCARGAR CV
              </a>
            </div>
          </div>

          <div className="proyectos">

            <div className="imagen">
        <a target="_blank" href="https://controlgastosreactt.netlify.app/"><img src={imagen_planificador} alt="imagen_planificador_de_gastos" /></a>
            </div>
            <div className="imagen">
              <a target="_blank" href="https://reactpacientes.netlify.app/">  <img src={pacientes} alt="imagen_proyecto_de_pacientes" /></a>
            
            </div>
            <div className="imagen">
              <a target="_blank" href="https://universidadcarritoweb.netlify.app/"><img src={curso} alt="imagen_de_sitio_GuitarLA" /></a>
            </div>
            <div className="imagen">
          <a target="_blank" href="https://muebleria-amoblarte.web.app/"><img src={imagen_muebleria} alt="imagen_de_web_muebleria" /></a>
            </div>


        


          </div>
        </section>
        
        

      </div>

    
    </>
  );
};

export default Hero;
