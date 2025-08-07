import Typewriter from '../common/Typewriter';
import { socialLinks } from '../../data/socialLinks';
import { useTranslation } from 'react-i18next';

export const HeroHome = () => {
  const { t } = useTranslation();
  const roles = t('roles', { returnObjects: true }); // <- importante

  return (
    <div className="flex flex-col gap-6 mb-5">
      <div className="flex flex-col px-10 md:pl-40 py-10 lg:py-25 md:pt-30 animate-wigg mx-auto text-center md:mx-0 md:text-left    ">
        <div className="flex flex-col gap-2  ">
          <p className="text-2xl md:text-3xl text-graymedium font-bold font-poppins uppercase pb-2">{t('welcome')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white font-poppins uppercase pb-4">Jissy Merlano</h1>
          <h2 className="text-6xl md:text-7xl  font-bold text-primary font-ibm-plex-sans-condensed uppercase pb-6">
            <Typewriter
              texts={roles}
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
             {t('hireme')}
          </button>
          <a
            href="/docs/JissyMerlanoCV.pdf"
            download
            className="border border-primary text-primary text-lg uppercase font-medium font-poppins px-6 py-2 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-100"
          >
            {t('download')}
        </a>
        </div>
      </div>   
  
     <div className="hidden md:flex flex-col gap-2 text-3xl text-secondary dark:text-white absolute left-12 md:top-1/3 lg:top-2/5 z-50">
      {socialLinks.map(({ icon: Icon, url, name }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-primary hover:text-white dark:hover:text-secondary transition duration-300 hover:-translate-y-1 hover:scale-110 "
          aria-label={name}
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>


  )
}


