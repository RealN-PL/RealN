import "./sellwith.scss";
import pic5 from "../../../../images/pic5.jpg";
import mock from "../../../../goodimages/mock.jpg";
import { Link } from "react-router-dom";
import { MdFaceRetouchingOff } from "react-icons/md";
import {AiOutlineArrowRight} from "react-icons/ai";
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import EstateSlider from "../../utils/EstateSlider";
import SmallContact from "../../utils/SmallContact";
import i18next from "i18n";

export default function SellWith() {
  const t = i18next.t;
  return (
    <>
      <div className="sellwith__container">
        <div className="sellwith-aside__text">
          <h1>{t("sell:sell-for-more")} <br/>{t("sell:and-save")} </h1>
          <p>
            {t("sell:realn-agents-has-experience")} 
          </p>
          <p>
            {t("sell:to-start")} 
          </p>
          <div className="desktop">
            <input
              type="text"
              placeholder={t("buy:city-address-code")}
            ></input>
            <Link to="/search">{t("sell:next")}  <AiOutlineArrowRight/></Link>
          </div>
        </div>
        <img src={pic5} alt="agent bg" />
      </div>
      <div className="sellwith-quest__container">
        <h1>{t("sell:why-is-it-worth")} </h1>
        <div className="sellwith-quest__gridbox">
          <div>
            <MdFaceRetouchingOff />
            <h3>{t("sell:best-agents")}</h3>
            <p>
            {t("sell:top-one")} 
            </p>
          </div>
          <div>
            <MdFaceRetouchingOff />
            <h3>{t("sell:best-agents")}</h3>
            <p>
            {t("sell:top-one")} 
            </p>
          </div>
          <div>
            <MdFaceRetouchingOff />
            <h3>{t("sell:best-agents")}</h3>
            <p>
            {t("sell:top-one")} 
            </p>
          </div>
        </div>
      </div>
      <div className="sellwith-ipad__container">
        <h1>
          {t("sell:get-a-marketing")} 
        </h1>
        <div className="sellwith-ipad__gridbox">
          <img src={mock} alt="ipad"></img>
          <div>
            <h3>{t("sell:more-eyes-on-house")} </h3>
            <p>
              {t("sell:when-you-place-offer")}
            </p>
            <h3>{t("sell:preffered-position")}</h3>
            <p>
              {t("sell:first-week")}
            </p>
            <h3>{t("sell:digital-campaigns")}</h3>
            <p>
              {t("sell:each-offer")}
            </p>
            <h3>{t("sell:interactive-tours")}</h3>
            <p>
              {t("sell:each-house")}
            </p>
          </div>
        </div>
      </div>
      <div className="sellwith-more__gridbox">
        <div>
          <h3>{t("sell:high-qualiti-sale")}</h3>
          <p>
          {t("sell:premium")}
          </p>
          <button className="text-bold">{t("sell:know-more")}</button>
        </div>
        <img src={pic5} alt="luxury apartment" />
      </div>
      <div className="sellwith-ready__gridbox">
        <img src={pic5} alt="luxury apartment" />
        <div>
          <h3>{t("sell:ready-to-go")}</h3>
          <p>
          {t("sell:today-connect-with-agent")}
          </p>
          <div className="desktop">
            <input
              type="text"
              placeholder={t("buy:city-address-code")}
            ></input>
            <Link to="/search">{t("sell:next")}</Link>
          </div>
        </div>
      </div>
      <div className="sellwith-opinions">
        <ImQuotesLeft/>
        <h3>{t("sell:opinions")}</h3>
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
