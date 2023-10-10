import SmallContact from "../../utils/SmallContact";
import i18next from "i18n";

export default function TenAdvices() {
  const t = i18next.t;

  return (
    <>
      <div className="tenadvices__header">
        <h1>
          {t("buy:10-amazing-tips")}
        </h1>
      </div>
      <div className="homevalue_flexbox">
        <div className="homevalue__box">
          <h2>
            {t("buy:10-amazing-tips-header")}
          </h2>
          <ul>
            <li>
              <h3>{t("buy:prepare-house-to-sell")}</h3>
              <p>
                {t("buy:keep-clean")}
              </p>
            </li>
            <li>
              <h3>{t("buy:first-impression")}</h3>
              <p>
                {t("buy:improving-facade")}
              </p>
            </li>
            <li>
              <h3>{t("buy:refreshing")}</h3>
              <p>
                {t("buy:painting-walls")}
              </p>
            </li>
            <li>
              <h3>{t("buy:proffesional-photos")}</h3>
              <p>
                {t("buy:use-the-services")}
              </p>
            </li>
            <li>
              <h3>{t("buy:online-marketing")}</h3>
              <p>
                {t("buy:use-online-marketing")}
              </p>
            </li>
            <li>
              <h3>{t("buy:highlight-strengths")}</h3>
              <p>
                {t("buy:highlight-unique-features")}
              </p>
            </li>
            <li>
              <h3>{t("buy:competitive-price")}</h3>
              <p>
                {t("buy:conduct-market-research")}
              </p>
            </li>
            <li>
              <h3>{t("buy:open-session")}</h3>
              <p>
                {t("buy:open-house")}
              </p>
            </li>
            <li>
              <h3>{t("buy:work-with-agent")}</h3>
              <p>
                {t("buy:hire-an-agent")}
              </p>
            </li>
            <li>
              <h3>{t("buy:be-flexible")}</h3>
              <p>
                {t("buy:negotiation-open")}
              </p>
            </li>
          </ul>
          <h4>
            {t("buy:remember")}
          </h4>
        </div>
      </div>
      <SmallContact />{" "}
    </>
  );
}
