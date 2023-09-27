import i18next from 'i18next';
import plAbout from './locales/pl/about.json';

export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next.init({
  debug: true,
  fallbackLng: 'pl',
  defaultNS,
  resources: {
    pl: {
      about: plAbout,
    },
  },
});

export default i18next;