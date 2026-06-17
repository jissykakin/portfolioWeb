import ResumeToggleButton from "./ResumeToggleButton";


const ResumeSectionHeader = ({ title, isOpen, onToggle, description }) => (
  <div className="flex w-full justify-between items-center gap-6 ">
    <div className="w-32 flex-auto">
      <h3 className={`text-2xl font-bold ${
         isOpen ? "text-primary" : "text-secondary"
         }`}>• {title.toUpperCase()}</h3>
    </div>
   {!isOpen && (
    <div className="w-64 flex-auto">
      <p className="text-gray-600 text-sm mt-2 ">{description}</p>
    </div> 
    )}  
    <div className="w-14 flex-none ">
      <ResumeToggleButton isOpen={isOpen} onClick={onToggle} />
    </div>
    
  </div>
);



export default ResumeSectionHeader;