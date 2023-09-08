import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import "../propertyDetails.scss";
import { useEffect, useState } from "react";

export default function PropNav() {

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
          Do wyników wyszukiwania
        </a>
        <a href="/">O obiekcie</a>
        <a href="/">Szczegóły</a>
        <a href="/">Dodatkowe informacje</a>
      </div>

      <div className="property-icons">
        <AiFillHeart/>
        <FaShare />
      </div>
    </nav>
  );
}
