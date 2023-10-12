import i18next from "i18next";
import guidepoeple from "../../../../../images/guidepeople.jpg";
import bulb from "../../../../../images/icons/bulb.png";
import "./buyisteps.scss";

const BuyInSteps = () => {
  const t= i18next.t;
  return (
    <>
      <header className="steps-header">
        <article className="steps-text-box">
          <h1>{t("resources:how-to-buy-house-7-steps")}</h1>
          <p>
            {t("resources:understanding-all-steps")}{" "}
            <br />
            {t("resources:from-finding-agent")}
          </p>
        </article>
      </header>
      <article className="steps-text">
        <h1>{t("resources:determine-budget")}</h1>
        <p>
          {t("resources:before-even-start")}
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>{t("resources:agent-tip")}</h3>
            <p>
              {t("resources:typically")}
            </p>
          </aside>
        </article>
        <h3>{t("resources:save-payment")}</h3>
        <p>
          {t("resources:part-of-your-mortgage")}
        </p>
        <h4>{t("resources:dont-forget-costs")}</h4>
        <p>
          {t("resources:total-costs-charged")}
        </p>
      </article>
      <article className="steps-text">
        <h1>
          {t("resources:step-2")}
        </h1>
        <p>
          {t("resources:sellers-more-willing")}
        </p>
        <h4>{t("resources:apply-for-approval")}</h4>
        <p>
          {t("resources:chosen-bank")}
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>{t("resources:agent-tip")}</h3>
            <p>
              {t("resources:remember-bank-consent")}
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>
          {t("resources:step-3")}
        </h1>
        <p>
          {t("resources:agents-are-proffesional")}
        </p>
        <p className="text-bold">
          {t("resources:no-commission-from-buyer")}
        </p>
        <img
          src={guidepoeple}
          alt="people with agent"
          className="guide-image-people"
        ></img>
        <h4>{t("resources:avoid-two-offices")}</h4>
        <p>
          {t("resources:avoid-two-offices-example")}
        </p>
      </article>
      <article className="steps-text">
        <h1>{t("resources:step-4")}</h1>
        <p>
          {t("resources:approved-credit")}
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>{t("resources:agent-tip")}</h3>
            <p>
              {t("resources:remember-like-property")}
            </p>
          </aside>
        </article>
        <p>
          {t("resources:during-presentation")}
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>{t("resources:agent-tip")}</h3>
            <p>
              {t("resources:bring-someone-honest")}
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>{t("resources:step-5")}</h1>
        <p>
          {t("resources:entrust-agent")}
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>{t("resources:agent-tip")}</h3>
            <p>
              <span className="text-bold">{t("resources:prepare-to-negotiate")}</span>
              {t("resources:prepare-to-negotiate-text")}
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>{t("resources:step-6")}</h1>
        <p>
          {t("resources:most-important-step")}
        </p>
      </article>
      <article className="steps-text">
        <h1>{t("resources:step-7")}</h1>
        <p>
        {t("resources:final-step-reached")}
        </p>
      </article>
    </>
  );
};

export default BuyInSteps;
