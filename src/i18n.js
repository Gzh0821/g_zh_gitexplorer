import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationZH from './translations/zh-Hans/translation.json';
import translationEN from './translations/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'zh-Hans': {
        translation: translationZH,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: 'zh-Hans',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
