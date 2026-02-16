import { motion } from "framer-motion";
import ResumeItem from "./ResumeItem";
import { useResume } from "../../context/ResumeContext";

const ResumeTimeline = ({ items}) => {
  const { selectedItem, setSelectedItem } = useResume();

  return (
    <motion.div
    
      layout
      // className="flex overflow-x-auto py-6 space-x-8 scrollbar-thin scrollbar-thumb-gray-300"
    >
      {items.map((item) => (
        <div className="group relative py-6 pl-8 sm:pl-32">
        <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
          <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600 uppercase sm:absolute sm:mb-0">
            {item}
          </time>
          <div className="text-xl font-bold text-slate-900">{item}</div>
        </div>
        <div className="text-slate-500">{item}</div>
      </div>  
      ))}
    </motion.div>
  );
};

export default ResumeTimeline;