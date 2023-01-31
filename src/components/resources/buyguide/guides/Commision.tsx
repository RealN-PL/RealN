import "./commision.scss";

const Commision = () => {
  return (
    <>
      <header className="commision-header">
        <h1>O prowizji agenta nieruchomości</h1>
      </header>
      <article className="commmision-article">
        <h1>Ile wynosi prowizja od nieruchomości?</h1>
        <p>
          Zazwyczaj prowizja od nieruchomości wynosi 5%-6% ceny sprzedaży domu.
          W większości obszarów, kupujący agent otrzymuje 1%-2% w prowizji i
          sprzedający agent otrzymuje 2%-4% w prowizji. To może się różnić w
          zależności od agenta i lokalizacji.
        </p>
        <h1>Kto płaci prowizję?</h1>
        <p>
          Jeśli kupujesz dom przez RealN, nie płacisz prowizji agenta
          nieruchomości. W standartowym biurze wynosi ona 1-2%. Jeśli
          sprzedajesz dom, zazwyczaj płacisz prowizję agentowi aukcji 2-4%, gdy
          sprclass=divzedaż domu zostanie zamknięta.
          <span className="text-bold">
            Sprzedajac przez RealN płacisz prowizję aukcji od 1-1,5%{" "}
          </span>
        </p>
        <p>
          Oto jak koszty prowizji rozkładają się na cenę sprzedaży domu przy
          całkowitej stawce prowizji 5% przy standardowej sprzedaży w porównaniu
          z RealN
        </p>
        <article className="commision-table">
          <h3 className="title1">Cena sprzedaży domu </h3>
          <p className="text1">1.000.000 PLN </p>
          <p className="text2">2.000.000 PLN </p>
          <p className="text3">3.000.000 PLN </p>
          <p className="text4">4.000.000 PLN </p>
          <h3 className="title2">5% Komisja nieruchomości</h3>
          <p className="text5">50.000 PLN </p>
          <p className="text6">100.000 PLN </p>
          <p className="text7">150.000 PLN </p>
          <p className="text8">200.000 PLN </p>
          <h3 className="title3">1%-1,5% RealN Komisja </h3>
          <p className="text9">10.000PLN do 15.000PLN</p>
          <p className="text10">20.000PLN do 30.000PLN</p>
          <p className="text11">30.000PLN do 45.000PLN</p>
          <p className="text12">40.000PLN do 60.000PLN</p>
        </article>

        <h3>Czy można negocjować prowizje opłat?</h3>
        <p>
          Nie ma przepisów w Polsce dyktujących stawki prowizji, więc agenci
          mogą być skłonni do negocjowania niższych stawek w zależności od
          rodzaju transakcji, wymaganych usług i relacji. Niektórzy agenci będą
          również obniżyć swoje opłaty prowizyjne, jeśli reprezentują zarówno
          kupującego i sprzedającego w sprzedaży domu (znany również jako
          podwójnej agencji, patrz poniżej).
        </p>
        <p className="text-bold">W RealN mamy stalą prowizje od 1%-1,5%</p>
        <p>
          Należy pamiętać, że niższa prowizja nie jest koniecznie najlepszym
          rozwiązaniem. Część opłaty agenta obejmuje budżet marketingowy i inne
          wydatki biznesowe na sprzedaż domu. Mniejszy budżet może oznaczać, że
          agent nie może prawidłowo sprzedawać swój dom. Więc choć ważne jest,
          aby rozważyć agenta opłaty, ważne jest również, aby rozważyć wartość
          ktore otrzymasz
        </p>
        <p>
          <span className="text-bold">RealN oferuje Najlepsze ceny. </span>
          Pokażemy Ci, ile zapłacisz - i ile zaoszczędzisz - w każdej sprzedaży
          domu. Porozmawiaj z agentem RealN, aby poznać dokładną kwotę, którą
          możesz zaoszczędzić.
        </p>
        <h1>Co obejmuje prowizja?</h1>
        <p>
          Średnia prowizja agenta nieruchomości obejmuje szeroki zakres usług,
          które agent zapewnia podczas sprzedaży domu. Usługi te mogą obejmować:
          pracę ze sprzedającym, aby ustawić realistyczną cenę dla domu,
          marketing poprzez różne kanały online i offline, profesjonalnie
          prezentując dom potencjalnym nabywcom, negocjowanie szczegółów
          transakcji, bycie obecnym podczas inspekcji i ocen, a ostatecznie
          zamknięcie sprzedaży.
        </p>
        <p className="text-bold">
          {" "}
          W RealN zautomatyzowaliśmy wszystkie procesy sprzedaży, marketingu,
          prezentacji i obsługi dokumentów. Jesteśmy więc w stanie zaoferować
          sprzedaż nieruchomości za 1%-1,5% prowizji.
        </p>

        <h1>
          Jak dzielona jest prowizja pomiędzy agentów sprzedającego i kupującego
          klienta?
        </h1>

        <p>
          Ważne jest również, aby pamiętać, że po początkowym podziale, komisja
          może być podzielona między agentem i biurem nieruchomsci na 50/50% .
          Średnio, rzeczywisty agent może dostać tylko 1,5% z 5% prowizji.
        </p>
        <h1>Czy prowizja jest zawarta w kosztach zamknięcia?</h1>
        <p>
          Technicznie rzecz biorąc, prowizja agenta nie jest zawarta w domu
          kosztów zamknięcia. Koszty zamknięcia są asortyment opłat, oddzielne
          od prowizji agenta, które muszą być wypłacane na zamknięciu. Koszty
          zamknięcia zazwyczaj obejmują takie rzeczy jak podatki, ubezpieczenie
          tytułu, ocena, opłaty pożyczkodawcy i inne usługi prowadzone podczas
          zamknięcia.  
        </p>
        <p>
          Kwoty kosztów zamknięcia różnią się w zależności od programu
          kredytowego kupującego, ale zazwyczaj wynoszą one 2%-5% ceny zakupu
          domu.
        </p>
      </article>
    </>
  );
};

export default Commision;
