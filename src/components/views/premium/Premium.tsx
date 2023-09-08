import "./premium.scss";
import SmallContact from "../utils/SmallContact";

export default function Premium() {
  return (
    <>
      <div className="premium-header">
        <h1>RealN PREMIIM</h1>
        <h3>
          Najwyższy poziom usług świadczonych przez najlepszych agetów RealN
        </h3>
      </div>
      <div className="premium-search__box">
        <div className="premium-search__text">
          <h3>Poznaj swojego lokalnego agenta luksusowych nieruchomości</h3>
          <p>
            Dzięki RealN PREMIUM zostaniesz połączony z lokalnym agentem, który
            ma wieloletnie doświadczenie w kupnie i sprzedaży luksusowych
            nieruchomości. Tylko nasi najlepsi agenci kwalifikują się do
            zostania agentami RealN PREMIUM.
          </p>
        </div>
    <div className="premium-search__input">
        <input />
        <button>Szukaj</button>
        </div>
      </div>

      <SmallContact />
    </>
  );
}
