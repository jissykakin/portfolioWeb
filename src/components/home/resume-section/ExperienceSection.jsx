import { experienceDescription, experienceItems } from "../../../data/resumeData";
import ResumeCard from "./ResumeCard";
import ResumeColumn from "./ResumeColumn";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full pt-10 pb-26 dark:bg-secondary ">
      <div className="mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Tarjeta lateral */}
        <ResumeCard
          label="Experience"
          colorbg="bg-graylight"
          colortext="text-secondary"
          position="left"
          description={experienceDescription}
        />
        {/* Lista de Experiencia */}
        <div className="relative w-full lg:w-4/7 flex flex-col pr-20 lg:pr-40 pl-20 lg:pl-8">
          <div className="py-0 lg:py-16">
            <ResumeColumn items={experienceItems} />
          </div>
        </div>
      </div>
    </section>
  );
}