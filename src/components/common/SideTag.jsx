// export default function SideTag({ label = "About Me", color = "primary"}) {
//     return (
//       <div className="absolute flex font-poppins -z-0  ">
               
//         {/* Caja frontal con texto rotado */}
//         <div className="bg-[#1E1E1E]  w-[400px] h-[500px] text-white  px-6 py-8 rounded-tr-[30px] rounded-br-[30px] z-10">
//           <span className="absolute left-0 top-1/2 -translate-y-1/2  rotate-[-90deg] text-7xl font-semibold text-white  hidden lg:block">
//             {label}
//           </span>
//         </div>
//       </div>
//     );
//   }


  export default function SideTag({
    label = "About Me",
    colorbg = "bg-[#1E1E1E]",   
    colortext = "text-white",
    position = "left", // 'left' o 'right'
  }) {
    const isRight = position === "right";
    
  
    return (
      <div
        className={`absolute top-0 ${
          isRight ? "right-0" : "left-0"
        } flex font-poppins -z-0 `}
      >
        <div
          className={`${colorbg} dark:bg-graylight  w-[300px] h-[400px]  md:w-[370px] md:h-[500px] ${colortext} ${
            isRight
              ? "rounded-tl-[30px] rounded-bl-[30px]"
              : "rounded-tr-[30px] rounded-br-[30px]"
          } z-10`}
        >
          <span
            className={`absolute  ${
              isRight ? "right-0" : "left-0"
            } top-1/2   -translate-y-1/2 ${
              isRight ? "rotate-90" : "rotate-[-90deg]"
            } text-5xl  md:text-7xl  font-semibold  ${colortext} dark:text-secondary`}
          >
            {label}
          </span>

          
        </div>
      </div>
    );
  }