import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import SmallContact from "../../utils/SmallContact";
import homebg from "../../../../images/icons/homebg.png";
import i18next from "i18n";

export default function HomeValue() {
  const t = i18next.t;
  return (
    <>
      <div className="homevalue__header">
        <h1>{t("sell:how-calculate")}</h1>
        <span></span>
      </div>
      <div className="homevalue_flexbox">
        <div className="homevalue__box">
          <h2>
            {t("sell:to-calculate")}
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
      <SmallContact />
    </>
  );
}
