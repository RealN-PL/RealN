import "./tipsforrenters.scss";
import { Link } from "react-router-dom";

const TipsForRenters = () => {
  return (
    <article>
      <div className="tips-head">
        <h1>
          Porady dla najemców
        </h1>
      </div>
      <article className="tips-text">
        <h2>
          Niezależnie od tego, czy jesteś nowym najemcą czy doświadczonym
          wynajmującym, znajdziesz tutaj przydatne wskazówki i informacje, które
          pomogą Ci w wynajmie i utrzymaniu idealnego mieszkania. Niezależnie od
          tego, czy szukasz porad dotyczących znalezienia odpowiedniego
          mieszkania, negocjowania umowy najmu, zarządzania finansami czy
          utrzymania dobrej relacji z właścicielem, jesteśmy tu po to, aby Ci
          pomóc. Przeczytaj nasze porady i zyskaj pewność i wiedzę potrzebną do
          udanego wynajmu nieruchomości.
        </h2>
        <h1>1. Wybierz odpowiednie miejsce:</h1>
        <p>
          Przed wynajmem nieruchomości dokładnie zastanów się nad lokalizacją.
          Określ, czy preferujesz bliskość szkół, centrów handlowych, transportu
          publicznego lub innych udogodnień. Upewnij się, że wybrane miejsce
          odpowiada Twoim potrzebom i stylowi życia.
        </p>
        <h1>2. Ustal budżet:</h1>
        <p>
          Określ realistyczny budżet na nieruchomości, uwzględniając czynsz,
          opłaty za media i inne koszty związane z utrzymaniem nieruchomości.
          Upewynajemwnij się, że masz wystarczające środki finansowe na pokrycie
          miesięcznych opłat.
        </p>

        <h1>3. Przeczytaj umowę najmu:</h1>
        <p>
          Przed podpisaniem umowy najmu dokładnie zapoznaj się z jej treścią.
          Zwróć uwagę na warunki najmu, okres trwania umowy, obowiązki najemcy i
          wynajmującego, zasady rozwiązania umowy i ewentualne dodatkowe
          klauzule. Jeśli masz wątpliwości, skonsultuj się z prawnikiem.
        </p>

        <h1>4. Dokumentuj stan nieruchomości:</h1>
        <p>
          Przy wprowadzaniu się do wynajmowanej nieruchomości wykonaj
          szczegółowy inwentaryzacyjny spis stanu nieruchomości. Zrób zdjęcia
          lub filmy, aby udokumentować ewentualne istniejące uszkodzenia lub
          niedociągnięcia. To pomoże uniknąć nieporozumień w przyszłości.
        </p>

        <h1>5. Płatności i terminy:</h1>
        <p>
          Przestrzegaj ustalonych terminów płatności czynszu i innych opłat
          zgodnie z umową najmu. Regularnie sprawdzaj stan swojego konta i
          potwierdzaj dokonane płatności. W razie opóźnień w płatnościach,
          skonsultuj się z wynajmującym i staraj się znaleźć rozwiązanie.
        </p>

        <h1>6. Zgłaszaj awarie i naprawy:</h1>
        <p>
          Jeśli wystąpią jakiekolwiek awarie lub potrzeba naprawy w
          nieruchomości, niezwłocznie zgłoś to wynajmującemu. Zachowaj
          dokumentację zgłoszeń i odpowiedzi, aby mieć udokumentowany ślad
          komunikacji w przypadku sporów.
        </p>
        <h1>7. Zachowaj porządek</h1>
        <p>
          Dbaj o wynajmowaną nieruchomość i utrzymuj ją w czystości. Szanuj
          mienie i przestrzeń wspólną, jeśli takie istnieją. Regularnie wykonuj
          podstawowe prace konserwacyjne, takie jak czyszczenie, usuwanie
          drobnych usterek czy pielęgnacja ogrodu.
        </p>

        <h1>8. Rozwiązywanie sporów:</h1>
        <p>
          Jeśli wystąpią jakiekolwiek problemy lub spory z wynajmującym, staraj
          się rozwiązać je najpierw w sposób komunikacyjny i pokojowy
        </p>

        <h3>
          Pamiętaj, że te porady mają na celu zapewnić Ci udany wynajem
          nieruchomości i utrzymanie dobrej relacji z wynajmującym. Bądź
          odpowiedzialnym najemcą i korzystaj z wynajmowanej nieruchomości z
          szacunkiem i troską.
        </h3>
      </article>
      <article className="articles-box">
        <h2>Sprawdź więcej artykułów na temat wynajmu mieszkania</h2>
        <div>
          <Link to="/guides/how-to-rent-a-house">
            <div>
              <h2>Chcę wynająć swoje mieszkanie</h2>
              <p>Dowiedz się więcej</p>
            </div>
          </Link>
          <Link to="/guides/rent-trends">
            <div>
              <h2>Trendy rynku wynajmu</h2>
              <p>Dowiedz się więcej</p>
            </div>
          </Link>
          <Link to="/guides/buy-or-rent">
            <div>
              <h2>Kupno czy wynajem? </h2>
              <p>Dowiedz się więcej</p>
            </div>
          </Link>
        </div>
      </article>
    </article>
  );
};

export default TipsForRenters;
