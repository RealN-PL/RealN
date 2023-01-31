import React, { Component } from "react";
import eventsbg from "../../../../images/icons/eventsbg.png";
import "./UpcomingEvents.scss";
import { Link } from "react-router-dom";
import events from "../../../../events.json";

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
              Znajdź wydarzenia
              <br /> w okolicy
            </h1>
            <p>
              Wyszukaj iteresujące Cię eventy i warsztaty. <br />
              Pozaj terminy najblższych dni otwartych nieruchomości
            </p>
          </article>
          <img src={eventsbg} alt="buy house background"></img>
        </header>
        <article className="search-bar">
          <div className="search-location">
            <p> Lokalizacja</p>
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
          </div>
          <div className="search-price">
            <p>Rodzaj eventu</p>
            <input type="text" placeholder="Rodzaj eventu"></input>
          </div>
          <Link to="/search">
            {" "}
            <button type="button"> Szukaj</button>
          </Link>
        </article>
        <div className="events-container">
          {this.state.events.map((event: any) => (
            <div className="event-box">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <img src={event.photo} alt={`Zdjęcie ${event.id}`}></img>
                <p>{event.date}</p>
                <button>Zapisz się</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default UpcomingEvents;
