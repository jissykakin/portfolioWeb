import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

import SidebarContent from "../components/content/sidebar/SidebarContent";

const MainLayout = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleSidebar = () => setIsOpen(!isOpen);

  return (
   <>
    <button onClick={toggleSidebar} 
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 sm:hidden hover:bg-gray-100  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open sidebar</span>
       {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>   

    <SidebarContent isOpen={isOpen} toggleSidebar={toggleSidebar}></SidebarContent>

    <main className="flex-1 p-4 transition-all duration-300 sm:ml-64 min-h-screen overflow-auto">    
         
        <div className="flex flex-wrap w-full h-full ">          
              <Outlet />         
        </div>          
      
    </main>
   </>
    // <div classNameName="flex min-h-screen bg-gray-100 dark:bg-gray-900">
    //   {/* Sidebar */}
    //   <SidebarContent isOpen={isOpen} toggleSidebar={toggleSidebar} />

    //   {/* Contenido principal */}
    //   <main
    //     classNameName={`flex-1 p-6 transition-all duration-300 
    //     ${isOpen ? "lg:ml-[280px]" : "ml-0"}`}
    //   >
    //     {/* Botón hamburguesa SOLO en móviles */}
    //     <button
    //       onClick={toggleSidebar}
    //       classNameName="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white shadow-md"
    //     >
    //       {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    //     </button>
    //     <Outlet />
    //   </main>
    // </div>
  );
};

export default MainLayout;