import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import i18next from 'i18n';

interface Props {
  menuControl: any;
  menuActive: boolean;
}

export default function MobileMenu({ menuControl, menuActive }: Props) {
  const t = i18next.t;
  const [isBuyActive, setIsBuyActive] = useState(false);
  const [isSellActive, setIsSellActive] = useState(false);
  const [isRentActive, setIsRentActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
      transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
      className="mobile-menu"
    >
      <li>
        <Link to="/contact" onClick={() => menuControl()}>
          {t("main:contact")}
        </Link>
      </li>
      <li
        onClick={(e) => {
          setIsBuyActive(!isBuyActive);
          setIsSellActive(false);
          setIsRentActive(false);
        }}
      >
        {t("main:buy")}
      </li>
      {isBuyActive && (
        <motion.div className="submenu"  initial={{ opacity: 0, y: -20 }}
        animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
        transition={{  delayChildren: 0.2 }}>
          <Link to="/house-nearby" onClick={() => menuControl()}>
            {t("nav:search-for-a-house")}
          </Link>
          <Link to="/home-nearby" onClick={() => menuControl()}>
            {t("nav:search-for-an-apartment")}
          </Link>
          <Link to="/land-nearby" onClick={() => menuControl()}>
            {t("nav:search-for-ground")}
          </Link>
          <Link to="/why-buy" onClick={() => menuControl()}>
            {t("nav:buy-with-realn")}
          </Link>
          <Link to="/can-i-afford" onClick={() => menuControl()}>
            {t("nav:check-budget")}
          </Link>
          <Link to="/guides/buy" onClick={() => menuControl()}>
            {t("nav:home-buying-guide")}
          </Link>
          <Link to="/find-lender" onClick={() => menuControl()}>
            {t("nav:search-loan-agent")}
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
            {t("nav:search-appraiser")}
          </Link>
          <Link to="/find-events" onClick={() => menuControl()}>
            {t("nav:search-for-worshop-events")}
          </Link>
          <Link to="/housing-market" onClick={() => menuControl()}>
            {t("nav:overview")}
          </Link>
        </motion.div>
      )}
      <li
        onClick={(e) => {
          setIsBuyActive(false);
          setIsSellActive(!isSellActive);
          setIsRentActive(false);
        }}
      >
        Sprzedaż
      </li>
      {isSellActive && (
        <motion.div className="submenu"  initial={{ opacity: 0, y: -20 }}
        animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
        transition={{  delayChildren: 0.2 }}>
          <Link to="/sell/how-much-is-it-worth" onClick={() => menuControl()}>
            {t("nav:house-worth")}
          </Link>
          {/* <Link to="/sell/dashboard" onClick={() => menuControl()}>
            Przegląd mojej nieruchomości
          </Link> */}
          <Link to="/why-buy" onClick={() => menuControl()}>
            {t("nav:sell-with-realn")}
          </Link>
          <Link to="/home-nearby" onClick={() => menuControl()}>
            {t("nav:compare-offers")}
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
          {t("nav:find-agent")}
          </Link>
          <Link to="/guides/will-selling-pay-off" onClick={() => menuControl()}>
            {t("nav:sale-profitable")}
          </Link>
          <Link to="/guides/sell" onClick={() => menuControl()}>
            {t("nav:selling-guide")}
          </Link>
          <Link to="/guides/home-improvement" onClick={() => menuControl()}>
            {t("nav:how-increase-property-value")}
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
          {t("nav:search-appraiser")}
          </Link>
        </motion.div>
      )}
      <li
        onClick={(e) => {
          setIsBuyActive(false);
          setIsSellActive(false);
          setIsRentActive(!isRentActive);
        }}
      >
        {t("nav:rent")}
      </li>
      {isRentActive && (
        <motion.div className="submenu"  initial={{ opacity: 0, y: -20 }}
        animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
        transition={{  delayChildren: 0.2 }}>
          <Link to="/home-nearby" onClick={() => menuControl()}>
           {t("nav:apartments-for-rent")}
          </Link>

          <Link to="/guides/how-to-rent-a-house" onClick={() => menuControl()}>
            {t("nav:rent-my-property")}
          </Link>
          <Link to="/guides/buy-or-rent" onClick={() => menuControl()}>
            {t("nav:buying-or-renting")}
          </Link>
          <Link to="/guides/rent-trends" onClick={() => menuControl()}>
            {t("nav:market-trends")}
          </Link>
          <Link to="/guides/tips-for-renters" onClick={() => menuControl()}>
            {t("nav:tips-for-tenants")}
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
