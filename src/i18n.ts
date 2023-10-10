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
import plResources from './locales/pl/resources.json';
import plSales from './locales/pl/sell.json';
import plUtils from './locales/pl/utils.json';
import plApp from './locales/pl/app.json';
import enAbout from './locales/en/about.json';
import enLists from './locales/en/lists.json';
import enAddOffer from './locales/en/add-offer.json';
import enBuy from './locales/en/buy.json';
import enLogin from './locales/en/login.json';
import enMain from './locales/en/main.json';
import enNav from './locales/en/nav.json';
import enOffers from './locales/en/offers.json';
import enPremium from './locales/en/premium.json';
import enRent from './locales/en/rent.json';
import enResources from './locales/en/resources.json';
import enSales from './locales/en/sell.json';
import enUtils from './locales/en/utils.json';
import enApp from './locales/en/app.json';

export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next.init({
  debug: true,
  fallbackLng: 'pl',
  defaultNS,
  resources: {
    en: {
      about: enAbout,
      lists: enLists,
      addOffer: enAddOffer,
      buy: enBuy,
      login: enLogin,
      main: enMain,
      nav: enNav,
      offers: enOffers,
      premium: enPremium,
      rent: enRent,
      resources: enResources,
      sell: enSales,
      utils: enUtils,
      app: enApp
    },
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
      resources: plResources,
      sell: plSales,
      utils: plUtils,
      app: plApp
    },
  },
});

export default i18next;