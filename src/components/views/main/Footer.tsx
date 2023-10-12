import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import i18next from 'i18n';

const Footer = () => {
  const t = i18next.t;

  return (
    <footer>
      <h1 className="footer-title1">{t("main:join-us")}</h1>
      <div className="footer-text1">
        <Link to="/">
          <span className="text-bold">{t("main:become-agent")}</span>
        </Link>
        <Link to="/">
          <span className="text-bold">{t("main:contact-us")}</span>
        </Link>
        <Link to="/">
          <span className="text-bold">{t("main:see-all-offers")}</span>
        </Link>
      </div>
      <h1 className="footer-title2">{t("main:about-us")}</h1>
      <div className="footer-text2">
        <Link to="/">{t("main:our-mission")}</Link>
        <Link to="/about">{t("main:about-company")}</Link>
        <Link to="/possibilities">{t("main:development-opportunities")}</Link>
        <Link to="/">{t("main:advertisement")}</Link>
        <Link to="/statue">{t("main:state")}</Link>
        <Link to="/privacy-policy">{t("main:privacy-policy")}</Link>
      </div>
      <h1 className="footer-title3">{t("main:find-us")}</h1>
      <div className="footer-text3">
        <Link to="/contact">{t("main:contact")}</Link>
        <Link to="/">{t("main:help")}</Link>
        <Link to="/">{t("main:facebook")}</Link>
        <Link to="/">{t("main:twitter")}</Link>
        <Link to="/">{t("main:instagram")}</Link>
      </div>
      <div className="footer-text4"></div>
    </footer>
  );
};

export default Footer;
