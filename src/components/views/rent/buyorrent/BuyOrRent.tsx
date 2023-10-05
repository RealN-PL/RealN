import React from "react";
import "./butorrent.scss";
import { Link } from "react-router-dom";
import i18next from "i18next";

const BuyOrRent = () => {
  const t = i18next.t;
  return (
    <>
      <header className="buy-or-rent-header">
        <h1>{t("rent:buying-or-renting")}</h1>
      </header>
      <article className="buyorrent-box">
        <h1>{t("rent:you-deciding")}</h1>

        <p>
          {t("rent:maybe-you-ready")}
        </p>
        <h3>
          {t("rent:one-important-question")}
        </h3>

        <p>
          {t("rent:each-of-us")}
        </p>

        <h1>
          {t("rent:question-1")}
        </h1>
        <p>
          {t("rent:buying-and-renting")}
        </p>

        <h1>{t("rent:question-2")}</h1>

        <p>
          {t("rent:buying-and-renting")}
        </p>

        <h1>{t("rent:question-3")}</h1>
        <p>
          {t("rent:rent-vs-buy")}
        </p>
        <h1>{t("rent:buying-renting-advatages")}</h1>
        <p>
        {t("rent:decide-on-renting")}
        </p>
        <h1>{t("rent:aparment-advatages")}</h1>
        <ul>
          <li>
            <span className="text-bold">{t("rent:house-repairs")}</span> 
            {t("rent:house-repairs-text")}
          </li>
          <li>
            {" "}
            <span className="text-bold">{t("rent:monthly-expenses-house")}</span>
            {t("rent:monthly-expenses-house-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:flexibility")}</span>
              {t("rent:flexibility-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:investment-opportunities")}</span>
              {t("rent:investment-opportunities-text")}
          </li>
        </ul>
        <h1>{t("rent:apartament-disadvantages")}</h1>
        <ul>
          <li>
            <span className="text-bold">{t("rent:temporary")}</span>
            {t("rent:temporary-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:uncertainty")}</span>
            {t("rent:uncertainty-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:possible-rent-increase")}</span>
            {t("rent:possible-rent-increase-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:lack-of-equity")}</span>
            {t("rent:lack-of-equity-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:house-shell-state")} </span>
            {t("rent:house-shell-state-text")}
          </li>
        </ul>

        <h1>{t("rent:advantages-of-buying-a-house")}</h1>
        <ul>
          <li>
            <span className="text-bold">{t("rent:building-capital")} </span>
            {t("rent:building-capital-text")}
          </li>
          <li>
            <span className="text-bold">
            {t("rent:adapt-your-needs")}{" "}
            </span>
            {t("rent:adapt-your-needs-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:stability")} </span>
            {t("rent:stability-text")}
          </li>
        </ul>
        <h1>{t("rent:disadvantages-house")}</h1>
        <ul>
          <li>
            <span className="text-bold">{t("rent:closing-costs")}</span>
            {t("rent:closing-costs-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:house-worth")}</span>
            {t("rent:house-worth-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:house-expense")}</span>
            {t("rent:house-expense-text")}
          </li>
          <li>
            <span className="text-bold">{t("rent:investment-restrictions")}</span>
            {t("rent:investment-restrictions-text")}
          </li>
        </ul>
        <h1>{t("rent:conclusion")}</h1>
        <p>
        {t("rent:conclusion-text")}
        </p>
      </article>
      <article className="articles-box">
        <h1>{t("rent:check-article")}</h1>
        <div>
          <Link to="/guides/how-to-buy-a-house">
            <div>
              <h2>{t("rent:how-to-buy-house")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
          <Link to="/can-i-afford">
            <div>
              <h2>{t("rent:what-kind-of-house")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
          <Link to="/guides/real-estate-commision">
            <div>
              <h2>{t("rent:about-real-estate")}</h2>
              <p>{t("rent:find-out-more")}</p>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
};

export default BuyOrRent;
