import { NavLink } from "react-router-dom"
import menuLinks from "../../../data/menuLinks";
import { useTranslation } from "react-i18next";




const NavContent = ({ togglesidebar }) => {
    const { t } = useTranslation();
  return (
    <nav className="space-y-3 mb-8">
        {
            
            menuLinks.map(({ label, path }) => (
                <NavLink
                    key={path}
                    to={path}
                    onClick={togglesidebar}
                    className={({ isActive }) =>
                    `block px-4 py-1 text-sm transition font-poppins  ${
                        isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white dark:hover:text-secondary transition-all duration-200 '
                    }`
                    }
                >
                    {t(label).toUpperCase()}
                </NavLink>
                ))
    }        
        

    </nav>
  )
}

export default NavContent;