import React, { Component } from "react";
import eventsbg from "../../../../../images/icons/eventsbg.png";
import "./UpcomingEvents.scss";
import { Link } from "react-router-dom";
import events from "../../../../../events.json";
import i18next from "i18n";
class UpcomingEvents extends Component {
  state = {
    events: [],
  };

  componentDidMount(): void {
    const formattedData = Object.keys(events).map((key: number | any) => ({
      ids: key,
      ...events[key],
    }));
    this.setState({
      events: formattedData,
    });
  }

  render() {
    return (
      <>
        <header className="events-search-header">
          <article>
            <h1>
              {i18next.t("resources:find-events")}
              <br /> {i18next.t("resources:in-the-area")}
            </h1>
            <p>
            {i18next.t("resources:search-workshop")} <br />
            {i18next.t("resources:check-dates")}
            </p>
          </article>
          <img src={eventsbg} alt="buy house background"></img>
        </header>
        <article className="search-bar">
          <div className="search-location">
            <p>{i18next.t("resources:location")}</p>
            <input
              type="text"
              placeholder={i18next.t("resources:city-post-code")}
            ></input>
          </div>
          <div className="search-price">
            <p>{i18next.t("resources:type-of-event")}</p>
            <input type="text" placeholder={i18next.t("resources:type-of-event")}></input>
          </div>
          <Link to="/search">
            {" "}
            <button type="button"> {i18next.t("resources:search")}</button>
          </Link>
        </article>
        <div className="events-container">
          {this.state.events.map((event: any) => (
            <div className="event-box">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <img src={event.photo} alt={`Zdjęcie ${event.id}`}></img>
                <p>{event.date}</p>
                <button>{i18next.t("resources:sing-up")}</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default UpcomingEvents;
