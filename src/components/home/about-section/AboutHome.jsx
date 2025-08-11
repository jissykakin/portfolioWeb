import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SideTag from "../../common/SideTag";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import FloatingButton from "../../common/FloatingButton";

import { useTranslation } from 'react-i18next';

export const AboutHome = () => {
    const { t } = useTranslation();
    const base = import.meta.env.VITE_BASE_URL;
  return (
    <section id="about" className=" bg-graylight dark:bg-secondary py-20 transition-all  ">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center  ">
        {/* Columna Izquierda */}
        <div className="relative flex flex-col items-center ">
          <SideTag label={t('aboutsection_label')} colorbg="bg-secondary" colortext="text-white" position="left" />

          <div className="mt-17">
            <img
              src={`${base}imgs/about.svg`} 
              alt="Jissy Merlano"
              className="relative w-[70%] sm:w-[80%] left-22 sm:left-28 max-w-sm transition-all  h-auto object-cover shadow-lg "
            />

            {/* Estadísticas */}
             <div className="absolute -bottom-6 left-1/2 sm:-right-10 transform -translate-x-1/2 flex flex-row   justify-center items-center bg-primary text-white px-6 py-4 shadow-xl rounded-xl gap-6 text-center w-[90%] md:w-max">
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

