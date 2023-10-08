import React from 'react'
import "../src/style/footer.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp,faGithub     } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="contenedor_footer">
      

    <div className="titular_footer">
    <h4>Nicolas Gonzalez</h4>
    </div>

        <div className="redes_sociales">

        <a target='_blank' href="https://github.com/nicolas355">  <FontAwesomeIcon className="icono" icon={faGithub} /> </a>
       <a target='_blank' href="mailto:gonzaleznicolas8000@gmail.com"> <FontAwesomeIcon className="icono" icon={faEnvelope } />     </a>
       <a target='_blank' href="https://api.whatsapp.com/send/?phone=5491141904103">     <FontAwesomeIcon className="icono" icon={faWhatsapp} />  </a>
    
 {/*  </a> 
            <FontAwesomeIcon className="icono" icon={faLinkedin} />
            <FontAwesomeIcon className="icono" icon={faGithub} />
           
            */ }

        </div>



      </div>
    </footer>
  )
}

export default Footer
