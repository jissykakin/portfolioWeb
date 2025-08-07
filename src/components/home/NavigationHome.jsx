import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import menuLinks from '../../data/menuLinks';
import ThemeToggle from '../common/ThemeToggle';
import LanguageDropdown from '../common/LanguageDropdown';
import { useTranslation } from 'react-i18next';

const NavigationHome = () => {
  const [language, setLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const { t } = useTranslation();

  return (
    <nav className="w-full flex items-center justify-between font-poppins text-sm uppercase font-medium text-secondary dark:text-white">
     
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
                isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white dark:hover:text-secondary transition-all duration-200 '
              }`
            }
          >
            {t(label)}
          </NavLink>
        ))}
      </div>

      {/* Selector de idioma + tema */}
      <div className="flex items-center gap-3">
        {/* Selector de idioma */}     
        <LanguageDropdown language={language} setLanguage={setLanguage} />
 
        {/* Botón modo oscuro / claro */}        
          <ThemeToggle />
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