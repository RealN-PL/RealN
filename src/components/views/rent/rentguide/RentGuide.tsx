import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import rent from "../../../../images/icons/buyhouse.png";
import "./rentguide.scss";
import { Link } from "react-router-dom";
import SmallContact from "../../utils/SmallContact";
import EstateSlider from "../../utils/EstateSlider";
import i18next from "i18n";

const RentGuide = () => {
  const t = i18next.t;
  return (
    <>
      <div className="rentguide__header">
        <div>
          <h1>{t("rent:find-ideal-house")}</h1>
          <h3>
            {t("rent:realn-is-specialist")}
          </h3>
        </div>
        <img src={rent} alt="rent"></img>
      </div>
      <div className="rentguide-why__container">
        <h1>{t("rent:why-is-worth")}</h1>
        <div className="rentguide-why__gridbox">
          <div className="div1">
            <img src={rent} alt="rent"></img>
            <h1>{t("rent:best-offers")}</h1>
            <p>
              {t("rent:extensive-database")}
            </p>
          </div>
          <div className="div2">
            <img src={rent} alt="rent"></img>
            <h1>{t("rent:professional-advice")}</h1>
            <p>
              {t("rent:experienced-real-agents")}
            </p>
          </div>
          <div className="div3">
            <img src={rent} alt="rent"></img>
            <h1>{t("rent:efficient-procedures")}</h1>
            <p>
              {t("rent:highest-standarts")}
            </p>
          </div>
          <div className="div4">
            <img src={rent} alt="rent"></img>
            <h1>{t("rent:reliability-and-trust")}</h1>
            <p>
              {t("rent:our-company-reliability")}
            </p>
          </div>
          <div className="div5">
            <img src={rent} alt="rent"></img>
            <h1>{t("rent:individual-approach")}</h1>
            <p>
              {t("rent:we-are-flexible")}
            </p>
          </div>
        </div>
      </div>
      <div className="rentguide-art">
        <div className="rentguide-art__textbox">
          <h3>
            {t("rent:dont-waste-time")}
          </h3>
          <h4>{t("rent:find-ideal-house")}</h4>
          <aside className="input-holder">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <HiOutlineMagnifyingGlass className="main-glass-icon" />
          </aside>
        </div>
        <img src={rent} alt="rent"></img>
      </div>
      <div className="rentguide-art__more">
        <h3>{t("rent:more-materials")}</h3>
        <div className="rentguide-art__flexbox">
          <Link to="/guides/tips-for-renters">
            <div>
              <img src={rent} alt="rent"></img>
              <h4>{t("rent:advices")}</h4>
              <p>{t("rent:next")}...</p>
            </div>
          </Link>
          <h3>
            {t("rent:regardless")}
          </h3>
        </div>
      </div>
      <EstateSlider/>
      <SmallContact/>
    </>
  );
};

export default RentGuide;
