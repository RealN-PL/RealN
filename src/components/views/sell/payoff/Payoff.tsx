import { AiOutlineExclamation } from "react-icons/ai";
import "./payoff.scss";
import back2 from "../../../../goodimages/back2.jpg";
import bulb from "../../../../images/icons/bulb.png";
import { Link } from "react-router-dom";
import i18next from "i18n";

const payoff = () => {
  const t = i18next.t;
  return (
    <>
      <div className="payoff-header">
        <h1>{t("sell:how-much-will-earn")}</h1>
        <div className="payoff-header__gridbox">
          <div className="payoff-header__calc">
            <p>{t("sell:house-price")}</p>
            <input></input>
            <p>{t("sell:mortage-loan")}</p>
            <input></input> <p>{t("sell:sales-in")}</p>
            <input></input>
            <button>{t("sell:calculate-your-sales")}</button>
            <p>
              {t("sell:this-calculator")}
            </p>
          </div>
          <div className="payoff-header__res">
            <h1 className="payoff-header__res1">
              {" "}
              {t("estimated-profit")}
            </h1>
            <div className="payoff-header__res2">
              <h3>{t("sell:097M")}</h3>
              <p>{t("sell:agent")}</p>
            </div>
            <div className="payoff-header__res3">
              <h3>{t("sell:093M")}</h3> <p>{t("sell:traditional-agent")}</p>
            </div>
            <p className="payoff-header__res4">{t("sell:agents-commision")}</p>
            <p className="payoff-header__res5">22.500 PLN (1,5%)</p>
            <p className="payoff-header__res6">45.000 PLN (3,0%)</p>
            <p className="payoff-header__res7">{t("sell:agents-commision-2")}</p>
            <p className="payoff-header__res8">0 PLN (0,0%)</p>
            <p className="payoff-header__res9">15.000 PLN (1,0%)</p>
            <p className="payoff-header__res10">{t("sell:taxex-costs")}</p>
            <p className="payoff-header__res11">12.500 PLN</p>
            <p className="payoff-header__res12">12.500 PLN</p>
            <p className="payoff-header__res13">
              {t("sell:fees-are-subject")}
            </p>
          </div>
          <div className="payoff-header__exclam">
            <AiOutlineExclamation />
            <p>{t("sell:save-on-transaction")}</p>
            <p>37.500 PLN</p>
            <p>{t("sell:with-local-agent")}</p>
          </div>
        </div>
      </div>
      <div className="payoff-count__container">
        <h1>{t("sell:how-do-we-calculate")}</h1>
        <h3>
          {t("sell:the-home-sale-income")}
        </h3>
        <div className="payoff-count__gridbox">
          <div>
            <h3>{t("sell:estimated-selling-price")}</h3>
            <p>
              {t("sell:to-estimate")}
            </p>
            <h3>{t("sell:agent-commision")}</h3>
            <p>
              {t("sell:usually")}
            </p>
            <h3>{t("sell:mortage-balance")}</h3>
            <p>
              {t("sell:if-have-mortage")}
            </p>
          </div>
          <div>
            <h3>{t("sell:savings-realn")}</h3>
            <p>
            {t("sell:sell-your-hous")}
            </p>
            <p>
            {t("sell:payments-can-change")}
            </p>
            <h2>
            {t("sell:sum-up")}
            </h2>
          </div>
        </div>
      </div>
      <div className="payoff-form">
        <div className="payoff-form__text">
          <h3>{t("sell:speak-with-agent")}</h3>
          <p>
          {t("sell:make-first-step")}
          </p>
          <form>
            <input />
            <input />
            <input />
            <button type="submit">{t("send")}</button>
          </form>
        </div>
        <img src={back2} alt="payoff" />
      </div>
      <div className="payoff-links">
        <h1>{t("sell:tools")}</h1>
        <div className="payoff-links__flexbox">
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>{t("sell:home-value-estimate")}</h3>
              <p>{t("sell:check-your-home")}</p>
            </div>
          </Link>
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>{t("sell:realn-agents")}</h3>
              <p>{t("sell:find-best")}</p>
            </div>
          </Link>
          <Link to="/sell/">
            <div>
              <img src={bulb} alt="value" />
              <h3>{t("sell:find-best")}</h3>
              <p>
                {t("sell:sales-with-realn")}
              </p>
            </div>
          </Link>
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>{t("sell:map-of-houses")}</h3>
              <p>
                {t("sell:browse")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default payoff;
