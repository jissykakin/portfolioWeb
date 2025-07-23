import Typewriter from '../common/Typewriter';
import { socialLinks } from '../../data/socialLinks';

export const HeroHome = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col px-10 md:pl-40 py-10 md:pt-30 animate-wigg mx-auto text-center md:mx-0 md:text-left  ">
        <div className="flex flex-col gap-2  ">
          <p className="text-2xl md:text-3xl text-graymedium font-bold font-poppins uppercase pb-2">Hi, I am</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary font-poppins uppercase pb-4">Jissy Merlano</h1>
          <h2 className="text-6xl md:text-7xl  font-bold text-primary font-ibm-plex-sans-condensed uppercase pb-6">
            <Typewriter
              texts={["SYSTEM ENGINEER", "WEB DEVELOPER", "DATA ANALYZER", "UI/UX DESIGNER", "GRAPHIC DESIGNER"]}
              typingSpeed={100}
              pause={1000}
            />
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mt-8  mx-auto text-center md:mx-0 md:text-left ">
          <button 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          className="bg-primary text-white text-lg uppercase font-medium font-poppins px-6 py-2 border-b-2 border-b-primary-shadow transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600">
            Hire Me
          </button>
          <a
            href="/docs/JissyMerlanoCV.pdf"
            download
            className="border border-primary text-primary text-lg uppercase font-medium font-poppins px-6 py-2 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-100"
          >
            Download CV
        </a>
        </div>
      </div>   
  
     <div className="hidden md:flex flex-col gap-2 text-3xl text-secondary absolute left-12 md:top-1/3 lg:top-1/2 z-50">
      {socialLinks.map(({ icon: Icon, url, name }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-primary hover:text-white transition duration-300 hover:-translate-y-1 hover:scale-110"
          aria-label={name}
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>


  )
}


