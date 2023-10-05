import React from "react";
import "./contact.scss";
import i18next from 'i18n';

const Contact = () => {
  const t = i18next.t;

  return (
    <>
      <header className="contact-header">
        <article>
          <h1>{t("main:contact-us")}</h1>
          <p>
          {t("main:we-are-disposal")} <br />
          {t("main:open-time")}
          </p>
        </article>
      </header>
      <div className="contact-box">
        <div className="phone-box">
          {" "}
          <i className="fa-solid fa-phone"></i>
          <a href="tel: 500-000-000">500 000 000</a>
          <p>{t("main:call-us")}</p>
        </div>
        <div className="message-box">
          {" "}
          <i className="fa-regular fa-message"></i>
          <a href="tel: 500-000-000">{t("main:write-to00-us")}</a>
          <p>{t("main:customer-service")}</p>
        </div>
        <div className="connect-box">
          {" "}
          <i className="fa-solid fa-share-nodes"></i>
          <h3>{t("main:find-us")}</h3>
         <div className="contact-icons-holder"> <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-google"></i><i className="fa-brands fa-instagram"></i>
         </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
