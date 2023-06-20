import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import SmallContact from "../../utils/SmallContact";
import homebg from "../../../../images/icons/homebg.png";

export default function HomeValue() {
  return (
    <>
      <div className="homevalue__header">
        <h1>Jak obliczyć wartość domu?</h1>
        <span></span>
      </div>
      <div className="homevalue_flexbox">
        <div className="homevalue__box">
          <h2>
            Aby obliczyć wartość domu przy sprzedaży i zysk po udanej
            transakcji, można zastosować następujące kroki:
          </h2>
          <ul>
            <li>
              <h3>Określenie wartości rynkowej:</h3>
              <p>
                Przeprowadź badanie rynku, aby określić wartość rynkową domu.
                Możesz skonsultować się z lokalnymi rzeczoznawcami
                nieruchomości, przejrzeć ceny podobnych nieruchomości w okolicy
                lub skorzystać z narzędzi online do wyceny nieruchomości.
              </p>
            </li>
            <li>
              <h3>Oszacowanie kosztów transakcji:</h3>
              <p>
                Ustal, jakie będą koszty związane z transakcją sprzedaży.
                Obejmują one prowizję dla pośredników, opłaty notarialne,
                podatki transferowe i ewentualne inne opłaty związane z n.
                prawnymi aspektami sprzedaży. Skonsultuj się z
                profesjonalistami, aby uzyskać dokładne informacje na temat tych
                kosztów.
              </p>
            </li>
            <li>
              <h3>Obliczenie salda netto:</h3>
              <p>
                Odejmij koszty transakcji od wartości sprzedaży domu, aby
                obliczyć saldo netto, tóre otrzymasz po sprzedaży. Saldo netto
                jest równoważne zyskowi po uwzględnieniu kosztów.
              </p>
            </li>
            <li>
              <h3>Uwzględnienie innych czynników:</h3>
              <p>
                Przy obliczaniu zysku z transakcji sprzedaży warto również wziąć
                pod uwagę inne czynniki, takie jak koszty kredytu hipotecznego,
                jakie ponosiłeś podczas posiadania nieruchomości, lub koszty
                wynajmu alternatywnego miejsca zamieszkania, jeśli się
                przeprowadzasz.
              </p>
            </li>
          </ul>
          <h4>
            Warto pamiętać, że rzeczywisty zysk może się różnić w zależności od
            indywidualnych okoliczności i zmieniających się warunków rynkowych.
            Ważne jest również uwzględnienie czynników czasowych i inflacji.
            Jeśli jesteś niepewny, zawsze warto skonsultować się z ekspertem,
            takim jak pośrednik nieruchomości lub księgowy, aby uzyskać dokładne
            oszacowanie wartości domu i potencjalnego zysku po sprzedaży.
          </h4>
        </div>
      </div>
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
      <SmallContact />
    </>
  );
}
