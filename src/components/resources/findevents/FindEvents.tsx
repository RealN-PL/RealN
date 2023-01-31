import React from "react";
import SmallContact from "../../utils/SmallContact";
import "./findevents.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FindEvents = () => {
  return (
    <>
      <header className="event-header">
        <h1>
          Wyszukiwarka warsztatów <br /> i eventów{" "}
        </h1>
      </header>
      <article className="event-container">
        <h3>
          Kupno lub sprzedaż domu może być skomplikowane,
          <br /> a RealN jest tutaj, aby pomóc!{" "}
        </h3>
        <p>
          Dołącz do nas na bezpłatne zajęcia, aby dowiedzieć się, jak poruszać
          się po procesie od początku do końca, podczas gdy będziesz mógł
          cieszyć się jedzeniem i napojami. Lub, jeśli wolisz uczyć się w
          zaciszu swojego domu lub biura, zapisz się na jeden z naszych
          webinarów! Tak czy inaczej, lokalny agent RealN upewni się, że jesteś
          gotowy na swoją podróż po nieruchomości.
        </p>
      </article>
      <article className="event-searcher">
        <aside className="event-input-holder">
          <input type="text" placeholder="Miasto, ulica, kod pocztowy"></input>{" "}
       <Link to="/upcoming-events">    <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="main-glass-icon"
          /></Link>
        </aside>
        <h2>
          Wpisz swoją lokalizację,
          <br /> aby zobaczyć nadchodzące zajęcia
        </h2>
      </article>

      <article className="bottom-event__text">
        <h1>Dowiedz się jak kupować i sprzedawać na rynku nieruchomości</h1>
        <p>
          Szukasz nieruchomości w Trójmieście?
          <br />
          Masz do sprzedania dom na Helu? <br />
          Niezależnie od sytuacji i wyzwań, nasze szkolenia w zakresie handlu{" "}
          <br /> nieruchomościami dadzą Ci niezbędną wiedze do nawigacji w
          świecie kupna i sprzedaży.
        </p>
      </article>
      <SmallContact />
    </>
  );
};

export default FindEvents;
