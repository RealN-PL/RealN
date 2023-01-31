import "./caniafford.scss";
import { useState } from "react";

const CanIAfford = () => {
  const [dochod, setDochod] = useState("3000");
  const [dodatki, setDodatki] = useState("0");
  const [koszty, setKoszty] = useState("0");
  const [okres, setOkres] = useState("1");
  const [oprocentowanie, setOprocentowanie] = useState("9.21");
  let [rata] = useState(1000);
  const [q, setQ] = useState(0)
const [t, setT] = useState(0)
 const [kapital, setKapital] = useState(0)

  const handleDochodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDochod(event.target.value);
  };
  const handleDodatkiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDodatki(event.target.value);
  };

  const handleKosztyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKoszty(event.target.value);
  };

  const handleOkresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOkres(event.target.value);
  };

  const handleProcentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOprocentowanie(event.target.value);
  };

  const count = (e: any, oprocentowanie: number) => {
    e.preventDefault();
    if (+koszty === 0) {
      setKoszty("1200");
    }
    if ((+dochod - +koszty) / 2 - +dodatki < 0) {
      rata = 0;
    } else rata = (+dochod - +koszty) / 2 - +dodatki;
    setQ((oprocentowanie * 0.01) / 12 + 1)
    setT(+okres * 12)
    setKapital(Math.round(rata / (q ** t * ((q - 1) / (q ** t - 1)))))
  };
  return (
    <>
      <div className="afford-nav"></div>
      <article className="afford-container">
        <article>
          <h1 className="afford-title">Na jaki dom mogę sobie pozwolić?</h1>
          <h3>
            Zobacz na co możesz sobie pozwolić. Znajdź dom / mieszkanie w swoim
            budżecie.
          </h3>
          <article className="calculator-box">
            <form className="calculator-data">
              <h3>Przychody i koszty Twojego gospodartwa domowego</h3>
              <h4>Dochód netto</h4>
              <input
                type="currency"
                required
                data-type="currency"
                value={dochod}
                onChange={handleDochodChange}
              />
              <p>Kwota na rękę bez podatku</p>
              <h4>Suma rat innych kredytów</h4>
              <input
                type="string"
                value={dodatki}
                onChange={handleDodatkiChange}
              />
              <p>Pole nieobowiązkowe</p>
              <h4>Suma kosztów utrzymania</h4>
              <input
                type="number"
                required
                value={koszty}
                onChange={handleKosztyChange}
              />
              <p>Np. czynsz zakupy</p>

              <h3>Planowany kredyt hipoteczny</h3>
              <h4>Okres spłaty</h4>
              <input
                type="number"
                required
                value={okres}
                onChange={handleOkresChange}
              />
              <p>Na ile lat chcesz wziąć kredyt?</p>
              <h4>Oprocentowanie</h4>
              <input
                type="number"
                required
                value={oprocentowanie}
                onChange={handleProcentChange}
              />
              <p>Oprocentowanie kredytu w skali roku</p>
              <button  value="Oblicz" onSubmit={(e: any) => count}>
                Oblicz
              </button>
            </form>
            <aside className="calculator">
              <h2>Twoja zdolność kredytowa</h2>
              <h1>{kapital} zł</h1>
              <p>Kwota kredytu</p>
              <h3>{rata} zł</h3>
              <p>Wysokość raty kredytu</p>
            </aside>
          </article>

          <p>
            Dzięki naszemu kalkulatorowi pomożemy Ci w prosty sposób określić
            Twój budżet związany z zakupem oraz utrzymaniem nieruchomości.
            Miesięczna rata nie powinna przekraczać 50% miesięcznych dochodów
            netto gospodarstwa domowego.
          </p>
          <p>
            Tutaj dowiesz się więcej na temat kluczowych danych, co oznaczają
            oraz informacje o pomocniczych kosztach zakupu. Poniżej zapoznamy
            Państwa z najważniejszymi fachowymi pojęciami oraz danymi.
          </p>
        </article>
        <article>
          <h1>Bieżący czynsz i najem</h1>
          <p>
            Aktualny czynsz i najem to kwota, którą obecnie płacisz swojemu
            właścicielowi co miesiąc. Można wtedy pominąć tę opłatę za czynsz i
            najem w budżecie domowym. Tę kwotę zaoszczędzisz później, gdy kupisz
            własne mieszkanie, bo nie będziesz już musiał płacić czynszu i
            najmu. Jeśli zsumujesz koszty stałe w kalkulacji gospodarstwa
            domowego, możesz pominąć ten koszt.
          </p>
          <h1>Dodatkowy dochód do dyspozycji</h1>
          <p>
            Dodatkowy dochód do dyspozycji nazywany jest również dochodem
            rozporządzalnym. Jest to ta część Twoich dochodów, którą mógłbyś
            wydać oprócz bieżącego miesięcznego wynajmu. Pytanie brzmi: jaką
            kwotę mogę przeznaczyć miesiąc po miesiącu oprócz bieżącego wynajmu,
            aby spłacić kolejny kredyt na nieruchomość? Nie należy wykorzystywać
            całego swojego dochodu rozporządzalnego. Zamiast tego wskazane jest
            pozostawienie tzw. buforu ryzyka. Można je wykorzystać na opłacenie
            nieprzewidzianych wydatków, które mogą się powtarzać. Bez takiej
            rezerwy płynności, w najgorszym wypadku, całe finansowanie może się
            załamać.
          </p>
          <h1>Miesięczne koszty uboczne nowej nieruchomości</h1>
          <p>
            Jeśli chcesz kupić nieruchomość, najpierw będziesz musiał zapłacić
            cenę zakupu. Podobnie jak w przypadku wynajmu, istnieją bieżące
            koszty miesięczne związane z jego użytkowaniem, które należy
            rozważyć przy posiadaniu domu.
            <br />
            Należą do nich:
          </p>
          <ul>
            <li>Zużycie wody</li>
            <li>Zużycie energii elektrycznej</li>
            <li>Ogrzewanie</li>
            <li>Wywóz śmieci</li>
            <li>Ubezpieczenie nieruchomości</li>
            <li>Ścieki</li>
          </ul>
          <p>
            Aby ustalić wysokość tych kosztów należy do tego podejść bardzo
            indywidualnie, uwzględniając między innymi liczbę mieszkańców,
            powierzchnie mieszkalną czy stan budynku czy aktualne ceny usług.
          </p>
          <h1>Roczna stopa procentowa (nominalna w procentach)</h1>
          <p>
            Nominalna roczna stopa procentowa to oprocentowanie, jakie masz
            zapłacić za swój przyszły kredyt na nieruchomości. Banki zazwyczaj
            podają to jako oprocentowanie nominalne lub debetowe.
          </p>
          <h1>Okres finansowania</h1>
          <p>
            Okres finansowania wskazuje, jak długo jesteś gotów spłacać kredyt
            na nieruchomość. Należy zadbać o to, aby okres kredytowania nie
            wykraczał poza wiek emerytalny. Nie należy mylić okresu finansowania
            ze stałym oprocentowaniem. Jeśli pożyczkodawca oferuje stałe
            oprocentowanie na dziesięć lat, to okres ten nie jest tożsamy z
            okresem finansowania. Stałe oprocentowanie przez dziesięć lat
            oznacza jedynie, że oprocentowanie jest gwarantowane przez ten
            okres. Po tym czasie zazwyczaj potrzebne jest finansowanie
            uzupełniające. Dopiero po całkowitej spłacie pożyczki kończy się
            okres finansowania.
          </p>
          <h1>Kapitał własny</h1>
          <p>
            Kredyt na nieruchomość należy do kategorii tzw. kapitału dłużnego.
            Tutaj bank dostarcza kapitał od innych klientów - pożyczone środki.
            Natomiast w finansowaniu budownictwa od kilku lat ważną rolę odgrywa
            tzw. kapitał własny. Przy kapitale własnym wskazujesz kwotę, którą
            możesz samodzielnie pozyskać na swój projekt nieruchomościowy. Wiele
            banków wymaga, aby wskaźnik kapitału własnego wynosił co najmniej 10
            lub 25%. Co to oznacza? Jeśli chcesz kupić nieruchomość w cenie 200
            000 PLN, musiałbyś zgromadzić co najmniej 20 000 PLN kapitału
            własnego. Wymagania banków są w tym względzie bardzo różne. Zawsze
            jednak korzystne jest, jeśli w finansowaniu nieruchomości można
            uwzględnić jak najwięcej kapitału własnego.
          </p>
          <h1>Dodatkowe koszty, o których należy pamiętać</h1>
          <p>
            Kupując nieruchomość, oprócz ceny zakupu, należy pamiętać o kosztach
            z nim związanych. Nie należy ich pomijać w obliczeniach. Idealnym
            rozwiązaniem jest pokrycie kosztów dodatkowych z własnego kapitału,
            ale nie zawsze jest to możliwe. Ważne jest, aby znać całkowitą ich
            kwotę Może bowiem okazać się że przynajmniej część z nich będziesz
            musiał sfinansować z kredytu. Przy zakupie nieruchomości tradycyjnie
            ponoszone są następujące koszty dodatkowe:
          </p>
          <ul>
            <li>
              Koszty biura nieruchomości (standardowe z tradycyjnym biurem to
              średni koszt 2%-4% liczone od kwoty transakcyjnej)
              <span className="text-bold">
                {" "}
                Z RealN NIE PONOSISZ TEGO KOSZTU –koszt prowizji od Kupującego z
                RealN 0%
              </span>
            </li>
            <li>Opłaty notarialne</li>
            <li>Podatek PCC od zakupu nieruchomości</li>
            <li>
              Ewentualny szacunkowy koszt remontu oraz doposażenia nieruchomości
            </li>
          </ul>
          <p>Opis kosztów dodatkowych:</p>
          <h1>Koszty pośrednictwa</h1>
          <p>
            Średnia wysokość prowizji pobieranej po stronie Kupujących w
            tradycyjnym biurze nieruchomości to 2%-4%,
            <span className="text-bold">
              {" "}
              Z RealN NIE PONOSISZ TEGO KOSZTU –koszt prowizji od Kupującego z
              RealN 0%
            </span>
          </p>
          <p>Co to oznacza?</p>
          <p>
            Przykład: Jeżeli cena zakupu nieruchomości wynosi 1 000 000 PLN, a
            prowizja wyniesie 3%* to do kosztów dodatkowych musimy dodać kwotę
            30 tyś.PLN Możesz zaoszczędzić na kosztach pośrednictwa w obrocie
            nieruchomościami, korzystając z platformy RealN nie ponosisz tych
            kosztów.
          </p>
          <h1>Opłaty notarialne</h1>
          <p>
            Opłaty notarialne ponosi strona kupująca, są one kosztami
            obowiązkowymi, koszty obliczane są indywidualnie, ich wysokość
            uzależniona jest od Kancelarii Notarialnej, stopnia trudności
            przygotowania dokumentów czy wysokości kwoty transakcyjnej, średni
            koszt możemy przyjąć pomiędzy 0,5%-1% Od kwoty transakcyjnej.
          </p>
          <h1>Podatek PCC od zakupu nieruchomości</h1>
          <p>
            Stawka PCC – podatku od zakupu mieszkania na rynku wtórnym aktualnie
            wynosi obecnie 2% wartości nieruchomości.
          </p>
          <h1>Wynik kalkulatora budżetowego</h1>
          <p>
            Teraz, gdy już wiesz, co musisz wpisać w naszym kalkulatorze
            budżetowym, chcielibyśmy wyjaśnić wynik. Kalkulacja podaje w
            przeglądzie następujące informacje:
          </p>
          <ul>
            <li>Maksymalna cena zakupu nieruchomości</li>
            <li>
              Koszty agenta nieruchomości (bez kosztów przy zakupie przez
              platformę RealN)
            </li>
            <li>Opłaty notarialne</li>
            <li>Podatek od zakupu nieruchomości PCC</li>
            <li>Całkowity koszt nieruchomości</li>
            <li>Kwota kredytu</li>
            <li>Udział własny w kosztach całkowitych</li>
            <li>Rata miesięczna</li>
            <li>Odsetki ogółem</li>
          </ul>
          <h1>Maksymalna cena zakupu nieruchomości</h1>
          <p>
            Maksymalna cena zakupu nieruchomości pokazuje maksymalną cenę
            poszukiwanej nieruchomości. Ten wynik jest niezwykle pomocny. Być
            może masz już na myśli nieruchomość, która kosztuje 400 000 PLN.
            Jednak wyliczona maksymalna cena zakupu wynosi tylko 350 000 PLN.
            Widać po tym wyniku, że lepiej byłoby poszukać nieco tańszej
            nieruchomości.
          </p>
          <h1>Koszty agenta nieruchomości</h1>
          <p>
            Kolejną częścią wyniku są opłaty brokera. Są one ponoszone pod
            warunkiem, że zleciłeś agentowi nieruchomości poszukiwanie
            nieruchomości. Nie należy lekceważyć prowizji brokera (kosztów
            pośrednictwa). Możesz zaoszczędzić na tym elemencie korzystając w
            prosty sposób z platformy RealN.
          </p>
          <h1>Opłaty notarialne</h1>
          <p>
            Opłaty notarialne są obowiązkowe przy każdym zakupie nieruchomości.
            Stanowią one od 1 do 2% ceny zakupu. Niemniej jednak opłaty
            notarialne są uwzględnione w obliczeniach.
          </p>
          <h1>Koszty całkowite nieruchomości</h1>
          <p>
            Ten cząstkowy wynik jest szczególnie ważny. Na całkowity koszt
            nieruchomości składa się cena zakupu oraz koszty dodatkowe. W tym
            przypadku do ceny zakupu dolicza się opłaty notarialne, podatek PCC
            oraz opłaty dla agenta nieruchomości. Całkowity koszt nieruchomości
            to także kwota, którą musisz sfinansować z pożyczonego kapitału i
            ewentualnego kapitału własnego.
          </p>
          <h1>Kwota kredytu na nieruchomość</h1>
          <p>
            Najlepiej, jeśli całkowity koszt nieruchomości nie jest identyczny z
            kwotą potrzebnego kredytu na nieruchomość. Jest to tak zwane pełne
            finansowanie. W niektórych przypadkach wiąże się to ze znacznie
            wyższymi kosztami odsetkowymi, niż gdybyś mógł włączyć do
            finansowania kapitał własny. W idealnym przypadku kwota pożyczki na
            nieruchomości jest wynikiem odjęcia Twojego kapitału własnego od
            całkowitego kosztu nieruchomości. Jeśli całkowity koszt
            nieruchomości wynosi 380 000 PLN, będziesz potrzebował kredytu na
            nieruchomość w wysokości 340 000 PLN, jeśli masz 40 000 PLN w
            kapitale własnym.
          </p>
          <h1>Udział kapitału własnego w kosztach ogółem</h1>
          <p>
            W najlepszym przypadku można włączyć kapitał własny do finansowania
            nieruchomości. Im wyższy wskaźnik kapitału własnego, tym
            korzystniejsze oprocentowanie. Jest to część kosztów całkowitych,
            którą możesz pozyskać poprzez kapitał własny. Należy pamiętać, że
            muszą to być środki płynne. Oznacza to, że do finansowania
            nieruchomości możesz włączyć salda gotówkowe, papiery wartościowe
            lub inne środki trwałe. Udział kapitału własnego w kosztach
            całkowitych najlepiej gdyby wynosił około 20-25%. Wtedy finansowanie
            jest zazwyczaj stabilne, a banki są gotowe zaoferować szczególnie
            korzystne oprocentowanie budowy. Całkiem sporo banków wymaga
            określonego udziału własnego. W przeciwnym wypadku wniosek o
            pożyczkę może zostać odrzucony.
          </p>{" "}
          <h1>Rata miesięczna</h1>
          <p>
            Miesięczna rata to kwota, którą będziesz musiał zapłacić za kredyt
            na nieruchomość w przyszłości. Na wysokość miesięcznej raty składa
            się dotychczasowy czynsz oraz dodatkowy dochód do dyspozycji
            pomniejszony o miesięczne koszty dodatkowe nowej nieruchomości.
            Jeśli chodzi o kredyt na nieruchomość, to miesięczna rata kredytu
            jest połączeniem odsetek i spłaty. Miesięczna rata to także
            obciążenie, które musisz ponieść przynajmniej w ustalonym okresie
            stałego oprocentowania.
          </p>{" "}
          <h1>Odsetki ogółem</h1>
          <p>
            Tutaj możesz dowiedzieć się, ile odsetek zapłacisz bankowi w całym
            okresie kredytowania. Kwota ta jest zazwyczaj wysoka, ponieważ
            kredyt na nieruchomość ma zazwyczaj okres spłaty od 20 do 30 lat. W
            tym czasie gromadzi się ogromna ilość odsetek.
          </p>{" "}
          <h1>Wniosek</h1>
          <p>
            Możesz skorzystać z naszego kalkulatora budżetowego, aby dowiedzieć
            się, na jaką cenę zakupu nieruchomości możesz sobie pozwolić. Nie
            tylko cena zakupu jest decydująca dla kalkulacji. Trzeba też wziąć
            pod uwagę dodatkowe koszty zakupu. Dzięki naszemu kalkulatorowi
            możesz krok po kroku wprowadzić wszystkie ważne szczegóły. Wszystkie
            istotne koszty są następnie wyświetlane w wyniku. Daje to optymalną
            podstawę do obliczeń. Możesz oszacować, na jaki dom lub mieszkanie
            możesz sobie pozwolić.
          </p>
        </article>
      </article>
    </>
  );
};

export default CanIAfford;
