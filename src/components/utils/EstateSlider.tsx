import React, { useEffect } from "react";
import Slider from "react-slick";
import data from "./../../data.json";
import Offer from "./Offer";
import "./slider.scss";

export default function EstateSlider() {
  useEffect(() => {
    console.log(data);
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    autoplayspeed: 500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="main-slider-container">
      <div className="slider-box">
        <Slider {...settings}>
          {data.map((offer, i) => (
            <Offer key={i + offer.id} offer={offer} />
          ))}
        </Slider> 
     <p className="check-button">Sprawdź wszystkie oferty</p>
      </div>
    </div>
  );
}
