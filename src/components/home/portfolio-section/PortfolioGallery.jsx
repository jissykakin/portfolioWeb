// export default function PortfolioGallery({ projects }) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8   ">
//         {projects.map((project, index) => (
//           <div key={index} className="relative group overflow-hidden">
//             <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
//             <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white font-semibold">{project.title}</h3>
//               <p className="text-gray-300 text-sm">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="bg-white text-sm text-black px-2 py-1 rounded">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

export default function PortfolioGallery({ projects }) {
    return (
      <div className="grid grid-cols-1 px-5 sm:px sm:grid-cols-2 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="relative group  overflow-hidden shadow-lg">
            <img
              src={project.image}
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