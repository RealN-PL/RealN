import "./possibilities.scss";
import i18next from '../../../../i18n';

export default function Possibilities() {
  const t = i18next.t;
  return (
    <div className="possibilities-container">
      <header className="header">
        <h1>{t('resources:possibilities')}</h1>
      </header>
      <div className="box">
          <article>
          <h1>{t('resources:possibilities-in-realn')}</h1>

          <p>{t('resources:we-belive')}</p>
            
          <h3>{t('resources:agent-career')}</h3>
          <p><strong>{t('resources:support')}</strong> {t('resources:support-text')}</p>
          <p><strong>{t('resources:flexibility')}</strong> {t('resources:flexibility-text')}</p>
          <p><strong>{t('resources:possible-income')}</strong> {t('resources:possible-income-text')}</p>
          <p><strong>{t('resources:connections')}</strong> {t('resources:connections-text')}</p>
          <p><strong>{t('resources:tech-support')}</strong> {t('resources:tech-support-text')}</p>
        
          <h3>{t('resources:realn-career')}</h3>
          <p><strong>{t('resources:innovative-projects')}</strong> {t('resources:innovative-projects-text')}</p>
          <p><strong>{t('resources:experts')}</strong> {t('resources:experts-text')}</p>
          <p><strong>{t('resources:company-development')}</strong> {t('resources:company-development-text')}</p>
          <p><strong>{t('resources:future-creation')}</strong> {t('resources:future-creation-text')}</p>
        
          <p>{t('resources:not-important')}</p>
        </article>
      </div>
    </div>
  );
}
