import data from "../../../data.json";
import { useParams } from "react-router-dom";

import "./propertyDetails.scss";

function PropertyDetails() {
  const { id }: any = useParams();
  const y: number = parseInt(id) - 1;
  console.log(data[`${y}`]);

  return (
    <>
      <div className="img-box">
        <div className="img1-box">
          <img className="img1" src={data[`${y}`].img[0].url} alt="house" />
        </div>{" "}
        <div className="img2-box">
          <img className="img2" src={data[`${y}`].img[1].url} alt="house2" />
        </div>{" "}
        <div className="img3-box">
          <img className="img3" src={data[`${y}`].img[0].url} alt="house3" />
        </div>
      </div>
      <article className="about-box">
        <article className="text-box">
          <h1>O tej nieruchomości</h1>
          <h3>{data[`${y}`].subtitle}</h3>

          <p>Dodano przez: {data[`${y}`].agent.name}</p>
          <p> {data[`${y}`].agent.phone}</p>
          <p>{data[`${y}`].agent.email}</p>

          <h3>Informacje o nieruchomości</h3>
          <p>Typ nieruchomości: {data[`${y}`].type} </p>
          <p>Miasto: {data[`${y}`].city}</p>
          <p>Dzielnica: {data[`${y}`].distriction}</p>
          <p>Typ transakcji: {data[`${y}`].transactionType}</p>
          <p>Ilość pokoi: {data[`${y}`].rooms}</p>
          <p>Rok budowy: {data[`${y}`].year}</p>
          <p>Piętro: {data[`${y}`].title}</p>

          <h3>Udogodnienia</h3>
          <ul>
            {data[`${y}`].features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </article>
        <aside>
          <button className="prop-but-1">Umów się z Agentem</button>
          <button className="prop-but-1">Zobacz dom</button>
          <button className="prop-but-2">Zadaj nam pytanie</button>
        </aside>
      </article>
    </>
  );
}

export default PropertyDetails;
