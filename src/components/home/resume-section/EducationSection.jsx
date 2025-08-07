import ResumeCard from "./ResumeCard";
import ResumeColumn from "./ResumeColumn";

import { educationDescription, educationItems } from "../../../data/resumeData";

export default function EducationSection() {
  return (
    <section id="education" className="w-full pt-26 pb-0 lg:pb-5 dark:bg-secondary ">
      <div className="mx-auto w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-10">
        {/* Lista de Educación */}
        <div className="relative w-full lg:w-4/7 flex flex-col  pl-20 lg:pl-40 pr-20 lg:pr-8">
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