import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const base = import.meta.env.VITE_BASE_URL || '/';

i18n
  .use(HttpBackend) // carga los archivos desde /locales/{lng}/translation.json
  .use(LanguageDetector) // detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false, // ponlo en true para ver logs

    backend: {
      loadPath: `${base}locales/{{lng}}/{{ns}}.json`,
    },
    load: 'languageOnly',

    interpolation: {
      escapeValue: false, // React ya hace escaping
    },
  });

export default i18n;