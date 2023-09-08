import Slider from "react-slick";
import OfferCard from "./OfferCard";
import "./slider.scss";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/configureStore";
import { offersSelectors, fetchOffersAsync } from "../offers/catalogSlice";
import { Offer } from "../../models/offer";

export default function EstateSlider() {
  const catalog = useAppSelector(offersSelectors.selectAll);
  const { offersLoaded, dispPage, displayLimit, filterValue } =
    useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!offersLoaded)
      dispatch(fetchOffersAsync({ dispPage, displayLimit, filterValue }));
  }, [offersLoaded, dispatch, catalog, dispPage, displayLimit, filterValue]);

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
          {catalog.map((offer: [string, Offer], i: number) => (
            <OfferCard key={i} offer={offer} />
          ))}
        </Slider>
        <p className="check-button">Sprawdź wszystkie oferty</p>
      </div>
    </div>
  );
}
