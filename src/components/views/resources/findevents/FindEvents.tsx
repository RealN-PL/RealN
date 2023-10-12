import React from "react";
import SmallContact from "../../../views/utils/SmallContact";
import "./findevents.scss";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { Link } from "react-router-dom";
import i18next from "i18n";

const FindEvents = () => {
  const t = i18next.t;
  return (
    <>
      <header className="event-header">
        <h1>
          {t("resources:workshop-searcher")} <br /> {t("resources:and-events")} {" "}
        </h1>
      </header>
      <article className="event-container">
        <h3>
          {t("resources:buy-or-sell")} 
          <br /> {t("resources:realn-is-here")} {" "}
        </h3>
        <p>
        {t("resources:join")} 
        </p>
      </article>
      <article className="event-searcher">
        <aside className="event-input-holder">
          <input type="text" placeholder={t("resources:city-post-code")} ></input>{" "}
       <Link to="/upcoming-events">    <HiOutlineMagnifyingGlass
            className="main-glass-icon"
          /></Link>
        </aside>
        <h2>
          {t("resources:enter-location")}
          <br /> {t("resources:to-see")}
        </h2>
      </article>

      <article className="bottom-event__text">
        <h1>{t("resources:learn-how")}</h1>
        <p>
          {t("resources:looking-in-tricity")}
          <br />
          {t("resources:house-to-sell-in-hel")} <br />
          {t("resources:regardless-situation")}{" "}
          <br /> {t("resources:necessary-knowledge")}
        </p>
      </article>
      <SmallContact />
    </>
  );
};

export default FindEvents;
