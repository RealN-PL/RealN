import "./searchpage.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import i18next from 'i18n';

export default function Offercard(props: any) {
  const t = i18next.t;
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: false,
  };

  return (
    <div className="offercard">
      <Slider {...settings}>
        {props.offer.img.map((img: any, i: number) => (
          <img key={i} src={img.url} alt={`Zdjęcie ${i.toString()}`} />
        ))}
      </Slider>
      <h1>{props.offer.price} zł</h1>
      <p>
        {props.offer.rooms} {t("buy:rooms")}, {props.offer.area} m2
      </p>
      <p>
        {props.offer.city}, {props.offer.distriction}
      </p>
      <Link to={`${props.offer.id}`}>
        <button className="btn">{t("buy:caps-details")}</button>
      </Link>
    </div>
  );
}
