import i18next from "i18n";
import "./commision.scss";

const Commision = () => {
  const t = i18next.t;
  return (
    <>
      <header className="commision-header">
        <h1>{t("resources:about-real-estate")}</h1>
      </header>
      <article className="commmision-article">
        <h1>{t("resources:how-much-is-commission")}</h1>
        <p>
          {t("resources:who-pays-commission")}
        </p>
        <h1> {t("resources:who-pays-commission")}</h1>
        <p>
          {t("resources:if-you-buy-house")}
          <span className="text-bold">
            {t("resources:auction-commission")}{" "}
          </span>
        </p>
        <p>
          {t("resources:heres-how")}
        </p>
        <article className="commision-table">
          <h3 className="title1">{t("resources:sell-price")}</h3>
          <p className="text1">1.000.000 PLN </p>
          <p className="text2">2.000.000 PLN </p>
          <p className="text3">3.000.000 PLN </p>
          <p className="text4">4.000.000 PLN </p>
          <h3 className="title2">5% {t("resources:real-estate-commission")}</h3>
          <p className="text5">50.000 PLN </p>
          <p className="text6">100.000 PLN </p>
          <p className="text7">150.000 PLN </p>
          <p className="text8">200.000 PLN </p>
          <h3 className="title3">1%-1,5% {t("resources:realn-commission")} </h3>
          <p className="text9">10.000PLN do 15.000PLN</p>
          <p className="text10">20.000PLN do 30.000PLN</p>
          <p className="text11">30.000PLN do 45.000PLN</p>
          <p className="text12">40.000PLN do 60.000PLN</p>
        </article>

        <h3>{t("resources:can-you-negotiate")}</h3>
        <p>
          {t("resources:no-regulations")}
        </p>
        <p className="text-bold">{t("resources:fixed-commission")}</p>
        <p>
          {t("resources:please-note")}
        </p>
        <p>
          <span className="text-bold">{t("resources:best-prices")}</span>
            {t("resources:how-you")}
        </p>
        <h1>{t("resources:commision-include")}</h1>
        <p>
          {t("resources:average-commission")}
        </p>
        <p className="text-bold">
          {" "}
          {t("resources:in-realn")}
        </p>

        <h1>
          {t("resources:commission-is-divided")}
        </h1>

        <p>
          {t("resources:initial-division")}
        </p>
        <h1>{t("resources:commission-included")}</h1>
        <p>
          {t("resources:technically")}  
        </p>
        <p>
          {t("resources:closing-cost")}
        </p>
      </article>
    </>
  );
};

export default Commision;
