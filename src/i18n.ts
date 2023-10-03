import i18next from 'i18next';
import plAbout from './locales/pl/about.json';
import plLists from './locales/pl/lists.json';
import plAddOffer from './locales/pl/add-offer.json';
import plBuy from './locales/pl/buy.json';

export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next.init({
  debug: true,
  fallbackLng: 'pl',
  defaultNS,
  resources: {
    pl: {
      about: plAbout,
      lists: plLists,
      addOffer: plAddOffer,
      buy: plBuy
    },
  },
});

export default i18next;