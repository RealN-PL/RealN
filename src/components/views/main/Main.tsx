import  { useState } from "react";
import "./main.scss";
import EstateSlider from "../utils/EstateSlider";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import pic2 from "../../../goodimages/back6.webp";
import pic5 from "../../../goodimages/back3.jpg";
import SmallContact from "../utils/SmallContact";
const Main = () => {
  const [isBuyActive, setIsBuyActive] = useState(true);
  const [isLendActive, setIsLendActive] = useState(false);
  const [isSellActive, setIsSellActive] = useState(false);
  return (
    <>
      <div className="main-header">
        <header className="main-head-box">
          <h1>
            Napędzana technologią najskuteczniejsza platforma
            <br /> z branży nieruchomości.
          </h1>
          <ul className="main-head-choice">
            <li
              className={isBuyActive ? "choice-active" : ""}
              onClick={(e) => {
                setIsBuyActive(true);
                setIsLendActive(false);
                setIsSellActive(false);
              }}
            >
              Kup
            </li>
            <li
              className={isLendActive ? "choice-active" : ""}
              onClick={(e) => {
                setIsBuyActive(false);
                setIsLendActive(true);
                setIsSellActive(false);
              }}
            >
              Wynajmij
            </li>
            <li
              className={isSellActive ? "choice-active" : ""}
              onClick={(e) => {
                setIsBuyActive(false);
                setIsLendActive(false);
                setIsSellActive(true);
              }}
            >
              Sprzedaj
            </li>
          </ul>
          <div className="input-holder">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <HiOutlineMagnifyingGlass className="main-glass-icon" />
          </div>{" "}
        </header>
      </div>
      <article className="main-page">
        <article className="main-first">
          <img src={pic5} alt="home for sell"></img>
          <aside>
            <h1>
              Sprzedawaj mieszkania <br />
              szybko i wygodnie
            </h1>
            <p>
              Agenci RealN pomogą Ci wycenić nieruchomość.
              <br /> Zacznij od darmowej konsultacji.
            </p>
            <aside className="main-top-searcher-box">
              <input type="text" placeholder="Podaj swój adres email"></input>
              <p>Dalej</p>
            </aside>
          </aside>
        </article>
        <article className="main-first">
          <aside>
            <h1>
              Twoje wymarzone mieszkanie <br /> już tu czeka!
            </h1>
            <p>Znajdź własny kąt korzystając z naszej wyszukiwarki</p>
            <aside className="main-top-searcher-box">
              <input
                type="text"
                placeholder="Miasto, adres, kod pocztowy"
              ></input>
              <HiOutlineMagnifyingGlass className="main-glass-icon" />
            </aside>
          </aside>
          <img src={pic2} alt="home for rent"></img>
        </article>
      </article>
      <article className="slider-title">
        <h1> Sprawdź mieszkania w okolicy:</h1>
      </article>
      <EstateSlider />

      <SmallContact />
    </>
  );
};

export default Main;
