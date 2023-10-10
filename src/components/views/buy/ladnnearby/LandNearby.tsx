import "./landnearby.scss";
import landbg from "../../../../images/icons/landbg.png";
import EstateSlider from "../../utils/EstateSlider";
import i18next from 'i18n';
import { Link } from "react-router-dom";
const LandNearby = () => {
  const t = i18next.t;
  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>{t("buy:find-land")}</h1>
          <p>
            {t("buy:check-land-offers")}
          </p>
        </article>
        <img src={landbg} alt="buy land background"></img>
      </header>
      <article className="search-bar">
        <div className="search-location">
          <p>{t("buy:location")}</p>

          <input type="text" placeholder={t("buy:city-address-code")}></input>
        </div>
        <div className="search-price">
          <p>{t("buy:price-range")}</p>
          <div className="price-box"> 
          <input type="number" placeholder={t("buy:min-price")}></input>
          <input type="number" placeholder={t("buy:max-price")}></input>
        </div></div>
        <Link to ="/search">  <button type="button"> {t("buy:search")}</button></Link>
      </article>
      <article className="houses-container">
        <h1>{t("buy:gdansk-land")}</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>{t("buy:gdynia-land")}</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>{t("buy:sopot-land")}</h1>
        <EstateSlider />
      </article>
    </>
  );
};

export default LandNearby;
