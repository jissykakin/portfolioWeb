import { useState } from "react";

const ProfileCard = ({ img, name, title, description, cvLink }) => {

    const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col justify-center  content-between items-center w-full ">
      <img
        src={img}
        alt={name}
        onLoad={() => setLoaded(true)}
        className={`
            max-w-sm md:max-w-sm lg:max-w-full h-full object-cover
            transition-opacity duration-1000 animate-ease-in
            ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
      <div className="flex flex-col justify-center items-center mt-8 text-center">
        <h3 className="font-bold text-4xl font-poppins text-primary pb-4">{name}</h3>
        <span className="font-bold text-xl italic pb-2">{title}</span>
        <p className="text-balance font-medium text-lg pb-2 mb-10">{description}</p>
        <a
          href={cvLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white text-md sm:text-lg uppercase font-medium font-poppins px-6 py-2 border-b-2 border-b-primary-shadow transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;