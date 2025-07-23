import { experienceDescription, experienceItems } from "../../../data/resumeData";
import ResumeCard from "./ResumeCard";
import ResumeColumn from "./ResumeColumn";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full pt-10 pb-26">
      <div className="mx-auto flex flex-col md:flex-row gap-10">
        {/* Tarjeta lateral */}
        <ResumeCard
          label="Experience"
          colorbg="bg-graylight"
          colortext="text-secondary"
          position="left"
          description={experienceDescription}
        />
        {/* Lista de Experiencia */}
        <div className="relative w-full md:w-4/7 flex flex-col pr-40 pl-8">
          <div className="py-16">
            <ResumeColumn items={experienceItems} />
          </div>
        </div>
      </div>
    </section>
  );
}