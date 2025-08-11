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
        } flex font-poppins -z-0 m-0 p-0`}
      >
        <div
          className={`${colorbg}  dark:bg-graylight  w-[300px] h-[400px] text-center md:w-[370px] md:h-[500px] ${colortext} ${
            isRight
              ? "rounded-tl-[30px] rounded-bl-[30px]"
              : "rounded-tr-[30px] rounded-br-[30px]"
          } z-10`}
        >
          <span
            className={`absolute w-full m-0 p-0 ${
              isRight ? "-right-20 sm:-right-10 " : "-left-20 sm:-left-10 "
            } top-1/2   -translate-y-1/2 ${
              isRight ? "rotate-90" : "rotate-[-90deg]"
            } text-5xl  lg:text-7xl  font-semibold  ${colortext} dark:text-secondary`}
          >
            {label}
          </span>

          
        </div>
      </div>
    );
  }