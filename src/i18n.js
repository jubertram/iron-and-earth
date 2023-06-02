import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        navbar: {
          title: "Julien's Blog",
          home: 'Home',
          posts: 'Posts'
        }
      }
    },
    fr: {
      translation: {
        navbar: {
          title: "Blog de Julien",
          home: 'Accueil',
          posts: 'Articles'
        }
      }
    }
  }
});

export default i18n;
