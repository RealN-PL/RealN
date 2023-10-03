import SmallContact from "../../utils/SmallContact";
import "./whybuy.scss";
import mock from "../../../../images/mock.png";
import getit from "../../../../images/getit.jpg";
import pic2 from "../../../../images/pic2.jpg";
import i18next from 'i18n';

const whybuy = () => {
  const t = i18next.t;
  return (
    <>
      <article className="whybuy-header">
        {t("buy:why-is-it-worth")}
      </article>

      <article className="whybuy-top-box">
        <h1>{t("buy:why-is-it-worth")}</h1>
        <ul>
          <li>
            <p>
              {t("buy:dream-property-with-us")}
            </p>
            {t("buy:we-update-offers")}
          </li>
          <li>
            <p> {t("buy:local-agent")} </p>
            {t("buy:your-agent")}
          </li>
          <li>
            <p> {t("buy:no-commission")} </p>
            <span className="text-bold">
            {t("buy:no-commission-charges")}
            </span>{" "}
            {t("buy:thanks-to-unique-technology")}
          </li>{" "}
        </ul>
      </article>
      <SmallContact />

      <article className="whybuy-top-box">
        <h1>{t("buy:how-it-works")}</h1>
        <ul>
          <li>
            <p>{t("buy:stay-up-to-date")}</p>{" "}
            {t("buy:visiting-via-website")}
          </li>
          <li>
            <p>  {t("buy:saw-your-time")}</p>
            {t("buy:based-interview")}
          </li>
          <li>
            <p>
              {" "}
              {t("buy:make-an-offer")}
            </p>
            {t("buy:simple-way")}
          </li>
        </ul>
      </article>
      <article className="mockup-holder">
        <img src={mock} alt="site mockup"></img>
        <aside>
          <h1>{t("buy:presentation-invite")}</h1>
          <p>
          {t("buy:update-offers-every")}
          </p>
          <img src={getit} alt="store img"></img>
        </aside>
      </article>
      <article className="ready-holder">
        <img src={pic2} alt="home to buys"></img>
        <aside>
          <h1>{t("buy:selling-old-house-or-apartment")}</h1>
          <h2>{t("buy:proposition-for-you")}..</h2>
          <p>
          {t("buy:pay-only")}
          </p>
          <p>{t("buy:tools-like")}:</p>
          <ul>
            <li>{t("buy:3D-walks")}</li>
            <li>{t("buy:live-presentations-video")}</li>
            <li>{t("buy:digital-marketing-campaigns")}</li>
          </ul>
          <h1>{t("buy:we-are-effective")}</h1>{" "}
        </aside>
      </article>
    </>
  );
};

export default whybuy;
