import { FaPlus, FaMinus } from "react-icons/fa6";

const ResumeToggleButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="ml-4 text-graymedium hover:text-gray-700 transition-colors"
    aria-label={isOpen ? "Close" : "Open"}
  >
    {isOpen ? <FaMinus size={24} /> : <FaPlus size={24} />}
  </button>
);

export default ResumeToggleButton;