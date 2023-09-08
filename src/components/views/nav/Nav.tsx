import { useState } from "react";
import Login from "../LoginRegister/Login";
import Signup from "../LoginRegister/Signup";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../images/logorealn.png";
import logo2 from "../../../images/logo2.jpg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./nav.scss";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import Logout from "../LoginRegister/Logout";
import { setPage } from "../../store/utilitySlice";

const Nav = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const [isBuyActive, setIsBuyActive] = useState(false);
  const [isSellActive, setIsSellActive] = useState(false);
  const [isRentActive, setIsRentActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  function menuControl() {
    setMenuActive(false);
  }
  const location = useLocation();

  return (
    <nav className={location.pathname === "/" ? "" : "nav2"}>
      <aside className="nav-searcher-box">
        <Link to="/">
          <img src={location.pathname === "/" ? logo : logo2} alt="logo"></img>
        </Link>
        {location.pathname === "/" ? (
          <>{user && <p className="nav-user__greeting">Witaj {user[1]}</p>}</>
        ) : (
          <div className="desktop">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <Link to="/search">
              <HiOutlineMagnifyingGlass className="nav-glass-icon" />
            </Link>
          </div>
        )}
      </aside>

      <ul
        className={location.pathname === "/" ? "nav-bar" : "nav-bar nav-bar2"}
      >
        <div className="nav-bar desktop">
          <li className="phone-box">500-000-000</li>
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="buy-drop"
              onMouseLeave={(e) => setIsBuyActive(false)}
            >
              <h3 className="header1">Popularne</h3>
              <Link
                to="/house-nearby"
                className="buy-drop1"
                onClick={() => menuControl()}
              >
                Szukaj domu
              </Link>
              <Link
                to="/home-nearby"
                className="buy-drop2"
                onClick={() => menuControl()}
              >
                Szukaj mieszkania
              </Link>
              <Link
                to="/land-nearby"
                className="buy-drop3"
                onClick={() => menuControl()}
              >
                Szukaj gruntu
              </Link>
              <h3 className="header2">Opcje kupna</h3>
              <Link
                to="/why-buy"
                className="buy-drop4"
                onClick={() => menuControl()}
              >
                Kup z RealN
              </Link>
              <h3 className="header3">Środki na zakupy</h3>
              <Link
                to="/can-i-afford"
                className="buy-drop5"
                onClick={() => menuControl()}
              >
                Sprawdź budżet
              </Link>
              <Link
                to="/guides"
                className="buy-drop6"
                onClick={() => {
                  menuControl();
                  dispatch(setPage("buy"));
                }}
              >
                Przewodnik kupna domu
              </Link>
              {/* <Link to="/find-services" className="buy-drop7"onClick={() => menuControl()}>
                Szukaj firmy i usługi
              </Link> */}
              <Link
                to="/find-events"
                className="buy-drop7"
                onClick={() => menuControl()}
              >
                Szukaj warsztaty i eventy
              </Link>
              <a
                href="https://nbp.pl/publikacje/cykliczne-materialy-analityczne-nbp/rynek-nieruchomosci/informacja-kwartalna/"
                className="buy-drop8"
              >
                Przegląd rynku mieszkaniowego w Polsce
              </a>
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="sell-drop"
              onMouseLeave={(e) => setIsSellActive(false)}
            >
              <h3 className="sell-drop1">Mój dom</h3>
              <Link
                to="/sell/how-much-is-it-worth"
                className="sell-drop2"
                onClick={() => menuControl()}
              >
                Ile warty jest mój dom?
              </Link>
              {/* <Link to="/sell/dashboard" className="sell-drop3"onClick={() => menuControl()}>
                Przegląd mojej nieruchomości
              </Link> */}
              <h3 className="sell-drop4">Opcje sprzedaży</h3>
              <Link
                to="/sell"
                className="sell-drop5"
                onClick={() => menuControl()}
              >
                Sprzedaj z RealN
              </Link>
              <Link
                to="/home-nearby"
                className="sell-drop6"
                onClick={() => menuControl()}
              >
                Porównaj oferty
              </Link>

              <h3 className="sell-drop8">Baza wiedzy</h3>
              <Link
                to="/guides/will-selling-pay-off"
                className="sell-drop9"
                onClick={() => menuControl()}
              >
                Czy sprzedaż się opłaci?
              </Link>

              <Link
                to="/guides"
                className="buy-drop6"
                onClick={() => {
                  menuControl();
                  dispatch(setPage("sell"));
                }}
              >
                Przewodnik sprzedaży domu
              </Link>
              <Link
                to="/sell/how-much-is-it-worth/ten-advices"
                className="sell-drop11"
                onClick={() => menuControl()}
              >
                Jak zwiększyć wartość nieruchomości
              </Link>
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rent-drop"
              onMouseLeave={(e) => setIsRentActive(false)}
            >
              <h3 className="rent-drop1">Wyszukiwanie</h3>
              <Link
                to="/home-nearby"
                className="rent-drop2"
                onClick={() => menuControl()}
              >
                Mieszkania na wynajem
              </Link>
              <Link
                to="/house-nearby"
                className="rent-drop3"
                onClick={() => menuControl()}
              >
                Nieruchomości na wynajem
              </Link>

              <h3 className="rent-drop4">Baza wiedzy</h3>
              <Link
                to="/guides/how-to-rent-a-house"
                className="rent-drop5"
                onClick={() => menuControl()}
              >
                Chcę wynająć swoją nieruchomość.
              </Link>
              <Link
                to="/guides/buy-or-rent"
                className="rent-drop6"
                onClick={() => menuControl()}
              >
                Kupno czy wynajem?
              </Link>
              <Link
                to="/guides/rent-trends"
                className="rent-drop7"
                onClick={() => menuControl()}
              >
                Trendy rynku wynajmu
              </Link>
              <Link
                to="/guides/tips-for-renters"
                className="rent-drop8"
                onClick={() => menuControl()}
              >
                Wskazówki dla najemców
              </Link>
            </motion.div>
          )}
          <Link to="/realn-premium" className="contact-link premium">
            RealN Premium
          </Link>
          <Link to="/contact" className="contact-link">
            Kontakt
          </Link>
        </div>
        <ul
          className={
            location.pathname === "/"
              ? "nav-login-bar"
              : "nav-login-bar nav-login-bar2"
          }
        >
          {user && (
            <div className="nav-user">
              <div>
                <Link to="catalog">
                  <li>Katalog Ofert</li>
                </Link>
                <Link to="/add-new-offer">
                  <li>Dodaj ofertę</li>
                </Link>
                <Logout />
              </div>
            </div>
          )}

          <li className="mobile" onClick={() => setMenuActive(!menuActive)}>
            {!menuActive ? <AiOutlineMenu /> : <RxCross1 />}
          </li>
          {!user && (
            <>
              <Login />
              <Signup />
            </>
          )}
        </ul>
      </ul>

      {menuActive && (
        <MobileMenu menuControl={menuControl} menuActive={menuActive} />
      )}
    </nav>
  );
};

export default Nav;
