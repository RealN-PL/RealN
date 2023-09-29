import "./about.scss";
import i18next from 'i18n';

export default function About() {
  const t = i18next.t;
  return (
    <>
      <header className="about-header">
        <h1>{t('about:who-we-are')}</h1>
      </header>
      <div className="about-box">
      <article>
        <h1>{t('about:the-best-agents')}</h1>

        <p>{t('about:we-connect-local')}</p>
        <p><strong>{t('about:realn-agents')}</strong> {t('about:are-among-the')}</p>
        <p><strong>{t('about:our-technology-team')}</strong> {t('about:realn-is-a-group')}</p>
          
        <h3>{t('about:sell-your-house')}</h3>
        <p>{t('about:indepentent-research')}</p>
        
        <h3>{t('about:save-thousands')}</h3>
        <p>{t('about:when-you-buy-and-sell')}</p>
          
        <h3>{t('about:we-invite')}</h3>
        <p>{t('about:schedule-an-appointment')}</p>
      </article>

      <article>
        <h1>{t('about:realn-technology')}</h1>

        <p>{t('about:our-realn-technology-team')}</p>
        <p> {t('about:our-mission')}</p>
          
        <p><strong>{t('about:experience-and-knowledge')}</strong> {t('about:our-experts-have-many')}</p>
        <p><strong>{t('about:innovation')}</strong> {t('about:our-team-is-constantly')}</p>
        <p><strong>{t('about:advanced-ai-tools')}</strong> {t('about:we-operate-at-the-border')}</p>
        <p><strong>{t('about:agent-support')}</strong> {t('about:technological-solutions')}</p>
        <p><strong>{t('about:security-and-privacy')}</strong> {t('about:technology-team-pays')}</p>

        <p>{t('about:we-can-provide-our-clients')}</p>
      </article>

      <article>
        <h1>{t('about:partners-on-the-path-to-success')}</h1>

        <p>{t('about:not-only-real-estate-professionals')}</p>
        <p><strong>{t('about:experience-and-wisdom')}</strong> {t('about:agents-are-experienced')}</p>
        <p><strong>{t('about:local-knowledge')}</strong> {t('about:agents-are-familiar')}</p>
        <p><strong>{t('about:support-and-advice')}</strong> {t('about:find-the-righ-property')}</p>
        <p><strong>{t('about:personalized-service')}</strong> {t('about:each-client-is-unique')}</p>
        <p><strong>{t('about:integrated-technologies')}</strong> {t('about:access-to-advanced-tools"')}</p>
        <p><strong>{t('about:taking-care-of-interest')}</strong> {t('about:agents-work-for-you')}</p>
        <p><strong>{t('about:proven-successes')}</strong> {t('about:many-successful-transactions')}</p>

        <p>{t('about:real-estate-transaction')}</p>
      </article>
      </div>
    </>
  );
}
