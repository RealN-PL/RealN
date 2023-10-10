import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import i18next from "i18n";

const SmallContact = () => {
  const t = i18next.t;
  return (
    <article className="main-contact">
      <aside className="main-contact-text">
        <h1>{t("utils:agent-is-here-to-help")}</h1>
        <p>{t("utils:start-now")}</p>
      </aside>
      <aside className="main-contact-input">
        <p>{t("utils:where-you-search")}</p>
        <aside className="input-holder">
          <input type="text" placeholder={t("utils:city-address")}></input>{" "}
          <HiOutlineMagnifyingGlass className="main-glass-icon" />
        </aside>
      </aside>
    </article>
  );
};

export default SmallContact;
