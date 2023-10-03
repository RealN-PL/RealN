import "./propertyDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/configureStore";
import { offersSelectors, fetchOfferAsync } from "../../offers/catalogSlice";
import PropertySlider from "./propComponents/PropertySlider";
import PropNav from "./propComponents/PropNav";
import i18next from 'i18n';

function PropertyDetails() {
  const t = i18next.t;
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

  if (!offer) return <h1>{t("buy:loading")}...</h1>;
  return (
    <div className="property-details">
      <PropNav />
      <article className="about-box">
        <article className="text-box">
          <PropertySlider offer={offer} />
          <h1>{t("buy:about-property")}</h1>
          <h3>{offer[1].description}</h3>
          {offer[1].agent && (
            <>
              <p>{t("buy:added-by")}: {offer[1].agent.name}</p>
              <p> {offer[1].agent.phone}</p>
              <p>{offer[1].agent.email}</p>
            </>
          )}
          <h3>{t("buy:real-estate-information")}</h3>
          <p>{t("buy:property-type")}: {offer[1].buildType} </p>
          <p>{t("buy:city")}: {offer[1].city}</p>
          <p>{t("buy:district")}: {offer[1].district}</p>
          <p>{t("buy:transaction-type")}: {offer[1].type}</p>
          <p>{t("buy:number-of-rooms")}: {offer[1].rooms}</p>
          <p>{t("buy:year-of-construction")}: {offer[1].year}</p>
          <p>{t("buy:floor")}: {offer[1].floor}</p>
          <h3>{t("buy:amenities")}</h3>
          <ul>
            {offer[1].others.map((feature: string) => (
              <li>{feature}</li>
            ))}
          </ul>
        </article>
        <aside>
          <button className="prop-but-1">{t("buy:appointment-with-agent")}</button>
          <button className="prop-but-1">{t("buy:see-the-house")}</button>
          <button className="prop-but-2">{t("buy:ask-us-a-question")}</button>
        </aside>
      </article>
    </div>
  );
}

export default PropertyDetails;
