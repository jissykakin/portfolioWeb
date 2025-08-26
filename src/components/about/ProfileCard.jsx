const ProfileCard = ({ img, name, title, description, cvLink }) => {
  return (
    <div className="flex flex-col justify-center  content-between items-center w-full ">
      <img
        src={img}
        alt={name}
        className="max-w-sm md:max-w-sm lg:max-w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center items-center mt-4 text-center">
        <h3 className="font-bold text-4xl font-poppins text-primary pb-2">{name}</h3>
        <span className="font-bold text-2xl italic pb-2">{title}</span>
        <p className="text-balance font-medium text-lg pb-2 mb-10">{description}</p>
        <a
          href={cvLink}
          className="bg-primary text-white text-md sm:text-lg uppercase font-medium font-poppins px-6 py-2 border-b-2 border-b-primary-shadow transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;