import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLanguage = i18n.language || 'es';

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative text-sm text-secondary dark:text-white font-medium">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 bg-transparent border border-none dark:border-gray-600  hover:bg-primary hover:text-white dark:hover:text-secondary transition-all duration-200"
      >
        {currentLanguage.toUpperCase()} <FaChevronDown className="text-xs" />
      </button>

      {open && (
        <ul className="absolute z-50 right-0 mt-1 w-20 bg-white dark:bg-secondary border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`cursor-pointer px-4 py-2 hover:bg-primary hover:text-white dark:hover:text-white ${
                lang.code === currentLanguage ? 'font-semibold text-primary' : ''
              }`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;