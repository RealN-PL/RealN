import "./sellwith.scss";
import pic5 from "../../../../images/pic5.jpg";
import mock from "../../../../goodimages/mock.jpg";
import { Link } from "react-router-dom";
import { MdFaceRetouchingOff } from "react-icons/md";
import {AiOutlineArrowRight} from "react-icons/ai";
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import EstateSlider from "../../utils/EstateSlider";
import SmallContact from "../../utils/SmallContact";
export default function SellWith() {
  return (
    <>
      <div className="sellwith__container">
        <div className="sellwith-aside__text">
          <h1>Sprzedawaj za więcej <br/>i oszczędzaj na opłatach</h1>
          <p>
            Agenci RealN mają doświadczenie, aby sprzedać Twój dom za najwyższą
            cenę, a przy zakupie i sprzedaży z nami zapłacisz niską opłatę w
            wysokości 1%.
          </p>
          <p>
            Aby rozpocząć, wprowadź swój adres poniżej. Odpowiesz na kilka
            krótkich pytań, a my skontaktujemy się z Tobą w ciągu kilku godzin.
          </p>
          <div className="desktop">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <Link to="/search">Dalej <AiOutlineArrowRight/></Link>
          </div>
        </div>
        <img src={pic5} alt="agent bg" />
      </div>
      <div className="sellwith-quest__container">
        <h1>Dlaczego warto sprzedawać z RealN?</h1>
        <div className="sellwith-quest__gridbox">
          <div>
            <MdFaceRetouchingOff />
            <h3>Mamy najlepszych agentów na rynku</h3>
            <p>
              Agenci RealN znajdują się wśród 1% najlepszych agentów pracujących
              w każdym ogólnokrajowym biurze pośrednictwa.
            </p>
          </div>
          <div>
            <MdFaceRetouchingOff />
            <h3>Mamy najlepszych agentów na rynku</h3>
            <p>
              Agenci RealN znajdują się wśród 1% najlepszych agentów pracujących
              w każdym ogólnokrajowym biurze pośrednictwa.
            </p>
          </div>
          <div>
            <MdFaceRetouchingOff />
            <h3>Mamy najlepszych agentów na rynku</h3>
            <p>
              Agenci RealN znajdują się wśród 1% najlepszych agentów pracujących
              w każdym ogólnokrajowym biurze pośrednictwa.
            </p>
          </div>
        </div>
      </div>
      <div className="sellwith-ipad__container">
        <h1>
          Uzyskaj pakiet marketingowy, który sprawi, że Twója nieruchomość
          będzie fascynująca dla kupujących
        </h1>
        <div className="sellwith-ipad__gridbox">
          <img src={mock} alt="ipad"></img>
          <div>
            <h3>Więcej spojrzeń na Twój dom</h3>
            <p>
              Gdy wystawisz ofertę na RealN, Twój dom będzie miał o 70% więcej
              wyświetleń, co zwiększy szanse na znalezienie zainteresowanych
              nabywców.
            </p>
            <h3>Preferowane miejsce w wynikach wyszukiwania</h3>
            <p>
              Przez pierwszy tydzień Twoja oferta będzie wyświetlana na szczycie
              wyszukiwań kupujących w witrynie i aplikacji RealN.
            </p>
            <h3>Cyfrowe kampanie marketingowe</h3>
            <p>
              Każda oferta RealN otrzymuje cyfrową kampanię marketingową
              skierowaną do aktywnych nabywców.
            </p>
            <h3>Interaktywne wycieczki 3D</h3>
            <p>
              Każdy dom wymieniony w RealN otrzymuje oszałamiającą wycieczkę 3D,
              dzięki czemu kupujący mogą go zwiedzać z dowolnego miejsca.
            </p>
          </div>
        </div>
      </div>
      <div className="sellwith-more__gridbox">
        <div>
          <h3>Sprzedajesz wysokiej klasy dom?</h3>
          <p>
            Możesz kwaifikować się do RealN Premium, naszego najwyższego poziomu
            usług świadczonych przez naszych najlepszych agentów. Zostaniesz
            połączony z lokalnym ekspertem, który ma wieloletnie doświadczenie w
            sprzedaży luksusowych domów.
          </p>
          <button className="text-bold">Dowiedz się więcej</button>
        </div>
        <img src={pic5} alt="luxury apartment" />
      </div>
      <div className="sellwith-ready__gridbox">
        <img src={pic5} alt="luxury apartment" />
        <div>
          <h3>Gotowy do rozpoczęcia?</h3>
          <p>
            Już dziś możemy połączyć Cię z agentem, który pomoże Ci zrozumieć
            opcje sprzedaży i odpowie na wszystkie Twoje pytania.
          </p>
          <div className="desktop">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>
            <Link to="/search">Dalej</Link>
          </div>
        </div>
      </div>
      <div className="sellwith-opinions">
        <ImQuotesLeft/>
        <h3>Zobacz, co mówią nasi klienci:</h3>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          alias voluptatem accusamus temporibus voluptatum rerum labore
          cupiditate sapiente incidunt facilis!" 
        </p>
        <p>Sebastian Zimnol</p>
        <ImQuotesRight/>
      </div>
      <EstateSlider/>
      <SmallContact/>
    </>
  );
}
