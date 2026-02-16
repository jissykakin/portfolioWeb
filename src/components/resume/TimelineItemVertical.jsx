// const TimelineItemVertical = ({ item, isActive, onClick }) => {
//   return (
   
    
//     <div className="flex gap-x-3">
   
//       {/* <div className="min-w-14 text-end"> */}
//       <div className="min-w-28 text-right flex flex-col items-end pr-2 ">
//         {/* <span class="text-xs text-gray-500 dark:text-neutral-400">{item.period}</span> */}
//          <span className="text-sm font-semibold text-primary">{item.period}</span>
//          <span className="text-xs text-gray-500">{item.level}</span>
//       </div>
    

   
//     <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
//       <div class="relative z-10 size-7 flex justify-center items-center">
//         <div class="after:box-content after:h-2 after:w-2 
//          after:rounded-full after:border-4 after:border-primary after:bg-primary after:bg-gradient-to-l  bg-gradient-to-tl dark:bg-neutral-600 flex items-center justify-center"></div>
//       </div>
//     </div>
    
    
//     <div class="grow pt-0.5 pb-8">
//       <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
//        {item.title}
//       </h3>
//       <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
//         {item.description}
//       </p>
//     </div>
   
//   </div>




//     // <button
//     //   onClick={onClick}
//     //   className={`w-full text-left px-4 py-6 flex gap-4 items-start transition-all hover:bg-gray-50 focus:outline-none ${
//     //     isActive ? "bg-orange-50 9 border-orange-400" : ""
//     //   }`}
//     //   aria-pressed={isActive}
//     // >
//     //   {/* columna izquierda: periodo + dot (alineado a la línea vertical) */}
//     //   <div className="w-28 flex flex-col items-end pr-4 text-right">
//     //     <span className="text-sm font-semibold text-gray-700">{item.period}</span>
//     //     <span className="text-xs text-gray-500">{item.level}</span>
//     //     <div className="mt-3">
//     //       <div
//     //         className={`h-3 w-3 rounded-full ${
//     //           isActive ? "bg-orange-500" : "bg-gray-300"
//     //         }`}
//     //       />
//     //     </div>
//     //   </div>

//     //   {/* contenido breve a la derecha de la fecha */}
//     //   <div className="flex-1">
//     //     <div className="text-sm font-semibold text-gray-800">{item.title}</div>
//     //     <div className="text-xs text-gray-500 mt-1">{item.institution}</div>
//     //     <div className="text-xs text-gray-600 mt-2 line-clamp-3">{item.description}</div>
//     //   </div>
//     // </button>


//   );
// };

// export default TimelineItemVertical;




import { motion } from "framer-motion";

const TimelineItemVertical = ({ item, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex gap-x-6 items-center justify-between w-full  mx-auto cursor-pointer"
    >
      {/* Lado izquierdo del eje (periodo) */}
      <div className="w-1/3 text-left flex flex-col items-end ">       

        <span  className={`text-sm font-semibold ${
            isActive ? "text-primary" : "text-secondary"
          }`}>{item.period}</span>
        <span className="text-xs text-gray-500">{item.level}</span>
      </div>

      {/* Punto central */}
      {/* <div
        className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          isActive
            ? "bg-primary border-primary shadow-lg shadow-purple-300/40"
            : "bg-white border-gray-400"
        }`}
        
      ></div> */}


       <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
            <div className={`after:box-content after:h-2 after:w-2  after:rounded-full
            dark:bg-neutral-600 flex items-center justify-center after:border-4
             ${ isActive  ? "after:border-primary after:bg-primary after:bg-gradient-to-l  bg-gradient-to-tl "
              : "after:bg-white after:border-gray-400" }`}></div>
          </div>
        </div>
         

      {/* Lado derecho del eje (título) */}
      <div className="w-2/3 pl-6">
        <div
          className={`p-4 transition-all duration-300 ${
            isActive
              ? "bg-purple-50 border-purple-400"
              : "bg-white border-gray-200"
          }`}
        >
          <h3 className="font-semibold text-gray-800 text-base md:text-lg">
            {item.title}
          </h3>
          {item.institution && (
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              {item.institution}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItemVertical;