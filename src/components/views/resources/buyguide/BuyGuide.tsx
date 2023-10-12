import { Link } from "react-router-dom";
import guide from "../../../../images/icons/guide.png";
import costs from "../../../../images/icons/costs.png";
import foreign from "../../../../images/icons/foreign.png";
import steps from "../../../../images/icons/steps.png";
import choose from "../../../../images/icons/choose.png";
import "./buyguide.scss";
import { useAppDispatch, useAppSelector } from "../../../store/configureStore";
import { setPage } from "../../../store/utilitySlice";
import i18next from "i18n";

export default function BuyGuide() {
  const t= i18next.t;

  const { page } = useAppSelector((state) => state.utility);
  const dispatch = useAppDispatch();

  console.log(page);
  return (
    <div className="flex-container">
      <header className="guide-header">
        <aside>
          <h1>{t("resources:your-complete-guide")}</h1>
          <p>
            {t("resources:buying-or-selling")}
          </p>
        </aside>
        <img src={guide} alt="buy guide"></img>
      </header>
      <article className="guide-subject-choice">
        <p
          onClick={() => {
            dispatch(setPage("buy"));
          }}
          className={page === "buy" ? "choice-active" : " "}
        >
          {t("resources:real-estate-guide")}
        </p>
        <p
          onClick={() => {
            dispatch(setPage("sell"));
          }}
          className={page === "sell" ? "choice-active" : " "}
        >
          {t("resources:sales-guide")}
        </p>
      </article>
      {page === "buy" ? (
        <article className="buy-guide">
          <div className="box1">
            <Link to="/guides/how-to-buy-a-house">
              <img src={steps} alt="steps"></img>
              <h3>{t("resources:buy-house-7-steps")}</h3>
              <h4>{t("resources:continue")}</h4>
            </Link>{" "}
          </div>
          <div className="box2">
            <a href="https://www.biznes.gov.pl/pl/opisy-procedur/-/proc/209">
              <img src={foreign} alt="foreigner buy"></img>
              <h3>
                {t("resources:how-to-buy-real-estate")}
              </h3>
              <h4>{t("resources:continue")}</h4>
            </a>
          </div>
          <div className="box3">
            <Link to="/guides/how-to-choose-real-estate-agent">
              <img src={choose} alt="choose agent"></img>
              <h3>
                {t("resources:how-to-choose")}
              </h3>
              <h4>{t("resources:continue")}</h4>
            </Link>
          </div>
          <div className="box4">
            <Link to="/guides/real-estate-commision">
              <img src={costs} alt="agent costs"></img>
              <h3>{t("resources:about-real-estate")}</h3>
              <h4>{t("resources:continue")}</h4>
            </Link>
          </div>
        </article>
      ) : (
        <article className="buy-guide">
          <div className="box1">
            <Link to="/guides/how-to-prepare-my-home">
              <img src={steps} alt="steps"></img>
              <h3>{t("resources:how-to-prepare-to-sell")}</h3>
              <h4>{t("resources:continue")}</h4>
            </Link>
          </div>
          <div className="box2">
            <a href="https://www.biznes.gov.pl/pl/opisy-procedur/-/proc/209">
              <img src={foreign} alt="foreigner buy"></img>
              <h3>
                {t("resources:sell-estate-in-poland")}
              </h3>
              <h4>{t("resources:continue")}</h4>
            </a>
          </div>
          <div className="box3">
            <Link to="/guides/how-to-choose-real-estate-agent">
              <img src={choose} alt="choose agent"></img>
              <h3>
                {t("resources:how-to-choose-agent")}
              </h3>
              <h4>{t("resources:continue")}</h4>
            </Link>
          </div>
          <div className="box4">
            <Link to="/guides/real-estate-commision">
              <img src={costs} alt="agent costs"></img>
              <h3>{t("resources:about-real-estate-agent-commission")}</h3>
              <h4>{t("resources:continue")}</h4>
            </Link>
          </div>
        </article>
      )}
    </div>
  );
}
