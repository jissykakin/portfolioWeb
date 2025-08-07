import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function FloatingButton({
  position = "right", // 'left' o 'right'
  children = "READ MORE",
  className = "",
  ...props
}) {
  const positionClass = position === "left" ? "left-0" : "right-0";

  return (
    <button
      className={`absolute ${positionClass}  bottom-0 text-sm font-ibm-plex-sans
       inline-flex items-center gap-4 bg-secondary dark:bg-white dark:text-secondary text-white px-10 py-2 hover:bg-primary transition ${className}`}
      {...props}
    >
      {children}
      <FaSquareArrowUpRight className="text-sm" />
    </button>
  );
}