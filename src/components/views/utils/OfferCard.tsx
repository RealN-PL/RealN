import React from "react";
import "./slider.scss";
import { Link } from "react-router-dom";

export default function OfferCard(props: any) {
  console.log(props.offer[0])
  return (
    <div className="offer-box">
      <img src={props.offer[1].imageAsset[0]} alt="residence-images" />
      <div className="info">
        <div className="features flex">
          <p className="location">
            {props.offer[1].city}, {props.offer[1].district}
          </p>
          <p className="rooms">
            <i className="fa-solid fa-bed"></i>
            {props.offer[1].rooms} pokoje
          </p>
          <p className="size">
            <i className="fa-solid fa-ruler-combined"></i>
            {props.offer[1].size} m2
          </p>
          <p className="area">
            <i className="fa-solid fa-calendar"></i>
            Rok budowy:
            {props.offer[1].year}
          </p>
        </div>
        <div className="details-box flex">
          <p className="price">{props.offer[1].price} zł</p>
          <Link to={`/search/${props.offer[0]}`}>
            <button className="btn">SZCZEGÓŁY</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
