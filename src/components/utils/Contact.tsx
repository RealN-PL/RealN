import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <header className="contact-header">
        <article>
          <h1>Skontaktuj się z nami!</h1>
          <p>
            Jesteśmy do Twojej dyspozycji! <br />
            Nasze biuro jest otwarte codziennie w godzinach 8:00 - 17:00.
          </p>
        </article>
      </header>
      <div className="contact-box">
        <div className="phone-box">
          {" "}
          <i className="fa-solid fa-phone"></i>
          <a href="tel: 500-000-000">500 000 000</a>
          <p>Zadzwoń do nas w razie wszelkich problemów</p>
        </div>
        <div className="message-box">
          {" "}
          <i className="fa-regular fa-message"></i>
          <a href="tel: 500-000-000">Napisz do nas</a>
          <p>Wyślij do naszego Zespołu Obsługi Klienta pytania dotyczące naszej strony, aplikacji lub Agenta RealN</p>
        </div>
        <div className="connect-box">
          {" "}
          <i className="fa-solid fa-share-nodes"></i>
          <h3>Znajdź nas </h3>
         <div className="contact-icons-holder"> <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-google"></i><i className="fa-brands fa-instagram"></i>
         </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
