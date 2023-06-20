import "./landnearby.scss";
import landbg from "../../../../images/icons/landbg.png";
import EstateSlider from "../../utils/EstateSlider";
import { Link } from "react-router-dom";
const LandNearby = () => {
  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>Znajdź grunty w okolicy</h1>
          <p>
           Sprawdź nasze oferty sprzedaży okolicznych gruntów.
          </p>
        </article>
        <img src={landbg} alt="buy land background"></img>
      </header>
      <article className="search-bar">
        <div className="search-location">
          <p>Lokalizacja</p>

          <input type="text" placeholder="Miasto, adres, kod pocztowy"></input>
        </div>
        <div className="search-price">
          <p>Zakres cenowy</p>
          <div className="price-box"> 
          <input type="number" placeholder="Cena minimalna"></input>
          <input type="number" placeholder="Cena maksymalna"></input>
        </div></div>
        <Link to ="/search">  <button type="button"> Szukaj</button></Link>
      </article>
      <article className="houses-container">
        <h1>Grunty w Gdańsku</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>Grunty w Gdyni</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>Grunty w Sopocie</h1>
        <EstateSlider />
      </article>
    </>
  );
};

export default LandNearby;
