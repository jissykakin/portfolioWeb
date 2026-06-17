// import { Routes, Route } from 'react-router-dom';
// import { Home } from '../pages/Home';
// import { About } from '../pages/About';
// import { Portfolio } from '../pages/Portfolio';
// import { Services } from '../pages/Services';
// import { Experience } from '../pages/Experience';
// import { Contact } from '../pages/Contact';
// import { lazy } from 'react';

import { lazy, Suspense } from 'react';
import { Route,  Routes } from 'react-router-dom';


// Importaciones normales (no lazy)
const  Home  = lazy(() => import('../pages/HomePage'));
const About = lazy(()=> import('../pages/AboutPage'));
const Portfolio = lazy(()=> import('../pages/PortfolioPage'));
const Services = lazy(()=> import('../pages/ServicesPage'));
const Resume = lazy(()=> import('../pages/ResumePage'));
const Contact = lazy(()=> import('../pages/ContactPage'));

import  HomeLayout  from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage';



export default function AppRoutes() {
  return (
      <Suspense fallback= {<div className='p-10 text-center'>Cargando ...</div>}>
        <Routes>
          {/* Layout Home */}
          <Route element={<HomeLayout />}>
            <Route path='/' element={<Home />} />
          </Route>

          {/* Layout Content */}
          <Route element={<MainLayout/>}>
            <Route path='/about' element= {<About/>} />
            <Route path='/portfolio' element= {<Portfolio />} />
            <Route path='/services' element= {<Services/>} />
            <Route path='/resume' element= {<Resume/>} />
            <Route path='/contact' element= {<Contact/>} />           
          </Route>

          {/* Not Found (siempre al final) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>   

   
  );
}

 // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/portfolio" element={<Portfolio />} />
    //   <Route path="/services" element={<Services />} />
    //   <Route path="/experience" element={<Experience />} />
    //   <Route path="/contact" element={<Contact />} />
    // </Routes>