import { Routes, Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/utils/Footer";
import Main from "./components/main/Main";
import HouseNearby from "../src/components/buy/housenearby/HouseNearby";
import HomeNearby from "../src/components/buy/homenearby/HomeNearby";
import LandNearby from "./components/buy/ladnnearby/LandNearby";
import WhyBuy from "./components/buy/whybuy/WhyBuy";
import CanIAfford from "./components/resources/caniafford/CanIAfford";
import BuyGuide from "./components/resources/buyguide/BuyGuide";
import BuyInSteps from "./components/resources/buyguide/guides/BuyInSteps";
import ChooseAgent from "./components/resources/buyguide/guides/ChooseAgent";
import Commision from "./components/resources/buyguide/guides/Commision";
import FindLender from "./components/resources/findlender/FindLender";
import FindAgent from "./components/resources/findagent/FindAgent";
import FindEvents from "./components/resources/findevents/FindEvents";
import HouseMarket from "./components/resources/housemarket/HouseMarket";
import SellHouse from "./components/sell/sellhouse/SellHouse";
import SellWorth from "./components/sell/sellworth/SellWorth";
import SellDashboard from "./components/sell/selldashboard/SellDashboard";
import PayOff from "./components/sell/payoff/Payoff";
import SellGuide from "./components/sell/sellguide/SellGuide";
import HomeImprovement from "./components/sell/homeimprovement/HomeImprovement";
import RentGuide from "./components/rent/rentguide/RentGuide";
import BuyOrRent from "./components/rent/buyorrent/BuyOrRent";
import RentTrends from "./components/rent/renttrends/RentTrends";
import TipsForRenters from "./components/rent/tipsforrenters/TipsForRenters"
import Contact from "./components/utils/Contact";
import Searchpage from "./components/buy/searchpage/Searchpage";
import PropertyDetails from "./components/buy/propertyDetails/PropertyDetails";
import UpcomingEvents from "./components/resources/findevents/upcomingevents/UpcomingEvents"
import AddOffer from "./components/AddOffer/AddOffer";
import { Account } from "./components/Account";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'


const App = () => {

  return (
    <Account>
      <Nav/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-new-offer" element={<AddOffer />} />
        <Route path="/search/:id" element={<PropertyDetails />} />
        <Route path="/house-nearby" element={<HouseNearby />} />
        <Route path="/home-nearby" element={<HomeNearby />} />
        <Route path="/land-nearby" element={<LandNearby />} />
        <Route path="/why-buy" element={<WhyBuy />} />
        <Route path="/can-i-afford" element={<CanIAfford />} />
        <Route path="/guides/:isBuyProps" element={<BuyGuide />} />
        <Route path="/guides/how-to-buy-a-house" element={<BuyInSteps/>}/>
        <Route path="/guides/how-to-choose-real-estate-agent" element={<ChooseAgent/>}/>
        <Route path="/guides/real-estate-commision" element={<Commision/>}/>
        <Route path="find-lender" element={<FindLender />} />
        <Route path="/find-agent" element={<FindAgent />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route path="/housing-market" element={<HouseMarket />} />
        <Route path="/search" element={<Searchpage/>}/>
        <Route path="/sell" element={<SellHouse/>} />
        <Route path="/upcoming-events" element={<UpcomingEvents/>}></Route>
        <Route path="/sell/how-much-is-it-worth" element={<SellWorth />} />
        <Route path="/sell/dashboard" element={<SellDashboard />} />
        <Route path="/guides/will-selling-pay-off" element={<PayOff />} />
        <Route path="/guide/how-to-sell-a-house" element={<SellGuide />} />
        <Route path="/guides/home-improvement" element={<HomeImprovement />} />
        <Route path="/guides/how-to-rent-a-house" element={<RentGuide />} />
        <Route path="/guides/buy-or-rent" element={<BuyOrRent />} />
        <Route path="/guides/rent-trends"  element={<RentTrends />} />
        <Route path="/guides/tips-for-renters" element={<TipsForRenters />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Account>
  );
};

export default App;
