import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SideTag from "../../common/SideTag";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import FloatingButton from "../../common/FloatingButton";

export const AboutHome = () => {
  return (
    <section id="about" className="w-full py-26 bg-graylight">
      <div className="mx-auto flex flex-col md:flex-row  gap-10  text-gray-800">
        

        {/* Columna Izquierda */}
        <div className="relative w-full md:w-1/2 flex flex-col ">
        
          {/* Texto Vertical */}
        <SideTag label="About Me" colorbg = "bg-secondary"  colortext="text-white" position = "left" />
        
         
          <div className="relative z-10 w-[350px] h-[500px] mt-19 ml-60">
            <img
              src="imgs/about.svg" // <-- Cambia por tu ruta de imagen
              alt="Jissy Merlano"
              className="w-full h-full object-cover"
            />
          


          {/* Estadísticas */}
          
          <div className=" absolute -bottom-6 -right-12 flex mt-6 bg-primary text-white px-8 py-4 shadow-lg gap-10  text-lg font-semibold">
            <div >
              <p className="text-4xl font-ibm-plex-sans-condensed font-bold">15 Years</p>
              <span className="text-lg font-ibm-plex-sans font-light">Experiences</span>
            </div>
            <div className="border-2 border-white h-15"></div>
            <div>
              <p className="text-4xl font-ibm-plex-sans">10 +</p>
              <span className="text-lg font-ibm-plex-sans font-light">Projects</span>
            </div>
          </div>
        </div>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full md:w-1/2 space-y-6  pr-36 mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-snug">
            Why Hire me for your Project or Company!
          </h2>
          <p className="text-gray-600 font-ibm-plex-sans leading-relaxed">
            Soy Ingeniera de sistemas egresada de la corporación de la costa en convenio con especialización en automatización y control de procesos Industriales y especialización tecnológica en administración de bases de datos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Me considero una persona con capacidad de liderazgo, trabajo en equipo, y adaptabilidad al cambio, con espíritu investigador, innovador y creativo, con un alto grado de responsabilidad y compromiso, con habilidades para analizar, diseñar, desarrollar y coordinar proyectos tecnológicos. Preparada con voluntad, conocimientos y entusiasmo para afrontar las exigencias planteadas.
          </p>
          {/* <button className="absolute right-0 text-sm font-ibm-plex-sans inline-flex items-center gap-4 bg-secondary text-white px-10 py-2  hover:bg-gray-800 transition">
            READ MORE <FaSquareArrowUpRight className="text-sm " />
          </button> */}
          <FloatingButton position = "right" children = "READ MORE"></FloatingButton>
        </div>
      </div>
    </section>
  );
}