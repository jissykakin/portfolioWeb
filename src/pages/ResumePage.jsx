import { ResumeProvider } from "../context/ResumeContext";


import ResumeSection from "../components/resume/ResumeSection";
import { resumeList } from "../data/resumeData";
import SectionTitle from "../components/common/SectionTitle";

export default function ResumePage() {
  return (
    <ResumeProvider>
       <div className="w-full p-6 md:p-8 bg-white text-gray-900 font-ibm-plex-sans">
        <SectionTitle title="RESUME" subtitle="15+ years of experience" />
        {/* <h2 className="text-3xl font-extrabold mb-4">Resume</h2>
        <p className="text-sm text-gray-500 mb-10">15+ years of experience</p> */}

        {resumeList.map((section) => (
            <ResumeSection
              key={section.id}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              title={section.title}
              description={section.description}
              items={section.list || []}
            />
          ))}
      </div>
    </ResumeProvider>
  );
}