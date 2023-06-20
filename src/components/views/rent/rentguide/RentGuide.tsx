import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import rent from "../../../../images/icons/buyhouse.png";
import "./rentguide.scss";
import { Link } from "react-router-dom";
import SmallContact from "../../utils/SmallContact";
import EstateSlider from "../../utils/EstateSlider";

const RentGuide = () => {
  return (
    <>
      <div className="rentguide__header">
        <div>
          <h1>Znajdź swój idealny dom do wynajęcia!</h1>
          <h3>
            RealN to też ekspert w dziedzinie wynajmu nieruchomości,
            dostarczając klientom niezrównaną jakość obsługi i szeroki wybór
            atrakcyjnych ofert. Oferujemy rozwiązania dla każdego, kto szuka
            komfortowego i funkcjonalnego miejsca do zamieszkania lub
            prowadzenia działalności biznesowej.
          </h3>
        </div>
        <img src={rent} alt="rent"></img>
      </div>
      <div className="rentguide-why__container">
        <h1>Dlaczego warto skorzystać z naszych usług wynajmu:</h1>
        <div className="rentguide-why__gridbox">
          <div className="div1">
            <img src={rent} alt="rent"></img>
            <h1>Najlepsze oferty:</h1>
            <p>
              Posiadamy rozbudowaną bazę nieruchomości dostępnych do wynajęcia,
              obejmującą różnorodne lokale mieszkalne i komercyjne. Nasz zespół
              stale aktualizuje oferty, aby zapewnić naszym klientom najświeższe
              i najbardziej atrakcyjne możliwości.
            </p>
          </div>
          <div className="div2">
            <img src={rent} alt="rent"></img>
            <h1>Profesjonalne doradztwo:</h1>
            <p>
              Nasi doświadczeni agenci nieruchomości zapewniają kompleksowe
              doradztwo na każdym etapie procesu wynajmu. Zrozumieją Twoje
              potrzeby, dostosują oferty do Twoich preferencji i odpowiedzą na
              wszystkie pytania, aby zapewnić Ci pełne zadowolenie i
              bezpieczeństwo transakcji.
            </p>
          </div>
          <div className="div3">
            <img src={rent} alt="rent"></img>
            <h1>Sprawne procedury:</h1>
            <p>
              Działamy zgodnie z najwyższymi standardami, aby zapewnić naszym
              klientom płynny i bezproblemowy proces najmu. Przygotujemy
              niezbędną dokumentację, pomożemy w negocjacjach i zatroszczymy się
              o wszystkie szczegóły, aby zapewnić Ci spokojne wynajmowanie
              nieruchomości.
            </p>
          </div>
          <div className="div4">
            <img src={rent} alt="rent"></img>
            <h1>Rzetelność i zaufanie:</h1>
            <p>
              Nasza firma ceni sobie rzetelność i zaufanie jako podstawowe
              wartości. Dbamy o transparentność naszych usług, zapewniamy jasne
              warunki najmu i uczciwe podejście do klientów. Zaufało nam już
              wielu klientów, a ich zadowolenie stanowi naszą najlepszą
              rekomendację.
            </p>
          </div>
          <div className="div5">
            <img src={rent} alt="rent"></img>
            <h1>Indywidualne podejście:</h1>
            <p>
              Jesteśmy elastyczni i gotowi dostosować się do Twoich potrzeb.
              Nasz zespół jest gotowy służyć Ci pomocą, abyś znalazł idealne
              miejsce, które spełni wszystkie Twoje oczekiwania.
            </p>
          </div>
        </div>
      </div>
      <div className="rentguide-art">
        <div className="rentguide-art__textbox">
          <h3>
            Nie trać czasu i energii na przeszukiwanie wielu ofert - skorzystaj
            z naszych usług wynajmu nieruchomości i zyskaj dostęp do najlepszych
            możliwości na rynku. Skontaktuj się z nami już dziś, aby rozpocząć
            poszukiwania i cieszyć się bezproblemowym wynajmem nieruchomości,
            który spełni wszystkie Twoje wymagania.
          </h3>
          <h4>Znajdź swój idealny dom do wynajęcia!</h4>
          <aside className="input-holder">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <HiOutlineMagnifyingGlass className="main-glass-icon" />
          </aside>
        </div>
        <img src={rent} alt="rent"></img>
      </div>
      <div className="rentguide-art__more">
        <h3>Więcej materiałów dla najemców</h3>
        <div className="rentguide-art__flexbox">
          <Link to="/guides/tips-for-renters">
            <div>
              <img src={rent} alt="rent"></img>
              <h4>Porady dla najemców</h4>
              <p>Dalej...</p>
            </div>
          </Link>
          <h3>
            Niezależnie od tego, czy jesteś nowym najemcą czy doświadczonym
            wynajmującym, znajdziesz tutaj przydatne wskazówki i informacje,
            które pomogą Ci w wynajmie i utrzymaniu idealnego mieszkania.
            Niezależnie od tego, czy szukasz porad dotyczących znalezienia
            odpowiedniego mieszkania, negocjowania umowy najmu, zarządzania
            finansami czy utrzymania dobrej relacji z właścicielem, jesteśmy tu
            po to, aby Ci pomóc. Przeczytaj nasze porady i zyskaj pewność i
            wiedzę potrzebną do udanego wynajmu nieruchomości.
          </h3>
        </div>
      </div>
      <EstateSlider/>
      <SmallContact/>
    </>
  );
};

export default RentGuide;
