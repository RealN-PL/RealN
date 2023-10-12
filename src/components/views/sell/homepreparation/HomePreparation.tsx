import i18next from "i18n";
import "./homepreparation.scss"

export default function HomePreparation() {
  const t = i18next.t;
  return (
    <article>
      <div className="prep-head">
        <h1>{t("sell:how-to-prepare-house-to-sell")}</h1>
      </div>
      <article className="prep-text">
        <h2>
          {t("sell:property-preparation")}
        </h2>
        <h1>{t("sell:cleaning-and-tidying")}</h1>
        <p>
          {t("sell:start-by")}
        </p>
        <h1>{t("sell:repairs-and-maintenance")}</h1>
        <p>
        {t("sell:check-for-defects")}
        </p>

        <h1>{t("sell:painting-and-finishing")}</h1>
        <p>
        {t("sell:if-the-walls")}
        </p>

        <h1>{t("sell:improvements-and-modernization")}</h1>
        <p>
          {t("sell:identify-areas")}
        </p>

        <h1>{t("sell:presentation")}</h1>
        <p>
          {t("sell:present-your-property")}
        </p>

        <h1>{t("sell:gardens-outdoor-space")}</h1>
        <p>
          {t("sell:dont-forget")}
        </p>
      </article>
    </article>
  );
}
