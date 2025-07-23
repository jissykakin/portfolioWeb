import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { Services } from '../pages/Services';
import { Experience } from '../pages/Experience';
import { Contact } from '../pages/Contact';

// Importaciones normales (no lazy)


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}