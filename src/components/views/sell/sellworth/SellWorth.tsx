import SmallContact from "../../utils/SmallContact";
import homebg from "../../../../images/icons/homebg.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "../../nav/nav.scss";
import "./sellworth.scss";
import { Link } from "react-router-dom";

const SellWorth = () => {
  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>Ile wart jest mój dom?</h1>
          <p>Zobacz pobliskie trendy rynkowe sprzedaży.</p>

          <aside className="input-holder">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <HiOutlineMagnifyingGlass className="main-glass-icon" />
          </aside>
        </article>
        <img src={homebg} alt="buy home background"></img>
      </header>

      <div className="sellworth__container">
        <article className="sellworth-grid">
          <div className="sellworth-grid__box1">
            <h1>Najdokładniejsza wycena domu online</h1>
            <p>
              Aby obliczyć wartość nieruchomści RealN wycenia, łączy setki
              punktów danych na temat rynku, okolicy i samego domu - wszystko po
              to, aby zapewnić Ci najdokładniejsze narzędzia do wyceny domu.
            </p>
          </div>
          <div className="sellworth-grid__box2">
            <h3>Śledź wartość swojego domu</h3>
            <p>
              Błyskawicznie poznaj wartość swojego domu i dowiedz się, za ile
              można go sprzedać na dzisiejszym rynku.
            </p>
          </div>
          <div className="sellworth-grid__box3">
            <h3>Zobacz lokalne trendy rynkowe</h3>
            <p>
              Bądź na bieżąco ze zmianami na rynku i dowiedz się, za ile
              sprzedano domy podobne do Twojego w ciągu ostatniego roku.
            </p>
          </div>
          <div className="sellworth-grid__box4">
            <h3>Uzyskaj bezpłatny miesięczny raport</h3>
            <p>
              Otrzymuj comiesięczne wiadomości e-mail z aktualizacjami
              dotyczącymi wartości Twojego domu i jej zmian.
            </p>
          </div>
        </article>
      </div>

      <h1 className="sellworth__subtitle">
        Więcej materiałów dla właścicieli domów
      </h1>
      <div className="sellworth-grid__container">
        <Link to="/sell/how-much-is-it-worth/find-the-value">
          {" "}
          <div className="box1">
            <img src={homebg} alt="home"></img>
            <h3>Jak obliczyć wartość domu?</h3>
            <p> Czytaj dalej</p>
          </div>
        </Link>
        <Link to="/sell/how-much-is-it-worth/five-ways">
          {" "}
          <div className="box2">
            <img src={homebg} alt="home"></img>
            <h3>
              5 sposobów na znalezienie porównywalnych nieruchomości w okolicy.
            </h3>
            <p> Czytaj dalej</p>
          </div>
        </Link>
        <Link to="/sell/how-much-is-it-worth/ten-advices">
          {" "}
          <div className="box3">
            <img src={homebg} alt="home"></img>
            <h3>
              10 niesamowitych porad dotyczących nieruchomości dla sprzedających
              domy!
            </h3>
            <p> Czytaj dalej</p>
          </div>
        </Link>
      </div>
      <SmallContact />
    </>
  );
};

export default SellWorth;
