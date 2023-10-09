import i18next from "i18n";
import "./caniafford.scss";
import { useState } from "react";

const CanIAfford = () => {
  const tr = i18next.t;
  const [dochod, setDochod] = useState("3000");
  const [dodatki, setDodatki] = useState("0");
  const [koszty, setKoszty] = useState("0");
  const [okres, setOkres] = useState("1");
  const [oprocentowanie, setOprocentowanie] = useState("9.21");
  let [rata] = useState(1000);
  const [q, setQ] = useState(0)
const [t, setT] = useState(0)
 const [kapital, setKapital] = useState(0)

  const handleDochodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDochod(event.target.value);
  };
  const handleDodatkiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDodatki(event.target.value);
  };

  const handleKosztyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKoszty(event.target.value);
  };

  const handleOkresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOkres(event.target.value);
  };

  const handleProcentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOprocentowanie(event.target.value);
  };

  const count = (e: any, oprocentowanie: number) => {
    e.preventDefault();
    if (+koszty === 0) {
      setKoszty("1200");
    }
    if ((+dochod - +koszty) / 2 - +dodatki < 0) {
      rata = 0;
    } else rata = (+dochod - +koszty) / 2 - +dodatki;
    setQ((oprocentowanie * 0.01) / 12 + 1)
    setT(+okres * 12)
    setKapital(Math.round(rata / (q ** t * ((q - 1) / (q ** t - 1)))))
  };
  return (
    <>
      <div className="afford-nav"></div>
      <article className="afford-container">
        <article>
          <h1 className="afford-title">{tr("resources:what-kind-of-house")}</h1>
          <h3>
            {tr("resources:income-and-household-costs")}
          </h3>
          <article className="calculator-box">
            <form className="calculator-data">
              <h3>{tr("resources:what-kind-of-house")}</h3>
              <h4>{tr("resources:netto-income")}</h4>
              <input
                type="currency"
               // requiredPole nieobowiązkowe
                data-type="currency"
                value={dochod}
                onChange={handleDochodChange}
              />
              <p>{tr("resources:amount-of-hand")}</p>
              <h4>{tr("resources:total-installments")}</h4>
              <input
                type="string"
                value={dodatki}
                onChange={handleDodatkiChange}
              />
              <p>{tr("resources:optional-field")}</p>
              <h4>{tr("resources:sum-costs")}</h4>
              <input
                type="number"
                required
                value={koszty}
                onChange={handleKosztyChange}
              />
              <p>{tr("resources:rent-shopping")}</p>

              <h3>{tr("resources:planned-mortage")}</h3>
              <h4>{tr("resources:repayment-period")}</h4>
              <input
                type="number"
                required
                value={okres}
                onChange={handleOkresChange}
              />
              <p>{tr("resources:how-many-years")}</p>
              <h4>{tr("resources:interest")}</h4>
              <input
                type="number"
                required
                value={oprocentowanie}
                onChange={handleProcentChange}
              />
              <p>{tr("resources:loan-interest")}</p>
              <button  value="Oblicz" onSubmit={(e: any) => count}>
              {tr("resources:count")}
              </button>
            </form>
            <aside className="calculator">
              <h2>{tr("resources:your-creditworthiness")}</h2>
              <h1>{kapital} zł</h1>
              <p>{tr("resources:amout-of-credit")}</p>
              <h3>{rata} zł</h3>
              <p>{tr("resources:amout-of-credit-value")}</p>
            </aside>
          </article>

          <p>
            {tr("resources:thanks-to-calculator")}
          </p>
          <p>
            {tr("resources:here-you-will-know")}
          </p>
        </article>
        <article>
          <h1>{tr("resources:current-rent-and-lease")}</h1>
          <p>
            {tr("resources:current-rent-and-lease-text")}
          </p>
          <h1>{tr("resources:additional-income")}</h1>
          <p>
            {tr("resources:additional-income-text")}
          </p>
          <h1>{tr("resources:monthly-incidental-costs")}</h1>
          <p>
            {tr("resources:additional-income-text")}
            <br />
            {tr("belong-to-them")}
          </p>
          <ul>
            <li>{tr("resources:water-consumption")}</li>
            <li>{tr("resources:electricity-consumption")}</li>
            <li>{tr("resources:heating")}</li>
            <li>{tr("resources:garbage-collection")}</li>
            <li>{tr("resources:property-insurance")}</li>
            <li>{tr("resources:wastewater")}</li>
          </ul>
          <p>
            {tr("resources:to-determine")}
          </p>
          <h1>{tr("resources:annual-interest")}</h1>
          <p>
            {tr("resources:the-nominal-annual-percentage")}
          </p>
          <h1>{tr("resources:inancing-period")}</h1>
          <p>
            {tr("resources:inancing-period-text")}
          </p>
          <h1>{tr("resources:equity-capital")}</h1>
          <p>
            {tr("resources:equity-capital-text")}
          </p>
          <h1>{tr("resources:additional-costs-in-mind")}</h1>
          <p>
          {tr("resources:additional-costs-in-mind-text")}
          </p>
          <ul>
            <li>
            {tr("resources:traditional-office")}
              <span className="text-bold">
                {" "}
                {tr("resources:not-incur-cost")}
              </span>
            </li>
            <li>{tr("resources:notary-fees")}</li>
            <li>{tr("resources:pcc")}</li>
            <li>
              {tr("resources:possible-cost-renovating")}
            </li>
          </ul>
          <p>{tr("resources:additional-costs-desc")}</p>
          <h1>{tr("resources:agency-costs")}</h1>
          <p>
          {tr("resources:average-commission-charged")}
            <span className="text-bold">
              {" "}
              {tr("resources:not-incur-with-realn")}
            </span>
          </p>
          <p>{tr("resources:what-does-it-mean")}</p>
          <p>
            {tr("resources:example")}
          </p>
          <h1>{tr("resources:notary-fees")}</h1>
          <p>
            {tr("resources:notary-fees-text")}
          </p>
          <h1>{tr("resources:pcc-tax")}</h1>
          <p>
            {tr("resources:pcc-costs")}
          </p>
          <h1>{tr("resources:calculator-results")}</h1>
          <p>
            {tr("resources:now-that-you-know")}
          </p>
          <ul>
            <li>{tr("resources:max-purchase-price")}</li>
            <li>
              {tr("resources:agents-costs")}
            </li>
            <li>{tr("resources:notary-fees")}</li>
            <li>{tr("resources:tax-on-purchase")}</li>
            <li>{tr("resources:total-cost")}</li>
            <li>{tr("resources:loean-amount")}</li>
            <li>{tr("resources:own-contribution")}</li>
            <li>{tr("resources:monthly-installment")}</li>
            <li>{tr("resources:total-interest")}</li>
          </ul>
          <h1>{tr("resources:max-purchase-price")}</h1>
          <p>
            {tr("resources:max-purchase-price-text")}
          </p>
          <h1>{tr("resources:agent-estate-costs")}</h1>
          <p>{tr("resources:agent-estate-costs-text")}</p>
          <h1>{tr("resources:notary-fees")}</h1>
          <p>
            {tr("resources:montary-fees")}
          </p>
          <h1>{tr("resources:real-estate-real-costs")}</h1>
          <p>
            {tr("resources:real-estate-real-costs-text")}
          </p>
          <h1>{tr("resources:loan-amount-of-property")}</h1>
          <p>
            {tr("resources:loan-amount-of-property-text")}
          </p>
          <h1>{tr("resources:share-of-equity")}</h1>
          <p>
          {tr("resources:share-of-quity-text")}
          </p>{" "}
          <h1>{tr("resources:monthly-installment")}</h1>
          <p>
            {tr("resources:monthly-installment-text")}
          </p>{" "}
          <h1>{tr("resources:total-interest")}</h1>
          <p>
          {tr("resources:total-interest-text")}
          </p>{" "}
          <h1>{tr("resources:application")}</h1>
          <p>
          {tr("resources:application-text")}
          </p>
        </article>
      </article>
    </>
  );
};

export default CanIAfford;
