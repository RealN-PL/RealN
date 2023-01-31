import React, { useContext, useState } from "react";
import Login from "../LoginRegister/Login";
import Signup from "../LoginRegister/Signup";
import { Link } from "react-router-dom";
import logo from "../../images/logorealn.png";
import Status from "../Status";

import "./nav.scss";
import { AccountContext } from "../Account";

const Nav = () => {
  const [isBuyActive, setIsBuyActive] = useState(false);
  const [isSellActive, setIsSellActive] = useState(false);
  const [isRentActive, setIsRentActive] = useState(false);
  const { status } = useContext(AccountContext);
  return (
    <nav>
      <Link to="/">
        {" "}
        <img src={logo} alt="logo"></img>
      </Link>
      <ul className="nav-bar">
        <li>500-000-000</li>
        <li
          onMouseEnter={(e) => {
            setIsBuyActive(true);
            setIsSellActive(false);
            setIsRentActive(false);
          }}
        >
          Kup
        </li>
        {isBuyActive && (
          <div className="buy-drop" onMouseLeave={(e) => setIsBuyActive(false)}>
            <h3 className="header1">Popularne</h3>
            <Link to="/house-nearby" className="buy-drop1">
              Szukaj domu
            </Link>
            <Link to="/home-nearby" className="buy-drop2">
              Szukaj mieszkania
            </Link>
            <Link to="/land-nearby" className="buy-drop3">
              Szukaj gruntu
            </Link>
            <h3 className="header2">Opcje kupna</h3>
            <Link to="/why-buy" className="buy-drop4">
              Kup z RealN
            </Link>
            <h3 className="header3">Środki na zakupy</h3>
            <Link to="/can-i-afford" className="buy-drop5">
              Sprawdź budżet
            </Link>
            <Link to="/guides/buy" className="buy-drop6">
              Przewodnik kupna domu
            </Link>
            <Link to="/find-lender" className="buy-drop7">
              Szukaj agenta pożyczkowego
            </Link>
            <Link to="/find-agent" className="buy-drop8">
              Szukaj rzeczoznawcę nieruchomości
            </Link>
            <Link to="/find-events" className="buy-drop9">
              Szukaj warsztaty i eventy
            </Link>
            <Link to="/housing-market" className="buy-drop10">
              Przegląd rynku mieszkaniowego w Polsce
            </Link>
          </div>
        )}
        <li
          onMouseEnter={(e) => {
            setIsSellActive(true);
            setIsBuyActive(false);
            setIsRentActive(false);
          }}
        >
          Sprzedaż
        </li>
        {isSellActive && (
          <div
            className="sell-drop"
            onMouseLeave={(e) => setIsSellActive(false)}
          >
            <h3 className="sell-drop1">Mój dom</h3>
            <Link to="/sell/how-much-is-it-worth" className="sell-drop2">
              Ile warty jest mój dom?
            </Link>
            <Link to="/sell/dashboard" className="sell-drop3">
              Przegląd mojej nieruchomości
            </Link>
            <h3 className="sell-drop4">Opcje sprzedaży</h3>
            <Link to="/why-buy" className="sell-drop5">
              Sprzedaj z RealN
            </Link>
            <Link to="/home-nearby" className="sell-drop6">
              Porównaj oferty
            </Link>
            <Link to="/find-agent" className="sell-drop7">
              Znajdź agenta
            </Link>
            <h3 className="sell-drop8">Baza wiedzy</h3>
            <Link to="/guides/will-selling-pay-off" className="sell-drop9">
              Czy sprzedaż się opłaci?
            </Link>
            <Link to="/guides/sell" className="sell-drop110">
              Przewodnik sprzedaży domu
            </Link>
            <Link to="/guides/home-improvement" className="sell-drop11">
              Jak zwiększyć wartość nieruchomości
            </Link>
            <Link to="/find-agent" className="sell-drop12">
              Szukaj rzeczoznawcę nieruchomości
            </Link>
          </div>
        )}
        <li
          onMouseEnter={(e) => {
            setIsRentActive(true);
            setIsSellActive(false);
            setIsBuyActive(false);
          }}
        >
          Wynajem
        </li>
        {isRentActive && (
          <div
            className="rent-drop"
            onMouseLeave={(e) => setIsRentActive(false)}
          >
            <h3 className="rent-drop1">Wyszukiwanie</h3>
            <Link to="/home-nearby" className="rent-drop2">
              Mieszkania na wynajem
            </Link>
            <Link to="/house-nearby" className="rent-drop3">
              Nieruchomości na wynajem{" "}
            </Link>

            <h3 className="rent-drop4">Baza wiedzy</h3>
            <Link to="/guides/how-to-rent-a-house" className="rent-drop5">
              Chcę wynająć swoje mieszkanie.{" "}
            </Link>
            <Link to="/guides/buy-or-rent" className="rent-drop6">
              Kupno czy wynajem?{" "}
            </Link>
            <Link to="/guides/rent-trends" className="rent-drop7">
              Trendy rynku wynajmu{" "}
            </Link>
            <Link to="/guides/tips-for-renters" className="rent-drop8">
              Wskazówki dla najemców{" "}
            </Link>
          </div>
        )}
        <Link to="/contact" className="contact-link">
          Kontakt
        </Link>
        <ul className="nav-login-bar">
          {status && (
            <li>
              <Link to="/add-new-offer">Dodaj ofertę</Link>
            </li>
          )}
          <Login />
          <Signup />
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
