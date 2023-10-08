import React from "react";
import "../src/style/sobreMi.css";
import sobre from "../src/assets/img/sobre.jpg";

{
  /* componente*/
}
import Proyecto from "./Proyecto";

{
  /* Datos*/
}
import proyecto from "./proyectos"; // 1

const SobreMi = () => {
  return (
    <div className="contenedor_sobre">
      <section className="sobre_mi" id="sobre">
        <div className="titulo">
          <h2>Sobre mí</h2>
        </div>

        <div className="grid_sobre">
          <div className="imagen">
            <img
              src={sobre}
              alt="imagen_de_persona_en_computadora_programando"
            />
          </div>

          <div className="contenido_sobre">
            <p>
              Soy Nicolas, un experimentado desarrollador web frontend{" "}
              <span>con más de 2 años de experiencia</span>, especializado en la
              creación de aplicaciones React altamente funcionales y atractivas.
            </p>

            <p>
              Mi trayectoria incluye proyectos exitosos y{" "}
              <span>trabajos freelance</span>, lo que me ha permitido
              perfeccionar mis habilidades y aprender de manera constante
            </p>

            <p>
              Con más de 3 años de estudio autodidacta, he fortalecido mi pasión
              por la programación, adquiriendo habilidades y creando{" "}
              <span>proyectos personales</span>.
            </p>
          </div>
        </div>

        <div className="titulo_2" id="proyectos">
          <h2>Proyectos </h2>
        </div>

        {/* 2  */}
        <main>
          {proyecto.map((proyectos, index) => (
            <Proyecto
              key={index}
              titulo={proyectos.titulo}
              descripcion={proyectos.descripcion}
              imagenURL={proyectos.imagenURL}
              enlace={proyectos.enlace}
            />
          ))}
        </main>
      </section>
    </div>
  );
};

export default SobreMi;
