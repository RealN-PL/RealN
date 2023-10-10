import SmallContact from "../../utils/SmallContact";
import homebg from "../../../../images/icons/homebg.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "../../nav/nav.scss";
import "./sellworth.scss";
import { Link } from "react-router-dom";
import i18next from "i18n";

const SellWorth = () => {
  const t = i18next.t;

  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>{t("sell:how-much-is-my-house")}</h1>
          <p>{t("sell:view-nearby-sales")}</p>

          <aside className="input-holder">
            <input
              type="text"
              placeholder={t("buy:city-address-code")}
            ></input>
            <HiOutlineMagnifyingGlass className="main-glass-icon" />
          </aside>
        </article>
        <img src={homebg} alt="buy home background"></img>
      </header>

      <div className="sellworth__container">
        <article className="sellworth-grid">
          <div className="sellworth-grid__box1">
            <h1>{t("buy:accurate-valuation")}</h1>
            <p>
            {t("buy:to-count-realn")}
            </p>
          </div>
          <div className="sellworth-grid__box2">
            <h3>{t("buy:track-home-value")}</h3>
            <p>
            {t("buy:know-value-instantly")}
            </p>
          </div>
          <div className="sellworth-grid__box3">
            <h3>{t("buy:see-local-trends")}</h3>
            <p>
              {t("buy:stay-up-to-date")}
            </p>
          </div>
          <div className="sellworth-grid__box4">
            <h3>{t("buy:get-a-free-report")}</h3>
            <p>
            {t("buy:receive-monthly-email-updates")}
            </p>
          </div>
        </article>
      </div>

      <h1 className="sellworth__subtitle">
        {t("buy:more-resources")}
      </h1>
      <div className="sellworth-grid__container">
        <Link to="/sell/how-much-is-it-worth/find-the-value">
          {" "}
          <div className="box1">
            <img src={homebg} alt="home"></img>
            <h3>{t("buy:how-calculate")}</h3>
            <p>{t("sell:continue")}</p>
          </div>
        </Link>
        <Link to="/sell/how-much-is-it-worth/five-ways">
          {" "}
          <div className="box2">
            <img src={homebg} alt="home"></img>
            <h3>
              {t("sell:five-ways")}
            </h3>
            <p>{t("sell:continue")}</p>
          </div>
        </Link>
        <Link to="/sell/how-much-is-it-worth/ten-advices">
          {" "}
          <div className="box3">
            <img src={homebg} alt="home"></img>
            <h3>
              {t("buy:10-amazing-tips")}
            </h3>
            <p>{t("sell:continue")}</p>
          </div>
        </Link>
      </div>
      <SmallContact />
    </>
  );
};

export default SellWorth;
