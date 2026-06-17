import React from 'react'
import { socialLinks } from '../../data/socialLinks';

const SocialLinks = ({ layout= 'row', className= '' }) => {
  return (
    <div className={`
            flex gap-2
            ${layout === 'row' ? "flex-row justify-center mt-8 text-3xl" : "" }
            ${layout === 'col' ? "flex-col w-fit  mt-4 text-xl" : "" }
            ${layout === 'absolute' ? "hidden md:flex flex-col text-3xl absolute left-12 top-60 lg:top-70 z-50" : ""}
            ${className}
        `}
    >
        { 
        socialLinks.map(({ name, icon: Icon, url }) => (
            <a
            key={name}
            href={url}
            aria-label={Icon}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                p-2 hover:bg-primary transition duration-300 hover:-translate-y-1 hover:scale-110
                ${layout === 'absolute' 
                    ? "hover:text-white dark:hover:text-secondary "
                    :  "rounded-3xl hover:text-secondary"
                }                
            `}          
            >
            <Icon />
            </a>
        ))}
    </div>
   
  )
}

export default SocialLinks;
