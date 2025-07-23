import FloatingButton from "../../common/FloatingButton";
import SideTag from "../../common/SideTag";

function ResumeCard({ label, colorbg, colortext, position, description }) {
  return (
    <div className="relative w-full py-20 md:w-3/7">
      <SideTag label={label} colorbg={colorbg} colortext={colortext} position={position} />
      <div className="container mx-auto px-6">
        <div className={`relative z-10 w-[55%] py-16 ${position === "left" ? "left-65" : "right-0" } bg-white shadow-md`}>
          <p className="text-sm text-gray-700 font-ibm-plex-sans px-8 pb-8">{description}</p>
          <FloatingButton position={position} className="mb-6">READ MORE</FloatingButton>
        </div>
      </div>
    </div>
  );
}


export default ResumeCard;