import i18next from "i18n";
import SmallContact from "../../utils/SmallContact";

export default function FiveWays() {
  const t = i18next.t;
  return (
    <>
      <div className="fiveways__header">
        <h1>
          {t("sell:five-ways")}
        </h1>
        <span></span>
      </div>
      <div className="homevalue_flexbox">
        <div className="homevalue__box">
          <h2>
            {t("sell:finding-comparable")}
          </h2>
          <ul>
            <li>
              <h3>{t("sell:web-search-tools")}</h3>
              <p>
                {t("sell:conduct-market-reasearch")}
              </p>
            </li>
            <li>
              <h3>{t("sell:estimate-transaction-costs")}</h3>
              <p>
                {t("sell:determine-costs")}
              </p>
            </li>
            <li>
              <h3>{t("sell:net-balance-calculation")}</h3>
              <p>
                {t("sell:substract-transaction-costs")}
              </p>
            </li>
            <li>
              <h3>{t("sell:consider-other-factors")}</h3>
              <p>
                {t("sell:when-calculating-the-profit")}
              </p>
            </li>
          </ul>
          <h4>
            {t("sell:worth-it")}
          </h4>
        </div>
      </div>
      <SmallContact />{" "}
    </>
  );
}
