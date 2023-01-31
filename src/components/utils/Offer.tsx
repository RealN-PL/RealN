import React from "react";
import "./slider.scss";
import { Link } from "react-router-dom";

export default function Offer(props: any) {
  return (
    <div className="offer-box">
      <img src={props.offer.img[0].url} alt="residence-images" />
      <div className="info">
        <div className="features flex">
          <p className="location">
            {props.offer.city}, {props.offer.distriction}
          </p>
          <p className="rooms">
            <i className="fa-solid fa-bed"></i>
            {props.offer.rooms} pokoje
          </p>
          <p className="size">
            <i className="fa-solid fa-ruler-combined"></i>
            {props.offer.area} m2
          </p>
          <p className="area">
            <i className="fa-solid fa-calendar"></i>
            Rok budowy:
            {props.offer.year}
          </p>
        </div>
        <div className="details-box flex">
          <p className="price">{props.offer.price} zł</p>

          <Link to={`/search/${props.offer.id}`}>
        <button className="btn">SZCZEGÓŁY</button>
      </Link>        </div>
      </div>
    </div>
  );
}
