import "./housenearby.scss";
import housebg from "../../../../images/icons/buyhouse.png";
import EstateSlider from "../../utils/EstateSlider";
import { Link } from "react-router-dom";
import i18next from 'i18n';

const HouseNearby = () => {
  const t = i18next.t;
  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>{t("buy:house-in-area")}</h1>
          <p>{t("buy:find-the-right-house")}</p>
        </article>
        <img src={housebg} alt="buy house background"></img>
      </header>
      <article className="search-bar">
        <div className="search-location">
          <p>{t("buy:location")}</p>

          <input type="text" placeholder={t("buy:min-city-address-code")}></input>
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
        <h1>{t("buy:gdansk-houses")}</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>{t("buy:gdynia-houses")}</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>{t("buy:sopot-houses")}</h1>
        <EstateSlider />
      </article>
    </>
  );
};

export default HouseNearby;
