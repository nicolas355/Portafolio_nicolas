
{/*imagenes PROYECTOS*/ }
import imagen_guitarra from "../src/assets/img/proyectos/imagen_guitarra.png";

import imagen_cripto from "../src/assets/img/proyectos/imagen_cripto.png";
import imagen_rick from "../src/assets/img/proyectos/imagen_rick.png";

import imagen_api_javascript from "../src/assets/img/proyectos/imagen_api_javascript.png";
import eccomerceNextjs from "../src/assets/img/proyectos/eccomerce-nextjs.png";

{/*imagenes PROYECTOS*/ }


{/*CONTENIDO PROYECTOS */ }

const proyectos = [

  {
    titulo: "Eccomerce", // titulo
    descripcion:
      "La tienda se basa en Next.js para crear una experiencia de carga rápida y fluida, y Tailwind CSS para lograr un diseño elegante y responsivo. La gestión de estado se implementa utilizando Context API y Props. Los usuarios pueden filtrar productos por categoría para encontrar fácilmente lo que buscan. El carrito de compras es completo y permite a los usuarios agregar, eliminar y ver su carrito en tiempo real.",
    imagenURL: eccomerceNextjs, // Ruta a la imagen
    enlace: "https://ecomerce-next-js-ten.vercel.app/", // ENLACE imagen
   
  },

  {
    titulo: "Recetas API - Javascript", // titulo
    descripcion:
      "Aplicación que permite a los usuarios buscar, explorar y guardar sus recetas favoritas. La aplicación utiliza una API para obtener información actualizada sobre una amplia variedad de recetas y proporciona una interfaz de usuario intuitiva para interactuar con estas recetas.",
    imagenURL: imagen_api_javascript, // Ruta a la imagen
    enlace: "https://ricepefinder.netlify.app/",  // ENLACE imagen
  },
    
    {
      titulo: "Proyecto de Consumo de APIs de Criptomonedas con React",
      descripcion:
        "Diseñé y desarrollé una aplicación web que muestra tasas de criptomonedas en tiempo real con React, integración de APIs de criptomonedas, Style Components para estilos eficientes y un Custom Hook para datos y APIs",
      imagenURL: imagen_cripto, // Ruta a la imagen
      enlace: "https://cotizadordemonedas.netlify.app/",
    },
    {
      titulo: "Rick and Morty",
      descripcion:
        "Consumí la API de Rick and Morty para obtener datos de personajes, episodios y ubicaciones, utilizando React con useState y useEffect en mi proyecto",
      imagenURL:  imagen_rick, // Ruta a la imagen
      enlace: "https://rickandmortysiteapi.netlify.app/", //  ENLACE imagen
    },

    {

      
      titulo: "Proyecto con Remix y Strapi Blog y Ecomerce",
      descripcion:
        "Este proyecto combina las capacidades de Remix y Strapi para ofrecer un sitio web versátil que ofrece tanto contenido informativo en forma de blog como la posibilidad de comprar productos en línea, brindando a los usuarios una experiencia completa y atractiva",
      imagenURL: imagen_guitarra, // Ruta a la imagen
      enlace: "https://www.youtube.com/watch?v=nl2xVCPgMdU&feature=youtu.be", // ENLACE imagen
    }, 



  ];

  export default proyectos;