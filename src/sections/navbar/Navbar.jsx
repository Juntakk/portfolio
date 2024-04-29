import data_en from "./data";
import data_fr from "./data_fr";
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";
import CV from "../../assets/CV_V2_R.pdf";
import CV_FR from "../../assets/CV_V2_FR_R.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;

  return (
    <nav>
      <div className="container nav__container">
        <a href={language === "en" ? CV : CV_FR} download className="cv">
          <span className="cv__text">{language === "en" ? "CV" : "CV"}</span>{" "}
          <LiaCloudDownloadAltSolid className="icon" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="nav__right">
          <button className="theme__icon" onClick={showModalHandler}>
            <IoIosColorPalette />
          </button>
          <span className="line">|</span>
          <i className="nav__logo">
            <LanguageToggle />
          </i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
