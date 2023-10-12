import "./premium.scss";
import SmallContact from "../utils/SmallContact";
import i18next from "i18next";

export default function Premium() {
  const t= i18next.t;
  return (
    <>
      <div className="premium-header">
        <h1>{t("premium:realn-premium")}</h1>
        <h3>
        {t("premium:highest-level-of-service")}
        </h3>
      </div>
      <div className="premium-search__box">
        <div className="premium-search__text">
          <h3>{t("premium:local-luxury")}</h3>
          <p>
          {t("premium:thanks-premium")}
          </p>
        </div>
    <div className="premium-search__input">
        <input />
        <button>{t("premium:search")}</button>
        </div>
      </div>

      <SmallContact />
    </>
  );
}
