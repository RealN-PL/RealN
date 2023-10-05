import i18next from 'i18next';
import plAbout from './locales/pl/about.json';
import plLists from './locales/pl/lists.json';
import plAddOffer from './locales/pl/add-offer.json';
import plBuy from './locales/pl/buy.json';
import plLogin from './locales/pl/login.json';
import plMain from './locales/pl/main.json';
import plNav from './locales/pl/nav.json';
import plOffers from './locales/pl/offers.json';
import plPremium from './locales/pl/premium.json';
import plRent from './locales/pl/rent.json';

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
      buy: plBuy,
      login: plLogin,
      main: plMain,
      nav: plNav,
      offers: plOffers,
      premium: plPremium,
      rent: plRent,
    },
  },
});

export default i18next;