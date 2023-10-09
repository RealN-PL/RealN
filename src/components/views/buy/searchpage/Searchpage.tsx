import React, { Component } from "react";
import "./searchpage.scss";
import Offercard from "./Offercard";
import i18next from 'i18n';

const Parse = require('parse/dist/parse.min.js'); 

class Searchpage extends Component {
  state = {
    offers: [],
    name: "",
    priceMin: 0,
    priceMax: 100000000,
    sortDirection: "",
    city: "",
    type: "",
    size: "",
  };

  componentDidMount(): void {
    const offersParse = Parse.Object.extend("Offers");
    const query = new Parse.Query(offersParse);
    query.include("agent");
    query.find().then((data2: any[])=>{
      const data = data2.map(obj => obj.toJSON());
      const formattedData = Object.keys(data).map((key: number | any) => ({
        ids: key,
        ...data[key],
      }));
      this.setState({
        offers: formattedData,
      });
    });   
  }
  handlePriceMinChange = (priceMin: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      priceMin: priceMin.target.value,
    });
  };
  handlePriceMaxChange = (priceMax: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      priceMax: priceMax.target.value,
    });
  };
  handleCityChange = (city: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      city: city.target.value,
    });
  };
  handleTypeChange = (type: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      type: type.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="search-holder">
          <input
            value={this.state.priceMin}
            onChange={(priceMin) => {
              this.handlePriceMinChange(priceMin);
            }}
          ></input>
          <input
            value={this.state.priceMax}
            onChange={(priceMax) => {
              this.handlePriceMaxChange(priceMax);
            }}
          ></input>
          <select
            onChange={(city) => {
              this.handleCityChange(city);
            }}
          >
            <option value="">{i18next.t("buy:all-cities")}</option>
            <option value="Gdańsk">Gdańsk</option>
            <option value="Gdynia">Gdynia</option>
            <option value="Sopot">Sopot</option>
          </select>
          <select
            onChange={(type) => {
              this.handleTypeChange(type);
            }}
          >
            <option value="">
              {i18next.t("buy:all-real-estate")}
            </option>
            <option value="Mieszkanie">{i18next.t("buy:apartment")}</option>
            <option value="Dom">{i18next.t("buy:house")}</option>
            <option value="Działka">{i18next.t("buy:plot")}</option>
          </select>
        </div>

        <div className="offers-container">
          {this.state.offers
            .filter(
              (offer: any) =>
                offer.price < this.state.priceMax &&
                offer.price > this.state.priceMin
            )
            .filter((offer: any) => offer.city.includes(this.state.city))
            .filter((offer: any) => offer.type.includes(this.state.type))
            .map((offer) => (
              <Offercard offer={offer} />
            ))}
        </div>
      </>
    );
  }
}

export default Searchpage;
