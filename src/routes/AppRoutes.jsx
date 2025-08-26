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
const  Home  = lazy(() => import('../pages/Home'));
const About = lazy(()=> import('../pages/About'));
const Portfolio = lazy(()=> import('../pages/Portfolio'));
const Services = lazy(()=> import('../pages/Services'));
const Resume = lazy(()=> import('../pages/Experience'));
const Contact = lazy(()=> import('../pages/Contact'));

import  HomeLayout  from '../layouts/HomeLayout';
import MainLayout from '../layouts/MainLayout';



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
            <Route path='/experience' element= {<Resume/>} />
          </Route>
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