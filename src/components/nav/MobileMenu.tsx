import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  menuControl: any;
  menuActive: boolean;
}

export default function MobileMenu({ menuControl, menuActive }: Props) {
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
          Kontakt
        </Link>
      </li>
      <li
        onClick={(e) => {
          setIsBuyActive(!isBuyActive);
          setIsSellActive(false);
          setIsRentActive(false);
        }}
      >
        Kup
      </li>
      {isBuyActive && (
        <motion.div className="submenu"  initial={{ opacity: 0, y: -20 }}
        animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
        transition={{  delayChildren: 0.2 }}>
          <Link to="/house-nearby" onClick={() => menuControl()}>
            Szukaj domu
          </Link>
          <Link to="/home-nearby" onClick={() => menuControl()}>
            Szukaj mieszkania
          </Link>
          <Link to="/land-nearby" onClick={() => menuControl()}>
            Szukaj gruntu
          </Link>
          <Link to="/why-buy" onClick={() => menuControl()}>
            Kup z RealN
          </Link>
          <Link to="/can-i-afford" onClick={() => menuControl()}>
            Sprawdź budżet
          </Link>
          <Link to="/guides/buy" onClick={() => menuControl()}>
            Przewodnik kupna domu
          </Link>
          <Link to="/find-lender" onClick={() => menuControl()}>
            Szukaj agenta pożyczkowego
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
            Szukaj rzeczoznawcę nieruchomości
          </Link>
          <Link to="/find-events" onClick={() => menuControl()}>
            Szukaj warsztaty i eventy
          </Link>
          <Link to="/housing-market" onClick={() => menuControl()}>
            Przegląd rynku mieszkaniowego w Polsce
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
            Ile warty jest mój dom?
          </Link>
          <Link to="/sell/dashboard" onClick={() => menuControl()}>
            Przegląd mojej nieruchomości
          </Link>
          <Link to="/why-buy" onClick={() => menuControl()}>
            Sprzedaj z RealN
          </Link>
          <Link to="/home-nearby" onClick={() => menuControl()}>
            Porównaj oferty
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
            Znajdź agenta
          </Link>
          <Link to="/guides/will-selling-pay-off" onClick={() => menuControl()}>
            Czy sprzedaż się opłaci?
          </Link>
          <Link to="/guides/sell" onClick={() => menuControl()}>
            Przewodnik sprzedaży domu
          </Link>
          <Link to="/guides/home-improvement" onClick={() => menuControl()}>
            Jak zwiększyć wartość nieruchomości
          </Link>
          <Link to="/find-agent" onClick={() => menuControl()}>
            Szukaj rzeczoznawcę nieruchomości
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
        Wynajem
      </li>
      {isRentActive && (
        <motion.div className="submenu"  initial={{ opacity: 0, y: -20 }}
        animate={menuActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: -20 }}
        transition={{  delayChildren: 0.2 }}>
          <Link to="/home-nearby" onClick={() => menuControl()}>
            Mieszkania na wynajem
          </Link>

          <Link to="/guides/how-to-rent-a-house" onClick={() => menuControl()}>
            Chcę wynająć swoje mieszkanie.
          </Link>
          <Link to="/guides/buy-or-rent" onClick={() => menuControl()}>
            Kupno czy wynajem?
          </Link>
          <Link to="/guides/rent-trends" onClick={() => menuControl()}>
            Trendy rynku wynajmu
          </Link>
          <Link to="/guides/tips-for-renters" onClick={() => menuControl()}>
            Wskazówki dla najemców
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
