import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [openSection, setOpenSection] = useState(null); // e.g. 'education'
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ResumeContext.Provider value={{ openSection, setOpenSection, selectedItem, setSelectedItem }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);