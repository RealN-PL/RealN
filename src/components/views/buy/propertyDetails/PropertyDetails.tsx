import "./propertyDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/configureStore";
import { offersSelectors, fetchOfferAsync } from "../../offers/catalogSlice";
import PropertySlider from "./propComponents/PropertySlider";
import PropNav from "./propComponents/PropNav";

function PropertyDetails() {
  const { id }: any = useParams();
  const { offerLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) =>
    offersSelectors.selectById(state, id!)
  );
  useEffect(() => {
    if (offer === undefined || !offerLoaded) dispatch(fetchOfferAsync(id));
    console.log(offer);
  }, [offerLoaded, id, offer, dispatch]);

  if (!offer) return <h1>loading...</h1>;
  return (
    <div className="property-details">
      <PropNav />
      <article className="about-box">
        <article className="text-box">
          <PropertySlider offer={offer} />
          <h1>O tej nieruchomości</h1>
          <h3>{offer[1].description}</h3>
          {offer[1].agent && (
            <>
              <p>Dodano przez: {offer[1].agent.name}</p>
              <p> {offer[1].agent.phone}</p>
              <p>{offer[1].agent.email}</p>
            </>
          )}
          <h3>Informacje o nieruchomości</h3>
          <p>Typ nieruchomości: {offer[1].buildType} </p>
          <p>Miasto: {offer[1].city}</p>
          <p>Dzielnica: {offer[1].district}</p>
          <p>Typ transakcji: {offer[1].type}</p>
          <p>Ilość pokoi: {offer[1].rooms}</p>
          <p>Rok budowy: {offer[1].year}</p>
          <p>Piętro: {offer[1].floor}</p>
          <h3>Udogodnienia</h3>
          <ul>
            {offer[1].others.map((feature: string) => (
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
    </div>
  );
}

export default PropertyDetails;
