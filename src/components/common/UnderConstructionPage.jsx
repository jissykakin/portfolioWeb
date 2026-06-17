

import { FaHammer  } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnderConstructionPage = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      {/* Imagen ilustración (ejemplo, cámbiala por la tuya) */}
      <img
        src= {`${import.meta.env.VITE_BASE_URL}imgs/under-construction.svg`}
        alt="Under Construction"
        className="w-sm  mb-6"
      />

      {/* Ícono + texto */}
      <div className="flex items-center gap-2 mb-4">
        <FaHammer className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-gray-800">Page Under Construction</h1>
      </div>

      <p className="text-gray-600 max-w-lg mb-6">
        We’re working hard to bring you something amazing. 🚧  
        Please check back later!
      </p>

      {/* Botón de regreso */}
      <a
        href="/"
        className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-shadow transition"
      >
        Go Back Home
      </a>
    </div>

    
  );
};

export default UnderConstructionPage;