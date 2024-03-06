import data_en from "./data";
import data_fr from "./data_fr";
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;

  return (
    <nav>
      <div className="container nav__container">
        <i className="nav__logo">
          <LanguageToggle />
        </i>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
