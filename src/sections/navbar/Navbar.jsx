import data_en from "./data";
import data_fr from "./data_fr";
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";
import CV from "../../assets/CV.pdf";
import CV_FR from "../../assets/CV_FR.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";

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
        <a href={language === "en" ? CV : CV_FR} download className="cv">
          {language === "en" ? "CV" : "CV"}{" "}
          <LiaCloudDownloadAltSolid className="icon" />
        </a>
        <button className="theme__icon" onClick={showModalHandler}>
          <span className="theme__text">Theme</span>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
