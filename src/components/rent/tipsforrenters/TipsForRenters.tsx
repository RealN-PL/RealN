import React from "react";
import "./tipsforrenters.scss";
import { Link } from "react-router-dom";

const TipsForRenters = () => {
  return (
    <article>
      <div className="tips-head">
        <h1>
          6 kluczowych wskazówek <br /> dla wynajmujących po raz pierwszy
        </h1>
      </div>
      <article className="tips-text">
        <h2>
          Niezależnie od tego, czy wyprowadzasz się z domu rodziców, czy
          zostawiasz za sobą życie w akademiku, zostanie najemcą mieszkania po
          raz pierwszy jest dużym i ekscytującym krokiem. Jednak jeśli nie znasz
          tajników procesu wynajmu, zadanie to może wydawać się przytłaczające.
          Na szczęście zebraliśmy listę 8 kluczowych wskazówek, które pomogą
          osobom wynajmującym mieszkanie po raz pierwszy znaleźć idealne
          mieszkanie i sprawić, że zmiana będzie tak gładka, jak to tylko
          możliwe.{" "}
        </h2>
        <h1>1. Twój budżet musi obejmować coś więcej niż tylko czynsz</h1>
        <p>
          Jeśli jesteś osobą wynajmującą mieszkanie po raz pierwszy, wiedza o
          tym, jak zaplanować budżet na mieszkanie jest kluczowa. Twój
          miesięczny czynsz będzie oczywiście najbardziej znaczącym wydatkiem, z
          którym musisz się liczyć, ale są też inne jednorazowe i bieżące
          opłaty, które powinieneś być w stanie uiścić. Przyjrzyjmy się tym
          kosztom bliżej.
        </p>
        <h3>Wstępne, jednorazowe koszta</h3>
        <p>
          Przed wprowadzeniem się do nowego mieszkania należy zaoszczędzić
          wystarczająco dużo pieniędzy, aby opłacić następujące koszty wstępne:
        </p>
        <ul>
          <li>Koszty przeprowadzki</li>
          <li>Depozyt zabezpieczający</li>
          <li>Czynsz za pierwszy i ostatni miesiąc (jeśli jest wymagany)</li>
          <li>Umeblowanie, jeśli jest potrzebne</li>
        </ul>
        <h3>Koszty stałe</h3>
        <p>
          Po wprowadzeniu się do nowego miejsca, istnieje kilka bieżących
          wydatków, które będziesz musiał pokryć każdego miesiąca:
        </p>
        <ul>
          <li>Czynsz</li>
          <li>Media, takie jak prąd, śmieci, woda, kanalizacja itp.</li>
          <li>Internet i telefon</li>
          <li>Parking</li>
        </ul>
        <p>
          Jako osoba wynajmująca mieszkanie po raz pierwszy, być może po raz
          pierwszy jesteś odpowiedzialny za tego typu wydatki. Ostatnią rzeczą,
          którą chcesz zrobić, to źle ocenić, na co możesz sobie pozwolić,
          ponieważ zapomniałeś uwzględnić opłaty za parkowanie lub kaucję.{" "}
        </p>

        <h1>2. Zrób listę potrzeb, a następnie nadaj im priorytety</h1>
        <p>
          Zacznij od swojego wymarzonego mieszkania - jaka jest Twoja ostateczna
          sytuacja życiowa? Choć może się okazać, że nie będziesz miał
          wszystkiego na swojej liście, ważne jest, aby zrozumieć, co cenisz w
          swoim domu. Niektóre wspólne potrzeby dla osób wynajmujących
          mieszkanie po raz pierwszy to:
        </p>

        <ul>
          <li>Funkcjonalna kuchnia</li>
          <li>Balkon, patio lub inna prywatna przestrzeń na zewnątrz</li>
          <li>Szafa i przestrzeń do przechowywania</li>
          <li>
            Bliskość pracy, życia nocnego, parków dla psów lub innych udogodnień
          </li>
          <li>Naturalne światło i kierunek ekspozycji</li>
          <li>Klimatyzacja</li>
          <li>
            Udogodnienia w budynku, takie jak siłownia, dach lub centrum
            biznesowe
          </li>
        </ul>
        <p>
          Gdy masz już swoją listę, ustal priorytety pozycji od najbardziej do
          najmniej ważnych. To pomoże Ci zawęzić wybór i wybrać pomiędzy
          podobnymi nieruchomościami.
        </p>
        <h1>3. Zadawaj dużo pytań podczas zwiedzania</h1>
        <p>
          Są pewne rzeczy, które po prostu musisz wiedzieć, podczas wyboru
          mieszkania. Możesz skierować te pytania do swojego potencjalnego
          właściciela, lub może będziesz musiał zrobić trochę badań na własną
          rękę. Oto lista pytań, które musisz zadać, ale możesz dodać inne w
          zależności od swoich potrzeb.
        </p>
        <ol>
          <li>Ile wynosi czynsz?</li>
          <li>
            Czy media są wliczone w cenę? Jeśli nie, to ile zazwyczaj kosztują?
          </li>
          <li>Ile wynosi kaucja?</li>
          <li>Jak płacić za czynsz i media?</li>
          <li>Czy jest opłata za parkowanie?</li>
          <li>
            Czy mieszkanie jest przyjazne zwierzętom, a jeśli tak, to jakie są
            związane z tym opłaty?
          </li>
          <li>
            Czy jakiekolwiek depozyty lub opłaty są zwracane po zakończeniu
            najmu?
          </li>
          <li>Jak długi jest okres najmu?</li>
          <li>Jakie zmiany mogę wprowadzić w moim mieszkaniu?</li>
          <li>Jak wygląda utrzymanie mieszkania?</li>
          <li>Czy jestem odpowiedzialny za wszelkie prace konserwacyjne?</li>
          <li>Jakie udogodnienia są dostępne w pobliżu?</li>{" "}
          <li>
            Czy są jakieś szczególne zasady, o których powinienem wiedzieć?
          </li>
          <p>
            Te pytania to dopiero początek. Prawdopodobnie masz specjalne
            potrzeby lub preferencje, które powinny zainspirować dodatkowe
            pytania. Listę tych pytań miej przy sobie podczas zwiedzania, wraz
            ze sposobem zapisywania odpowiedzi.
          </p>
        </ol>

        <h1>4. Wyjaśnienie sytuacji w zakresie parkowania</h1>
        <p>
          Niektóre mieszkania mają wyznaczony parking lub miejsce(a) parkingowe.
          Jeśli planujesz mieszkać ze współlokatorem i oboje macie samochody,
          czy jest wystarczająco dużo miejsc parkingowych, aby łatwo pomieścić
          was oboje? Kiedy nie ma wystarczającej ilości miejsc parkingowych,
          współlokatorzy często zamieniają się miejscami z tygodnia na tydzień
          lub znajdują inny akceptowalny kompromis. Jeśli kompleks apartamentów
          posiada miejsca parkingowe, pamiętaj, aby zapytać, czy jest to
          związane z dodatkowymi kosztami. Opłaty za parkowanie stają się coraz
          bardziej powszechne w wynajmowanych nieruchomościach. Z drugiej
          strony, wiele mieszkań nie posiada parkingu, zwłaszcza w większych
          miastach, takich jak Warszawa czy Kraków. W takim przypadku zwróć
          uwagę na parking uliczny. Znaki parkingowe na ulicy powiedzą Ci, w
          które dni lub godziny parkowanie jest ograniczone lub zabronione
          (zazwyczaj w celu zamiatania ulic lub odśnieżania). Ale powinieneś
          również zwrócić uwagę na to, ile miejsc parkingowych jest wolnych na
          Twojej ulicy - czy jest dużo miejsca, czy też samochody stoją zderzak
          w zderzak? Ulice, na których samochody są zaparkowane blisko siebie,
          zazwyczaj oznaczają, że trudno jest znaleźć miejsce parkingowe.
        </p>
        <h1>6. Poznaj najlepszą porę roku, aby wynająć mieszkanie</h1>
        <p>
          Nie zawsze możesz kontrolować, kiedy musisz się przenieść, ale jeśli
          masz elastyczność, wybór odpowiedniej pory roku do wynajęcia
          mieszkania może mieć duży wpływ. Jeśli Twoim głównym zmartwieniem jest
          cena, będziesz chciał szukać mieszkania w miesiącach zimowych.
          Zazwyczaj większość ludzi przeprowadza się w miesiącach letnich
          (studenci wyprowadzają się z domu itp.), więc popyt i ceny są
          zazwyczaj najwyższe w tym czasie, a najniższe w zimie. Należy
          pamiętać, że podczas gdy ceny wynajmu mogą być niższe, może nie być
          duży wybór kompleksów apartamentów z dostępnością.
        </p>
        <p>
          Z drugiej strony, jeśli idealne mieszkanie jest Twoim priorytetem, to
          przeprowadzka w okresie letnim może być lepszą opcją. Większość
          najemców podpisuje 12-miesięczne umowy najmu w lecie. Dlatego też
          większość umów najmu zazwyczaj kończy się również w tym czasie.
          Oznacza to, że na rynku pojawia się największa liczba nowych mieszkań,
          więc będziesz miał wiele opcji do wyboru. Głównym minusem jest to, że
          ceny wynajmu będą zazwyczaj wyższe i będziesz musiał działać szybko,
          zanim najlepsze mieszkania znikną z rynku.
        </p>
        <h1>7. Dokładnie przeczytaj i upewnij się, że rozumiesz umowę najmu</h1>
        <p>
          Jako pierwszy najemca mieszkania, przeglądanie umowy najmu jest jednym
          z najważniejszych kroków do uzyskania mieszkania. Chociaż umowa najmu
          może zawierać skomplikowany język, będzie ona nakreślać najważniejsze
          umowy, które podejmujesz podpisując ją. Oto kilka rzeczy, które
          powinieneś zanotować:
        </p>
        <ul>
          <li>Długość umowy najmu</li>
          <li>
            Polityka dotycząca zwierząt domowych i wszelkie specjalne warunki
            (jak dodatkowe opłaty)
          </li>
          <li>Wymagania dotyczące depozytu i sposób jego zwrotu</li>
          <li>Zasady podnajmu</li>
          <li>Obowiązki związane z użytkowaniem</li>
          <li>Procedury konserwacyjne</li>
        </ul>
        <p>
          W razie wątpliwości, posiadanie umowy najmu przejrzanej przez prawnika
          wynajmującego jest świetnym pomysłem. Adwokat będzie w stanie
          wychwycić wszelkie nielegalne zapisy, wyjaśnić jak działają zapisy,
          wskazać niekorzystne zapisy i ich konsekwencje oraz zasugerować
          zmiany, które zapewnią Ci bardziej korzystną umowę najmu.
        </p>

        <h3>
          Wyszukiwanie i znalezienie idealnego mieszkania wymaga trochę
          staranności, cierpliwości i przygotowania. Stosując się do tych
          wskazówek, można uniknąć ewentualnych pułapek i uczynić proces
          polowania na mieszkanie tak płynnym, jak to tylko możliwe.
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
