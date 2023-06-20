import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
const SmallContact = () => {
  return (
    <article className="main-contact">
      <aside className="main-contact-text">
        <h1>Twój Agent RealN jest tutaj, aby pomóc</h1>
        <p>Rozpocznij swoje poszukiwania już teraz!</p>
      </aside>
      <aside className="main-contact-input">
        <p>Gdzie szukasz nieruchomości?</p>
        <aside className="input-holder">
          <input type="text" placeholder="Miasto, adres, kod pocztowy"></input>{" "}
          <HiOutlineMagnifyingGlass className="main-glass-icon" />
        </aside>
      </aside>
    </article>
  );
};

export default SmallContact;
