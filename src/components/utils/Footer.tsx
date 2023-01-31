import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h1 className="footer-title1">Dołącz do nas</h1>
      <div className="footer-text1">
        <Link to="/">
          <span className="text-bold"> Zostań Agentem RealN</span>
        </Link>
        <Link to="/">
          <span className="text-bold">Skontaktuj się z nami</span>
        </Link>
        <Link to="/">
          <span className="text-bold">Zobacz wszystkie oferty</span>
        </Link>
      </div>
      <h1 className="footer-title2">O nas</h1>
      <div className="footer-text2">
        <Link to="/">Nasza misja</Link>
        <Link to="/">O firmie</Link>
        <Link to="/">Możliwości rozwoju</Link>
        <Link to="/">Reklama</Link>
        <Link to="/">Regulamin</Link>
        <Link to="/">Polityka prywatności</Link>
      </div>
      <h1 className="footer-title3">Znajdź nas</h1>
      <div className="footer-text3">
        <Link to="/">Kontakt</Link>
        <Link to="/">Pomoc</Link>
        <Link to="/">Facebook</Link>
        <Link to="/">Twitter</Link>
        <Link to="/">Instagram</Link>
      </div>
      <div className="footer-text4"></div>
    </footer>
  );
};

export default Footer;
