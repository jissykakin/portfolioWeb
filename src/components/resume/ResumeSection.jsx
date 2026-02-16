import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useResume } from "../../context/ResumeContext";
import ResumeSectionHeader from "./ResumeSectionHeader"; // tu header con toggle
import ResumeTimelineVertical from "./ResumeTimelineVertical";
import ResumeDetailPanel from "./ResumeDetailPanel";

const ResumeSection = ({ id, title, description, items = [] }) => {
  const { openSection, setOpenSection, setSelectedItem } = useResume();
  const isOpen = openSection === id;

  const toggleSection = () => setOpenSection(isOpen ? null : id);

  // Cuando se abra la sección, inicializamos la selección al primer item
  useEffect(() => {
    if (isOpen && items.length > 0) {
      setSelectedItem(items[0]);
    }
    if (!isOpen) {
      setSelectedItem(null);
    }
  }, [isOpen, items, setSelectedItem]);

  return (
    <div className="w-full border-b border-gray-200 py-6">
      <ResumeSectionHeader title={title} description={description} isOpen={isOpen} onToggle={toggleSection} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="open"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="mt-6 flex flex-col md:flex-row gap-6"
          >
            <div className="md: w-full ">
              <ResumeTimelineVertical items={items} />
            </div>

            {/* <div className="md:w-1/3">
              <ResumeDetailPanel />
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeSection;