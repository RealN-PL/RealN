import i18next from "i18n";
import "./tipsforrenters.scss";
import { Link } from "react-router-dom";

const TipsForRenters = () => {
  const t = i18next.t;
  return (
    <article>
      <div className="tips-head">
        <h1>
          {t("rent:advices")}
        </h1>
      </div>
      <article className="tips-text">
        <h2>
          {t("rent:regardless")}
        </h2>
        <h1>{t("rent:choose-right-place")}</h1>
        <p>
          {t("rent:choose-right-place-text")}
        </p>
        <h1>{t("rent:set-a-budget")}</h1>
        <p>
          {t("rent:determine-budget")}
        </p>

        <h1>{t("rent:rental-agreement")}</h1>
        <p>
          {t("rent:rental-agreement-text")}
        </p>

        <h1>{t("rent:document")}</h1>
        <p>
        {t("rent:document-text")}
        </p>

        <h1>{t("rent:payments-deadlines")}</h1>
        <p>
        {t("rent:payments-deadlines-text")}
        </p>

        <h1>{t("rent:report-breakdowns")}</h1>
        <p>
        {t("rent:report-breakdowns-text")}
        </p>
        <h1>{t("rent:stay-organized")}</h1>
        <p>
        {t("rent:stay-organized-text")}
        </p>

        <h1>{t("rent:dispute-resolution")}</h1>
        <p>
        {t("rent:dispute-resolution-text")}
        </p>

        <h3>
          {t("rent:remember")}
        </h3>
      </article>
      <article className="articles-box">
        <h2>{t("rent:check-apartments")}</h2>
        <div>
          <Link to="/guides/how-to-rent-a-house">
            <div>
              <h2>{t("rent:rent")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
          <Link to="/guides/rent-trends">
            <div>
              <h2>{t("nav:market-trends")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
          <Link to="/guides/buy-or-rent">
            <div>
              <h2>{t("rent:buying-or-renting")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
        </div>
      </article>
    </article>
  );
};

export default TipsForRenters;
