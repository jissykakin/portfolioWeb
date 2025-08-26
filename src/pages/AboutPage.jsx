
import { useEffect } from "react";
import InfoItem from "../components/about/InfoItem";
import ProfileCard from "../components/about/ProfileCard";
import StatCard from "../components/about/StatCard";
import TagGroup from "../components/about/TagGroup";
import { contactInfo, hobbies, profile, softSkills, stats, texts } from "../data/aboutData";


const AboutPage = () => {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex-1 w-full h-full overflow-hidden font-ibm-plex-sans p-2 text-secondary">
      <p className="text-lg font-medium italic">Nice to meet you!</p>
      <h2 className="text-5xl font-bold">WELCOME TO...</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        {/* Perfil */}
        <div className="col-span-1">
          <ProfileCard {...profile} />
        </div>

        {/* Contenido */}
        <div className="col-span-2 px-8 ">
          {/* Contacto */}
          <div className="grid grid-cols-2 font-medium text-lg italic gap-y-8 gap-x-15 pb-10">
            {contactInfo.map((item, i) => (
              <InfoItem key={i} {...item} />
            ))}
          </div>

          <hr className="border-t border-gray-200 pb-8" />

          {/* Stats */}
          <div className="grid grid-cols-2 font-medium gap-y-8 gap-x-15 pb-10">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* Textos */}
          <div className="grid grid-cols-2 font-medium gap-y-8 gap-x-15 pb-10">
            {texts.map((t, i) => (
              <div key={i} className="flex flex-col gap-2 py-5">
                <h3 className="text-xl font-black ">{t.title}</h3>
                <p className="text-balance">{t.content}</p>
              </div>
            ))}
          </div>

          {/* Hobbies y Soft Skills */}
          <div className="grid grid-cols-2  gap-x-15 mb-2">
            <TagGroup title="Hobbies" items={hobbies} />
            <TagGroup title="Soft Skills" items={softSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
