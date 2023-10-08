import React from 'react'


  {/* data de proyecto.js */}
const Proyecto = ({ titulo, descripcion,imagenURL, enlace }) => {


  return (
    <div>
  
        <div className="contenido_2">
          <ul className="contenedor_destacado">

            
          <div className="lista">
              <h3>
                {" "}
               {titulo}
              </h3>
              <li>{descripcion} </li>
            </div>

            <div className="imagen_proyecto">
              <a target="_blank" href={enlace} > <img src={imagenURL} loading='lazy' alt={`imagen_de_${titulo} ` }/> </a>
          
            </div>

       
         

          
          </ul>
        </div>
    </div>
  )
}

export default Proyecto
