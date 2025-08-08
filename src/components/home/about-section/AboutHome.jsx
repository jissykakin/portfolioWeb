import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SideTag from "../../common/SideTag";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import FloatingButton from "../../common/FloatingButton";

import { useTranslation } from 'react-i18next';




// export const AboutHome = () => {
//   return (
//     <section id="about" className="w-full py-26 bg-graylight">
//       <div className="mx-auto flex flex-col lg:flex-row  gap-10  text-gray-800">
        

//         {/* Columna Izquierda */}
//         <div className="relative w-full md:w-1/2 flex flex-col ">
        
//           {/* Texto Vertical */}
//         <SideTag label="About Me" colorbg = "bg-secondary"  colortext="text-white" position = "left" />
        
         
//           <div className="relative ml-35 md:ml-45 lg:ml-60 w-full max-w-sm mt-10">
//             <img
//               src="imgs/about.svg" // <-- Cambia por tu ruta de imagen
//               alt="Jissy Merlano"
//               className="sm:w-full h-auto object-cover shadow-lg w-[70%]"
//             />
          


//           {/* Estadísticas */}
          
//           <div className=" absolute -bottom-6 -right-12 flex mt-6 bg-primary text-white px-8 py-4 shadow-lg gap-10  text-lg font-semibold">
//             <div >
//               <p className="text-4xl font-ibm-plex-sans-condensed font-bold">15 Years</p>
//               <span className="text-lg font-ibm-plex-sans font-light">Experiences</span>
//             </div>
//             <div className="border-2 border-white h-15"></div>
//             <div>
//               <p className="text-4xl font-ibm-plex-sans">10 +</p>
//               <span className="text-lg font-ibm-plex-sans font-light">Projects</span>
//             </div>
//           </div>
//         </div>
//         </div>

//         {/* Columna Derecha */}
//         <div className="relative w-full md:w-1/2 space-y-6  pr-36 mt-20">
//           <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-snug">
//             Why Hire me for your Project or Company!
//           </h2>
//           <p className="text-gray-600 font-ibm-plex-sans leading-relaxed">
//             Soy Ingeniera de sistemas egresada de la corporación de la costa en convenio con especialización en automatización y control de procesos Industriales y especialización tecnológica en administración de bases de datos.
//           </p>
//           <p className="text-gray-600 leading-relaxed">
//             Me considero una persona con capacidad de liderazgo, trabajo en equipo, y adaptabilidad al cambio, con espíritu investigador, innovador y creativo, con un alto grado de responsabilidad y compromiso, con habilidades para analizar, diseñar, desarrollar y coordinar proyectos tecnológicos. Preparada con voluntad, conocimientos y entusiasmo para afrontar las exigencias planteadas.
//           </p>
//           {/* <button className="absolute right-0 text-sm font-ibm-plex-sans inline-flex items-center gap-4 bg-secondary text-white px-10 py-2  hover:bg-gray-800 transition">
//             READ MORE <FaSquareArrowUpRight className="text-sm " />
//           </button> */}
//           <FloatingButton position = "right" children = "READ MORE"></FloatingButton>
//         </div>
//       </div>
//     </section>
//   );
// }

// export const AboutHome = () => {
//   return (
//     <section id="about" className="w-full bg-graylight py-26 h-full ">
//       <div className="mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] h-full text-gray-800 ">
        

//         {/* Columna Izquierda */}
//         <div className="w-full flex flex-col h-full bg-amber-300">
//           <div className="relative">
//                 {/* Texto Vertical */}
//               <SideTag label="About Me" colorbg = "bg-secondary"  colortext="text-white" position = "left" />
        
         
//               <div className="relative lg:absolute z-10 top-20 left-55 max-w-xs bg-amber-600 ">
//                 <img
//                   src="imgs/about.svg" // <-- Cambia por tu ruta de imagen
//                   alt="Jissy Merlano"
//                   className="w-full h-full object-cover"
//                 />
              


//               {/* Estadísticas */}          
//               <div className=" absolute -bottom-6 -right-12 flex mt-6 bg-primary text-white px-8 py-4 shadow-lg gap-10  text-lg font-semibold">
//                 <div >
//                   <p className="text-4xl font-ibm-plex-sans-condensed font-bold">15 Years</p>
//                   <span className="text-lg font-ibm-plex-sans font-light">Experiences</span>
//                 </div>
//                 <div className="border-2 border-white h-15"></div>
//                 <div>
//                   <p className="text-4xl font-ibm-plex-sans">10 +</p>
//                   <span className="text-lg font-ibm-plex-sans font-light">Projects</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>

//         {/* Columna Derecha */}
//         <div className="relative w-full flex flex-col space-y-6 bg-amber-900  mx-auto pt-20 pb-10 ">
//           <div className="pr-20">
//             <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-snug">
//               Why Hire me for your Project or Company!
//             </h2>
//             <p className="text-gray-600 font-ibm-plex-sans leading-relaxed">
//               Soy Ingeniera de sistemas egresada de la corporación de la costa en convenio con especialización en automatización y control de procesos Industriales y especialización tecnológica en administración de bases de datos.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Me considero una persona con capacidad de liderazgo, trabajo en equipo, y adaptabilidad al cambio, con espíritu investigador, innovador y creativo, con un alto grado de responsabilidad y compromiso, con habilidades para analizar, diseñar, desarrollar y coordinar proyectos tecnológicos. Preparada con voluntad, conocimientos y entusiasmo para afrontar las exigencias planteadas.
//             </p>
//           </div>
          
//           {/* <button className="absolute right-0 text-sm font-ibm-plex-sans inline-flex items-center gap-4 bg-secondary text-white px-10 py-2  hover:bg-gray-800 transition">
//             READ MORE <FaSquareArrowUpRight className="text-sm " />
//           </button> */}
//           <FloatingButton position = "right" children = "READ MORE"></FloatingButton>
//         </div>
//       </div>
//     </section>
//   );
// }

export const AboutHome = () => {
    const { t } = useTranslation();
    const base = import.meta.env.VITE_BASE_URL;
  return (
    <section id="about" className="w-full bg-graylight dark:bg-secondary py-20 transition-all  ">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ">
        {/* Columna Izquierda */}
        <div className="relative flex flex-col items-center">
          <SideTag label={t('aboutsection_label')} colorbg="bg-secondary" colortext="text-white" position="left" />

          <div className="relative w-full max-w-sm mt-20 left-22  md:left-19  ">
            <img
              src={`${base}imgs/about.svg`} 
              alt="Jissy Merlano"
              className="w-[70%] sm:w-[80%]  transition-all md:w-full h-auto object-cover shadow-lg "
            />

            {/* Estadísticas */}
            <div className="absolute -bottom-6 left-1/2 md:left-3/4 transform -translate-x-1/2 flex flex-row justify-center items-center bg-primary text-white px-6 py-4 shadow-xl gap-5 md:gap-8 text-center w-max md:w-full ">
              <div className="flex flex-col">
                <p className="text-3xl md:text-4xl font-bold font-ibm-plex-sans-condensed w-auto">15 Years</p>
                <span className="text-sm md:text-base font-light font-ibm-plex-sans">Experiences</span>
              </div>
              <div className=" border-l-2 border-white h-10 mx-1 md:mx-2"></div>
              <div>
                <p className="text-3xl md:text-4xl font-bold font-ibm-plex-sans w-full">10 +</p>
                <span className="text-sm md:text-base font-light font-ibm-plex-sans">Projects</span>
              </div>
            </div>
          </div>
        </div>


        

        {/* Columna Derecha */}
        <div className="flex flex-col space-y-6 h-full">
          <div className=" lg:pr-20 py-20 px-10 md:px-20  lg:px-0">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary dark:text-white leading-snug mb-4">
              {t('aboutsection_title')}
            </h2>
            <p className="text-gray-700 dark:text-white font-ibm-plex-sans leading-relaxed">
              {t('aboutsection_description_1')}
            </p>
            <p className="text-gray-700 dark:text-white leading-relaxed mt-4">
              {t('aboutsection_description_2')}
            </p>
          </div>
          <div className="relative mt-6">
            <FloatingButton position="right">{t('read_more')}</FloatingButton>
          </div>
        </div>
      </div>
    </section>
  );
};