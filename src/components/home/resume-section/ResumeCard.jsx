import FloatingButton from "../../common/FloatingButton";
import SideTag from "../../common/SideTag";

function ResumeCard({ label, colorbg, colortext, position, description }) {
  return (
    <div className="relative w-full py-20  lg:w-3/7 h-full min-h-[400px] md:min-h-[500px]   " >
      <SideTag label={label} colorbg={colorbg} colortext={colortext} position={position} />
      <div className="container mx-auto px-6">
        <div className={`relative z-10 w-[55%] mx-5 lg:mx-0 py-16 ${position === "left" ? "left-40 sm:left-55 lg:left-65" : "right-0 lg:right-10" } bg-white shadow-md`}>
          <p className="text-sm text-gray-700 font-ibm-plex-sans px-8 pb-8">{description}</p>
          <FloatingButton position={position} className="mb-6">READ MORE</FloatingButton>
        </div>
      </div>
    </div>
  );
}


export default ResumeCard;