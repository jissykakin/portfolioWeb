import ResumeCard from "./ResumeCard";
import ResumeColumn from "./ResumeColumn";

import { educationDescription, educationItems } from "../../../data/resumeData";

export default function EducationSection() {
  return (
    <section id="education" className="w-full pt-26 pb-5">
      <div className="mx-auto flex flex-col md:flex-row gap-10">
        {/* Lista de Educación */}
        <div className="relative w-full md:w-4/7 flex flex-col pl-40 pr-8">
          <ResumeColumn items={educationItems} />
        </div>
        {/* Tarjeta Lateral */}
        <ResumeCard
          label="Education"
          colorbg="bg-graylight"
          colortext="text-secondary"
          position="right"
          description={educationDescription}
        />
      </div>
    </section>
  );
}