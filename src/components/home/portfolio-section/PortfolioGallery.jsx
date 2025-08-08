
export default function PortfolioGallery({ projects }) {
  const base = import.meta.env.VITE_BASE_URL;
    return (
      <div className="grid grid-cols-1 px-5 sm:px sm:grid-cols-2 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="relative group  overflow-hidden shadow-lg">
            <img
              src={`${base}${project.image}`}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
  
            {/* Overlay con fondo blanco claro y efecto sutil */}
            <div className="absolute inset-0 p-4 flex flex-col justify-start opacity-0 group-hover:opacity-85 bg-secondary dark:bg-white transition-all duration-500 backdrop-blur-md translate-y-8 group-hover:translate-y-0">
              <h3 className="text-white dark:text-gray-800 font-bold text-lg">{project.title}</h3>
              <p className="text-white  dark:text-gray-600 text-sm mt-1"> {project.description.slice(0, 250)}...</p>
  
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 border border-gray-300 text-xs text-gray-700 px-1 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }