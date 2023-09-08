import { AiOutlineExclamation } from "react-icons/ai";
import "./payoff.scss";
import back2 from "../../../../goodimages/back2.jpg";
import bulb from "../../../../images/icons/bulb.png";
import { Link } from "react-router-dom";

const payoff = () => {
  return (
    <>
      <div className="payoff-header">
        <h1>Ile zarobię na sprzedaży domu?</h1>
        <div className="payoff-header__gridbox">
          <div className="payoff-header__calc">
            <p>Cena sprzedaży nieruchomości</p>
            <input></input>
            <p>Niespłacony kredyt hipoteczny</p>
            <input></input> <p>Sprzedaż w:</p>
            <input></input>
            <button>Oblicz zyski ze sprzedaży</button>
            <p>
              Kalkulator ten nie ma na celu zastąpienia profesjonalnej wyceny.
            </p>
          </div>
          <div className="payoff-header__res">
            <h1 className="payoff-header__res1">
              {" "}
              Szacowany zysk ze sprzedaży domu
            </h1>
            <div className="payoff-header__res2">
              <h3>PLN 0,97M</h3>
              <p>RealN Agent</p>
            </div>
            <div className="payoff-header__res3">
              <h3>PLN 0,93M</h3> <p>Agent tradycyjny</p>
            </div>
            <p className="payoff-header__res4">Prowizja agenta sprzedającego</p>
            <p className="payoff-header__res5">22.500 PLN (1,5%)</p>
            <p className="payoff-header__res6">45.000 PLN (3,0%)</p>
            <p className="payoff-header__res7">Prowizja agenta kupującego</p>
            <p className="payoff-header__res8">0 PLN (0,0%)</p>
            <p className="payoff-header__res9">15.000 PLN (1,0%)</p>
            <p className="payoff-header__res10">Opłaty i podatki</p>
            <p className="payoff-header__res11">12.500 PLN</p>
            <p className="payoff-header__res12">12.500 PLN</p>
            <p className="payoff-header__res13">
              * Opłaty mogą ulec zmianie, obowiązują stawki minimalne. Opłata
              agenta kupującego z innego biuranie jest nie wliczona, np. jeśli
              opłata agenta kupującego wynosi 2,5%, sprzedający zapłaci
              całkowitą opłatę w wysokości 1,5%. Sprzedaż za 1% opłaty za
              wystawienie tylko w przypadku zakupu za pośrednictwem RealN w
              ciągu 365 dni od zamknięcia oferty RealN. Pobierzemy 1,5% opłaty
              za wystawienie, a następnie wyślemy Ci czek na 0,5% różnicy po
              zakupie następnego domu z nami. Dowiedz się więcej
            </p>
          </div>
          <div className="payoff-header__exclam">
            <AiOutlineExclamation />
            <p>Zaoszczędź na całej transkacji i dla wszystkich stron</p>
            <p>37.500 PLN</p>
            <p>z lokalnym agentem RealN*</p>
          </div>
        </div>
      </div>
      <div className="payoff-count__container">
        <h1>Jak obliczamy wpływ ze sprzedaży domu?</h1>
        <h3>
          Kalkulator przychodów ze sprzedaży domu wykorzystuje koszty sprzedaży
          domu w Twojej okolicy, aby oszacować, ile możesz zarobić na sprzedaży
          domu.
        </h3>
        <div className="payoff-count__gridbox">
          <div>
            <h3>Szacowana cena sprzedaży:</h3>
            <p>
              Aby oszacować wpływy, musisz znać szacunkową cenę sprzedaży domu.
              Można to zrobić poprzez skonsultowanie się z agentem
              nieruchomości, który oceni wartość domu na podstawie lokalnego
              rynku.
            </p>
            <h3>Prowizja agenta nieruchomości:</h3>
            <p>
              Zazwyczaj prowizja dla agenta nieruchomości wynosi od 2% do 4%
              ceny sprzedaży domu. Ta kwota zostanie odjęta od całkowitych
              wpływów.
            </p>
            <h3>Saldo niespłaconego kredytu hipotecznego:</h3>
            <p>
              Jeśli posiadasz niespłacony kredyt hipoteczny, musisz odjąć saldo
              tego kredytu od wpływów. Upewnij się, że masz aktualne saldo
              kredytu.
            </p>
          </div>
          <div>
            <h3>Oszczędności z RealN</h3>
            <p>
              Kiedy sprzedajesz swój dom z agentem RealN, płacisz niską prowizję
              w wysokości 1%-1,5%.** Nie mamz prowizji od strony Kupującego
            </p>
            <p>
              **Opłaty mogą ulec zmianie, obowiązują stawki minimalne. Opłata
              agenta kupującego nie jest wliczona, np. jeśli opłata agenta
              kupującego z innej Agencji wynosi 2,5%, to nie jest uwyglednione
              przy spryedaży. Sprzedaż za 1% opłaty za wystawienie tylko w
              przypadku zakupu za pośrednictwem RealN w ciągu 365 dni od
              zamknięcia oferty RealN. Pobierzemy 1,5% opłaty za wystawienie, a
              następnie wyślemy Ci czek na 0,5% różnicy po zakupie następnego
              domu z nami. Dowiedz się więcej
            </p>
            <h2>
              Podsumowując, aby obliczyć wpływy ze sprzedaży domu, musisz
              uwzględnić szacunkową cenę sprzedaży, prowizję agenta, saldo
              niespłaconego kredytu hipotecznego, oraz ewentualne dodatkowe
              opłaty.
            </h2>
          </div>
        </div>
      </div>
      <div className="payoff-form">
        <div className="payoff-form__text">
          <h3>Porozmawiaj z lokalnym agentem RealN</h3>
          <p>
            Zrób pierwszy krok, rozmawiając z lokalnym agentem - nie ma presji
            ani zobowiązań
          </p>
          <form>
            <input />
            <input />
            <input />
            <button type="submit">Wyślij</button>
          </form>
        </div>
        <img src={back2} alt="payoff" />
      </div>
      <div className="payoff-links">
        <h1>Narzędzia i zaasoby do sprzedaży domu</h1>
        <div className="payoff-links__flexbox">
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>Oszacowanie wartości domu</h3>
              <p>Sprawdź swoją wycenę i raport domu w RealN</p>
            </div>
          </Link>
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>Agenci RealN</h3>
              <p>Znajdź najlepszych agentów nieruchomości w swojej okolicy.</p>
            </div>
          </Link>
          <Link to="/sell/">
            <div>
              <img src={bulb} alt="value" />
              <h3>Sprzedaż z RealN</h3>
              <p>
                Zobacz, jak agenci i technologia RealN zapewniają najlepsze
                wyniki.
              </p>
            </div>
          </Link>
          <Link to="/sell/how-much-is-it-worth">
            <div>
              <img src={bulb} alt="value" />
              <h3>Mapa domów na sprzedaż</h3>
              <p>
                Przeglądaj aktywne oferty i ostatnie sprzedaże w pobliżu Twojego
                domu.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default payoff;
