import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import "../propertyDetails.scss";
import { useEffect, useState } from "react";
import i18next from 'i18n';

export default function PropNav() {
  const t = i18next.t;
  const [isSticky, setIsSticky] = useState(false);
  const initialOffset = 70;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > initialOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`property-nav ${isSticky ? "sticky" : ""}`}
      style={{ top: isSticky ? 0 : initialOffset }}>
      <div>
        <a href="/catalog">
          <AiOutlineArrowLeft />
          {t("buy:to-search-results")}
        </a>
        <a href="/">{t("buy:about-the-facility")}</a>
        <a href="/">{t("buy:details")}</a>
        <a href="/">{t("buy:additional-info")}</a>
      </div>

      <div className="property-icons">
        <AiFillHeart/>
        <FaShare />
      </div>
    </nav>
  );
}
