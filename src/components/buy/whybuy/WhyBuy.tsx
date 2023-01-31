import SmallContact from "../../utils/SmallContact";
import "./whybuy.scss";
import mock from "../../../images/mock.png";
import getit from "../../../images/getit.jpg";
import pic2 from "../../../images/pic2.jpg";

const whybuy = () => {
  return (
    <>
      <article className="whybuy-header"></article>

      <article className="whybuy-top-box">
        <h1>Dlaczego warto kupić właśnie u nas?</h1>
        <ul>
          <li>
            <p>
              Z nami znajdziesz wymarzoną nieruchomość, już dziś umów się na
              prezentację!
            </p>
            Aktualizujemy oferty co 5 minut więc możesz wyprzedzić innych
            kupujących poprzez natychmiastową rezerwację prezentacji z Agentem
            RealN.
          </li>
          <li>
            <p> Lokalny agent RealN jako Twój przewodnik </p>Twój Agent pomoże
            Ci w najlepszy sposób przejść przez proces negocjacji, bazując na
            jego wieloletnim doświdczeniu- Z nami poczujesz się bezpiecznie
            dokonując właściwego wyboru.
          </li>
          <li>
            <p> Bez prowizji </p>
            <span className="text-bold">
              Nie pobieramy prowizji od strony Kupującej
            </span>{" "}
            dzięki naszej wyjątkowej technologii, wyróżniamy się dużą
            skutecznością w działaniach.
          </li>{" "}
        </ul>
      </article>
      <SmallContact />

      <article className="whybuy-top-box">
        <h1>Jak to działa?</h1>
        <ul>
          <li>
            <p>Bądź na bieżąco, tak aby najlepsze Cię nie ominęło.</p>{" "}
            Zwiedzanie za pośrednictwem naszej strony i aplikacji jest łatwe.
            Zapisz wyszukiwanie w swoich ulubionych dzielnicach, aby otrzymywać
            powiadomienia o nowych domach.
          </li>
          <li>
            <p>Spotkanie z Agentem RealN-zaoszczędzisz z nami swój czas</p>Na
            podstawie szczegółowego wywiadu i określeniu 6 najważniejszych cech
            dotyczących Twojej wymarzonej nieruchomości Twój Agent rozpocznie
            przygotowanie idealnie dopasowanych ofert.
          </li>
          <li>
            <p>
              {" "}
              Złóż ofertę i w krótkim czasie odbierz klucze od Twojego nowego M.
            </p>
            W prosty i bezpieczny sposób pomożemy przejść Ci ten proces.
          </li>
        </ul>
      </article>
      <article className="mockup-holder">
        <img src={mock} alt="site mockup"></img>
        <aside>
          <h1>Zapraszamy na prezentacje</h1>
          <p>
            Aktualizujemy oferty co 5 minut, więc możesz wyprzedzić innych
            kupujących, natychmiast umawiając się na wycieczkę z agentem RealN,
            osobiście lub przez wideo-czat.
          </p>
          <img src={getit} alt="store img"></img>
        </aside>
      </article>
      <article className="ready-holder">
        <img src={pic2} alt="home to buys"></img>
        <aside>
          <h1>Sprzedajesz swój stary dom lub mieszkanie?</h1>
          <h2>Mamy dla Ciebie propozycję..</h2>
          <p>
            Zapłacisz tylko 1% prowizji, kiedy kupujesz i sprzedajesz z nami.
          </p>
          <p>Dzięki narzędziom takim jak:</p>
          <ul>
            <li>spacery 3D</li>
            <li>prezentacje live, wideo</li>
            <li>cyfrowe kampanie marketingowe</li>
          </ul>
          <h1>Jesteśmy skuteczni</h1>{" "}
        </aside>
      </article>
    </>
  );
};

export default whybuy;
