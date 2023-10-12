import React from "react";
import "./chooseAgent.scss";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import i18next from "i18n";


const ChooseAgent = () => {
  const t = i18next.t;
  return (
    <>
      <header className="agent-header">
        <h1>{t("resources:how-to-choose-agent-for")}</h1>
        <p>{t("resources:top-15")}</p>
      </header>
      <article className="agent-article">
        <h3>
          {t("resources:not-knowing")}
        </h3>
        <h1>
          {t("resources:main-job")}
        </h1>
        <p>
          {t("resources:main-job-text")}
        </p>
        <h1>{t("resources:how-many-offers")}</h1>
        <p>
          {t("resources:how-many-offers-text")}
        </p>
        <h1>
          {t("resources:former-customers")}
        </h1>
        <p>
          {t("resources:former-customers-text")}
        </p>{" "}
        <h1>{t("resources:customer-filled-complain")}</h1>
        <p>
          {t("resources:if-uncomfortable-question")}
        </p>{" "}
        <h1>{t("resources:what-is-your-fee")}</h1>
        <p>
          {t("resources:standard-agencies")}
        </p>{" "}
        <h1>{t("resources:what-services")}</h1>
        <p>
          {t("resources:make-a-list")}
        </p>{" "}
        <h1>{t("resources:am-i-required")}</h1>
        <p>
          {t("resources:many-clients")}
        </p>{" "}
        <h1>{t("resources:how-many-transactions")}</h1>
        <p>
          {t("resources:difficult-offers")}
        </p>{" "}
        <h1>{t("resources:who-work-with-me")}</h1>
        <p>
        {t("resources:agent-is-supported")}
        </p>{" "}
        <h1> {t("resources:will-you-show-all-offers")}</h1>
        <p>{t("resources:will-you-show-all-offers")}</p>{" "}
        <h1>{t("resources:how-quikly")}</h1>
        <p>
          {t("resources:best-offers")}
        </p>{" "}
        <h1>
          {t("resources:represent-buyers-and-sellers")}
        </h1>
        <p>
          {t("resources:double-agent")}
        </p>{" "}
        <h1>{t("resources:what-sets-you-apart")}</h1>
        <p>
          {t("resources:look-for-an-agent")}
        </p>{" "}
        <h1>{t("resources:what-if")}</h1>
        <p>
         {t("resources:agents-get-paid")}
        </p>{" "}
        <h1>
          {t("resources:get-reference")}
        </h1>
        <p>
          {t("resources:each-agent")}
        </p>
        
       
      </article>
      <article className="agent-searcher">
      <h4>{t("resources:start-searching-houses")}</h4>
        <aside className="nav-searcher-box">
          <input type="text" placeholder={t("buy:city-address-code")}></input>
          <HiOutlineMagnifyingGlass
            className="nav-glass-icon"
          />
        </aside>
      </article>

    </>
  );
};

export default ChooseAgent;
