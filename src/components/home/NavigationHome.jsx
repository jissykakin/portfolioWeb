import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import menuLinks from '../../data/menuLinks';

const NavigationHome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full flex items-center justify-between font-poppins text-sm uppercase font-medium text-secondary">
     
      {/* Menú hamburguesa solo visible en móvil */}
      <div className="flex md:hidden gap-4 items-center">
        <button onClick={toggleMenu} className="text-xl hover:text-primary">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú principal en desktop */}
      <div className="hidden md:flex flex-grow justify-between items-center  ">
        {menuLinks.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-1 transition-colors duration-300 mx-auto ${
                isActive ? 'bg-primary text-white' : 'hover:text-primary'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Selector de idioma + tema */}
      <div className="flex items-center gap-3">
        {/* Selector de idioma */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-secondary border-none focus:outline-none cursor-pointer"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>

        {/* Botón modo oscuro / claro */}
        <button onClick={toggleTheme} className="text-xl hover:text-primary">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-white text-secondary flex flex-col items-start p-4 gap-4 md:hidden z-50">
          {menuLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full py-2 transition-colors duration-300 ${
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
export default NavigationHome;