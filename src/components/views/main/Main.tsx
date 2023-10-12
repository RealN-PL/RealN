import  { useState } from "react";
import "./main.scss";
import EstateSlider from "../utils/EstateSlider";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import pic2 from "../../../goodimages/back6.webp";
import pic5 from "../../../goodimages/back3.jpg";
import SmallContact from "../utils/SmallContact";
import i18next from 'i18n';

const Main = () => {
  const t = i18next.t;
  const [isBuyActive, setIsBuyActive] = useState(true);
  const [isLendActive, setIsLendActive] = useState(false);
  const [isSellActive, setIsSellActive] = useState(false);
  return (
    <>
      <div className="main-header">
        <header className="main-head-box">
          <h1>
            {t("main:technology-driven")}
            <br /> {t("main:from-real-estate")}
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
              {t("main:buy")}
            </li>
            <li
              className={isLendActive ? "choice-active" : ""}
              onClick={(e) => {
                setIsBuyActive(false);
                setIsLendActive(true);
                setIsSellActive(false);
              }}
            >
              {t("main:rent")}
            </li>
            <li
              className={isSellActive ? "choice-active" : ""}
              onClick={(e) => {
                setIsBuyActive(false);
                setIsLendActive(false);
                setIsSellActive(true);
              }}
            >
              {t("main:sell")}
            </li>
          </ul>
          <div className="input-holder">
            <input
              type="text"
              placeholder={t("main:city-address-code")}
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
            {t("main:sell-apartments")} <br />
            {t("main:quickly-and-conveniently")}
            </h1>
            <p>
            {t("main:agents-help-you")}
              <br /> {t("main:start-from")}
            </p>
            <aside className="main-top-searcher-box">
              <input type="text" placeholder={t("main:enter-email")}></input>
              <p>{t("main:next")}</p>
            </aside>
          </aside>
        </article>
        <article className="main-first">
          <aside>
            <h1>
            {t("main:dream-apartment")} <br /> {t("main:awaits")}
            </h1>
            <p>{t("main:find-own-corner")}</p>
            <aside className="main-top-searcher-box">
              <input
                type="text"
                placeholder={t("main:city-address-code")}
              ></input>
              <HiOutlineMagnifyingGlass className="main-glass-icon" />
            </aside>
          </aside>
          <img src={pic2} alt="home for rent"></img>
        </article>
      </article>
      <article className="slider-title">
        <h1> {t("main:check-apartments")}:</h1>
      </article>
      <EstateSlider />

      <SmallContact />
    </>
  );
};

export default Main;
