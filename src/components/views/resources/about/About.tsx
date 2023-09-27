import "./about.scss";
import i18next from '../../../../i18n';

export default function About() {
  const t = i18next.t;
  return (
    <>
      <header className="about-header">
        <h1>{t('about:title')}</h1>
      </header>
      <article className="buyorrent-box">
      <h1>{t('about:description.header1')}</h1>

      <p>{t('about:description.paragraph1')}</p>
      <p><strong>{t('about:description.underlined1')}</strong> {t('about:description.paragraph2')}</p>
      <p><strong>{t('about:description.underlined2')}</strong> {t('about:description.paragraph3')}</p>
        
      <h3>{t('about:description.header2')}</h3>
      <p>{t('about:description.paragraph4')}</p>
       
      <h3>{t('about:description.header3')}</h3>
      <p>{t('about:description.paragraph5')}</p>
        
      <h3>{t('about:description.header4')}</h3>
      <p>{t('about:description.paragraph6')}</p>
      </article>
    </>
  );
}
