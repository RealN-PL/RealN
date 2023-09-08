import { Navigate, createBrowserRouter } from "react-router-dom";
import HouseNearby from "./components/views/buy/housenearby/HouseNearby";
import HomeNearby from "./components/views/buy/homenearby/HomeNearby";
import LandNearby from "./components/views/buy/ladnnearby/LandNearby";
import WhyBuy from "./components/views/buy/whybuy/WhyBuy";
import CanIAfford from "./components/views/resources/caniafford/CanIAfford";
import BuyGuide from "./components/views/resources/buyguide/BuyGuide";
import BuyInSteps from "./components/views/resources/buyguide/guides/BuyInSteps";
import ChooseAgent from "./components/views/resources/buyguide/guides/ChooseAgent";
import Commision from "./components/views/resources/buyguide/guides/Commision";
import FindServices from "./components/views/resources/findservices/FindServices";
import FindEvents from "./components/views/resources/findevents/FindEvents";
import HouseMarket from "./components/views/resources/housemarket/HouseMarket";
import SellWorth from "./components/views/sell/sellworth/SellWorth";
import SellDashboard from "./components/views/sell/selldashboard/SellDashboard";
import PayOff from "./components/views/sell/payoff/Payoff";
import SellGuide from "./components/views/sell/sellguide/SellGuide";
import HomeImprovement from "./components/views/sell/homepreparation/HomePreparation";
import RentGuide from "./components/views/rent/rentguide/RentGuide";
import BuyOrRent from "./components/views/rent/buyorrent/BuyOrRent";
import RentTrends from "./components/views/rent/renttrends/RentTrends";
import TipsForRenters from "./components/views/rent/tipsforrenters/TipsForRenters";
import Contact from "./components/views/main/Contact";
import Searchpage from "./components/views/buy/searchpage/Searchpage";
import PropertyDetails from "./components/views/buy/propertyDetails/PropertyDetails";
import UpcomingEvents from "./components/views/resources/findevents/upcomingevents/UpcomingEvents";
import AddOffer from "./components/views/AddOffer/AddOffer";
import Catalog from "./components/views/offers/Catalog";
import CatalogEdit from "./components/views/offers/CatalogEdit";
import HomeValue from "./components/views/sell/sellworth/HomeValue";
import FiveWays from "./components/views/sell/sellworth/FiveWays";
import TenAdvices from "./components/views/sell/sellworth/TenAdvices";
import SellWith from "./components/views/sell/sellwithrealn/SellWith";
import App from "./App";
import HomePreparation from "./components/views/sell/homepreparation/HomePreparation";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "add-new-offer", element: <AddOffer /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <CatalogEdit /> },
      { path: "search/:id", element: <PropertyDetails /> },
      { path: "house-nearby", element: <HouseNearby /> },
      { path: "home-nearby", element: <HomeNearby /> },
      { path: "land-nearby", element: <LandNearby /> },
      { path: "why-buy", element: <WhyBuy /> },
      { path: "can-i-afford", element: <CanIAfford /> },
      { path: "guides", element: <BuyGuide /> },
      { path: "guides/how-to-buy-a-house", element: <BuyInSteps /> },
      {
        path: "guides/how-to-prepare-my-home",
        element: <HomePreparation />,
      },
      {
        path: "guides/how-to-choose-real-estate-agent",
        element: <ChooseAgent />,
      },
      { path: "guides/real-estate-commision", element: <Commision /> },
      { path: "find-services", element: <FindServices /> },
      { path: "find-events", element: <FindEvents /> },
      { path: "housing-market", element: <HouseMarket /> },
      { path: "search", element: <Searchpage /> },
      { path: "sell", element: <SellWith /> },
      { path: "upcoming-events", element: <UpcomingEvents /> },
      { path: "sell/how-much-is-it-worth", element: <SellWorth /> },
      {
        path: "sell/how-much-is-it-worth/find-the-value",
        element: <HomeValue />,
      },
      { path: "sell/how-much-is-it-worth/five-ways", element: <FiveWays /> },
      {
        path: "sell/how-much-is-it-worth/ten-advices",
        element: <TenAdvices />,
      },
      { path: "sell/dashboard", element: <SellDashboard /> },
      { path: "guides/will-selling-pay-off", element: <PayOff /> },
      { path: "guide/how-to-sell-a-house", element: <SellGuide /> },
      { path: "guides/home-improvement", element: <HomeImprovement /> },
      { path: "guides/how-to-rent-a-house", element: <RentGuide /> },
      { path: "guides/buy-or-rent", element: <BuyOrRent /> },
      { path: "guides/rent-trends", element: <RentTrends /> },
      { path: "guides/tips-for-renters", element: <TipsForRenters /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Navigate replace to="/" /> },

    ],
  },
]);
export default router;
