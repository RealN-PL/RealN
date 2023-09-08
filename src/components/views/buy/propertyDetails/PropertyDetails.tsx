import "./propertyDetails.scss";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
const Parse = require("parse/dist/parse.min.js");

function PropertyDetails() {
  const { id }: any = useParams();
  const y: number = parseInt(id) - 1;

  const [data, setData] = useState<any[]>([]);

  const fetchData = useCallback( async () => {
    const offersParse = Parse.Object.extend("Offers");
    const query = new Parse.Query(offersParse);     
    query.include("agent");
    const data2 = await query.find();
    const data3 = data2.map((obj: { toJSON: () => any }) => obj.toJSON());
    const data4 = Object.keys(data3).map((key: number | any) => ({
      id: key,
      ...data3[key],
    }));
    const { data }: any = data4;
    setData(data);
    console.log(data[`${y}`]);
  }, [y])

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (!data) return <h1>loading...</h1>;
  return (
    <>
      <div className="img-box">
        <div className="img1-box">
          <img className="img1" src={data[`${y}`].img[0].url} alt="house" />
        </div>
        <div className="img2-box">
          <img className="img2" src={data[`${y}`].img[1].url} alt="house2" />
        </div>
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
            {data[`${y}`].features.map((feature:string) => (
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
