import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderHome from '../components/home/HeaderHome';
import { HeroHome } from '../components/home/HeroHome';
import { BannerHome } from '../components/home/BannerHome';
import { AboutHome } from '../components/home/about-section/AboutHome';
import PortfolioSection from '../components/home/portfolio-section/PortfolioSection';
import ServicesSection from '../components/home/services-section/ServicesSection';
import ResumeSection from '../components/home/resume-section/ResumeSection';
import ContactSection from '../components/home/contact-section/ContactSection';



export const Home = () => {
  return (
    <>
    
       <section className="min-h-full bg-white h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4 pb-20 ">
          
          {/* Columna izquierda */}
          <div className="flex flex-col ">
            <HeaderHome />
            <HeroHome />
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col w-full h-auto  bg-amber-900">
            <BannerHome />
          </div>
        </div>
      </section>

      <AboutHome></AboutHome>
      <PortfolioSection></PortfolioSection>
      <ServicesSection></ServicesSection>
      <ResumeSection></ResumeSection>
      <ContactSection></ContactSection>
    </>


  )
}
