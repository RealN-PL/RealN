import guidepoeple from "../../../../../images/guidepeople.jpg";
import bulb from "../../../../../images/icons/bulb.png";
import "./buyisteps.scss";

const BuyInSteps = () => {
  return (
    <>
      <header className="steps-header">
        <article className="steps-text-box">
          <h1>Jak kupić dom w 7 krokach</h1>
          <p>
            Zrozumienie wszystkich kroków to świetny sposób, aby rozpocząć.{" "}
            <br />
            Od znalezienia odpowiedniego agenta do uzyskania kluczy, poznaj
            podstawy tego, jak kupić nieruchomość.
          </p>
        </article>
      </header>
      <article className="steps-text">
        <h1>Krok 1: Określ swój budżet</h1>
        <p>
          Jeszcze zanim zaczniesz szukać, powinieneś określić, na ile możesz
          sobie pozwolić za pomocą narzędzi online, Dostępnego na platformie
          RealN zwanym Kalkulator budżetowy. Wystarczy wpisać kilka podstawowych
          informacji, aby uzyskać szacunkową kwotę, jaką możesz wydać na
          nieruchomość.
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>Wskazówka agenta RealN</h3>
            <p>
              Zazwyczaj całkowita opłata za zakup nieruchomości (w tym opłaty,
              podatki i ubezpieczenie) nie powinna przekraczać 35% twojego
              dochodu brutto (przed opodatkowaniem), ale zaleca się, aby
              pozostać bliżej 25%.
            </p>
          </aside>
        </article>
        <h3>Oszczędzaj na wkład własny</h3>
        <p>
          Duża część Twojego kredytu hipotecznego zostanie określona na
          podstawie tego, ile zapłacisz z góry w formie wkładu własnego. Ogólnie
          rzecz biorąc, im wyższy wkład, tym lepsze będzie oprocentowanie. Jeśli
          zdecydujesz się wpłacić mniej niż 10%, prawdopodobnie będziesz musiał
          zapłacić prywatne ubezpieczenie hipoteczne. Porozmawiaj z agentem i
          kredytodawcą, aby zrozumieć swoje opcje i określić najlepszą zaliczkę
          dla Ciebie.
        </p>
        <h4>Nie zapomnij o kosztach całkowitych</h4>
        <p>
          Koszty całkowite są opłatami dokonywanymi w dniu transakcji i
          zazwyczaj wynoszą między 2%-5% ostatecznej ceny sprzedaży. Więcej o
          kosztach całkowitych dla kupujących przeczytasz poniżej, w kroku 6.
        </p>
      </article>
      <article className="steps-text">
        <h1>
          Krok 2: Uzyskaj wstępną zgodę banku na udzielenie kredytu hipotecznego
        </h1>
        <p>
          Sprzedający zazwyczaj są bardziej skłonni zaakceptować oferty od
          nabywców, którzy są już po analizie zdolności kredytowej przez wybrany
          bank. Sprawdz i porównaj kilka ofert banków. Przeczytaj opinie o
          każdym pożyczkodawcy. Wybierz banki, które mają najlepsze recencje.
        </p>
        <h4>Złóż wniosek o wstępną akceptację</h4>
        <p>
          Kiedy już wybierzesz bank, złóż wniosek o wstępną analizę Twojej
          zdolności kredytowej. Z pewnością bank poprosi o wszystkie dokumenty
          finansowe - zeznania podatkowe, odcinki wypłaty, wyciągi bankowe,
          wyciągi z kart kredytowych, kredytów studenckich i samochodowych, itp.
          Pamiętaj jednak że zgoda banku na udzielenie kredytu to jedno,
          powinieneś wziąć pod uwagę również Twoje miesięczne koszty dodatkowe.
          Przygotuj swój miesięczny budżet, tak aby dowiedzieć się ile
          faktycznie będą wynosiły koszty całkowite.
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>Wskazówka agenta RealN</h3>
            <p>
              Pamiętaj jednak że zgoda banku na udzielenie kredytu to jedno,
              musisz nadal wziąć pod uwagę Twoje koszty dodatkowe.
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>
          Krok 3: Poproś Agenta RealN o pomoc w przygotowaniu najlepszej dla
          Ciebie oferty
        </h1>
        <p>
          Agenci RealN to profesjonaliści, którzy mają dostęp do najlepszych
          ofert. Agent będzie z Tobą na każdym etapie procesu zakupu
          nieruchomości, doskonale zna topografię miasta, będzie też dla Ciebie
          niezastąpionym negocjatorem.
        </p>
        <p className="text-bold">
          Agent RealN nie pobiera prowizji od strony Kupującej.
        </p>
        <img
          src={guidepoeple}
          alt="people with agent"
          className="guide-image-people"
        ></img>
        <h4>Unikaj pracy z dwoma różnymi biurami</h4>
        <p>
          Gdy oferta dotycząca sprzedaży nieruchomości przykładowo znajduje się
          w jednym biurze, a Ciebie stronę zainteresowaną reprezentuje Agent
          innego biura Często dochodzi do konfliktów lub utrudniania sobie
          pracy. RealN zapewnia kompleksową usługę, oferując wszystko w ramach
          jednego biura. Nadal dwoje Agentów RealN może i reprezentuje obie
          strony transakcji, jednak dzięki jasno określonym warunkom nie
          dochodzi nigdy do konfliktów interesów, gdyż prowizję płaci ją tylko
          jedna strona (Klient Sprzedający).
        </p>
      </article>
      <article className="steps-text">
        <h1>Krok 4: Rozpocznij poszukiwania</h1>
        <p>
          Gdy masz już zatwierdzoną zdolność kredytową i wybrałeś Agenta, to
          oznacza tylko jedno! Jesteś gotowy rozpocząć poszukiwania wymarzonej.
          nieruchomości
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>Wskazówka agenta RealN</h3>
            <p>
              Pamiętaj, jeśli spodoba Ci się nieruchomość, podziel się tą
              informacją tylko z Twoim Agentem, pozwól mu przeprowadzić za
              Ciebie negocjacje. Nie rób wrażenia, że chcesz złożyć ofertę, może
              to mieć wpływ na cenę zakupu.
            </p>
          </aside>
        </article>
        <p>
          Podczas prezentacji nieruchomości, nie bój się zadawania pytań.
          Sprawdź każdy szczegół. Rób notatki.
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>Wskazówka agenta RealN</h3>
            <p>
              Przyprowadź ze sobą kogoś zaufanego na zwiedzanie domu, aby mieć
              drugi zestaw oczu. Jeśli dom ma wiele pięter, niech jedna osoba
              pójdzie na górę, aby "chodzić i rozmawiać", podczas gdy druga
              zostanie na dole, aby sprawdzić poziom hałasu między piętrami.
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>Krok 5: Składanie oferty</h1>
        <p>
          Powierz to zadanie Twojemu Agentowi, omów z Nim swoją strategię. Czy
          dom jest prawidłowo wyceniony? Co sprawi, że Twoja oferta wyróżnia
          się? Agent RealN dzięki znajomości rynku oraz zdobytych
          umiejętnościach negocjacyjnych idealnie poradzi sobie z tym zadaniem.
          Wezmą pod uwagę swój budżet i cenę wywoławczą dla porównywalnych domów
          w Twojej okolicy przy tworzeniu oferty, która będzie wyróżniać się do
          sprzedawców domu.
        </p>
        <article className="hint">
          <img src={bulb} alt="bulb"></img>
          <aside>
            <h3>Wskazówka agenta RealN</h3>
            <p>
              <span className="text-bold"> Przygotuj się do negocjacji</span>W
              zrozumieniu zakupu nieruchomości, należy pamiętać że
              prawdopodobnie otrzymasz kontrofertę i trzeba będzie prowadzić
              kolejne negocjacje ze sprzedającym. Twój Agent będzie z Tobą na
              każdym etapie tego procesu. To Ty jednak podejmiesz ostateczną
              decyzję.
            </p>
          </aside>
        </article>
      </article>
      <article className="steps-text">
        <h1>Krok 6: Sprawdź stan nieruchomości</h1>
        <p>
          Jednym z najważniejszych etapów przy zakupie nieruchomości jest
          sprawdzenie jego stanu, pod kątem fizycznym jak i prawnym. Zaleca się
          skorzystanie z usługi fachowca, który przygotuje dla nas raport stanu
          aktualnego budynku. Sprawdzi stan ciągów hydraulicznych,
          elektrycznych, grzewczych i chłodzących, sprawdzi dach, fundamenty,
          ocieplenie budynku, stan okien itp. Jeśli raport z inspekcji wskazuje
          na jakiekolwiek poważne problemy, będzie to ważny argument do
          negocjacji ceny zakupu.
        </p>
      </article>
      <article className="steps-text">
        <h1>Krok 7: Transakcja i przekazanie nieruchomości</h1>
        <p>
          Dotarłeś do ostatnich kroków. Po podpisaniu Aktu Sprzedaży zostałeś
          prawnym Właścicielem wybranej przez Ciebie nieruchomości. Po
          wpłynięciu środków na konto Sprzedającego, możesz umówić się na odbiór
          nieruchomości. Agent RealN pomoże Ci przygotować protokół
          zdawczo-odbiorczy, który pozwoli Ci podpisanie umów z dostawcami
          mediów oraz na rozliczenie rachunków zużycia przez wcześniejszego
          Gospodarza. W zależności od tego, czy obiekt jest gotowy do
          wprowadzenia czy wymaga odświeżenia lub remontu,które chcesz zakończyć
          przed wprowadzeniem się. Warto więc pomyśleć na wcześniejszym etapie o
          umówieniu ekip remontowych czy zakupie potrzebnych materiałów czy
          wyposażenia.
        </p>
      </article>
    </>
  );
};

export default BuyInSteps;
