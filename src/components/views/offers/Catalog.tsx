import { useEffect } from "react";
import "./catalog.scss";
import { Box, Pagination } from "@mui/material";
import SearchNameComponent from "./SearchNameComponent";
import CheckboxButtons from "./CheckboxButtons";
import { Link } from "react-router-dom";
import RadioButtonGroup from "./RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import {
  fetchOffersAsync,
  offersSelectors,
  setPageNumber,
} from "./catalogSlice";
import { Offer } from "../../models/offer";
import i18next from 'i18n';

export default function Catalog() {
  const t = i18next.t;
  const catalog = useAppSelector(offersSelectors.selectAll);
  const { offersLoaded, dispPage, displayLimit, count, filterValue } =
    useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const type = [t("offers:house"), t("offers:apartment"), t("offers:land")];
  const sortOptions = [
    { value: "name", label: t("offers:alphabetically") },
    { value: "priceDesc", label: t("offers:price-descending")},
    { value: "price", label: t("offers:price-ascending") },
  ];
  useEffect(() => {
    if (!offersLoaded)
      dispatch(fetchOffersAsync({ dispPage, displayLimit, filterValue }));
  }, [offersLoaded, dispatch, catalog, dispPage, displayLimit, filterValue]);

  return (
    <div className="catalog-flexbox">
      <div className="catalog-container">
        <div className="filters-box">
          <h1>{t("offers:filter-offers")}</h1>
          <SearchNameComponent
            dispPage={dispPage}
            displayLimit={displayLimit}
          />
          <h3>{t("offers:type")}</h3>
          <CheckboxButtons items={type} onChange={() => console.log(type)} />
          <h3>{t("offers:sort")}</h3>
          <RadioButtonGroup
            selectedValue={""}
            options={sortOptions}
            onChange={() => console.log(sortOptions)}
          />
        </div>
        {catalog.length > 0 ? (
          <>
            {offersLoaded ? (
              <div className="catalog-box">
                {catalog.map((offer: [string, Offer], i: number) => (
                  <Box
                    className="offer-line"
                    key={i + offer[0]}
                    component={Link}
                    to={`/catalog/${offer[0]}`}
                  >
                    <h3>{offer[0]}</h3>
                    <p>{offer[1].title}</p>
                    <h4>{offer[1].price}</h4>
                    {offer[1].imageAsset && (
                      <img
                        src={offer[1].imageAsset[0]}
                        alt={offer[1].title}
                      />
                    )}
                  </Box>
                ))}
                <Pagination
                  onChange={(e, page: number) => dispatch(setPageNumber(page))}
                  size="large"
                  style={{
                    position: "relative",
                    left: "40%",
                    margin: "20px",
                    width: "250px",
                  }}
                  page={dispPage}
                  count={Math.round(count / displayLimit)}
                />
              </div>
            ) : (
              <h1>{t("offers:loading")}</h1>
            )}
          </>
        ) : (
          <div className="catalog-box">
            <h1>{t("offers:no-offers")}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
