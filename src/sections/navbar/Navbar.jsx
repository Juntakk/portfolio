import data_en from "./data";
import data_fr from "./data_fr";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "./navbar.css";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";
import CV from "../../assets/Nicolas_Gauthier_DEV.pdf";
import CV_FR from "../../assets/Nicolas_Gauthier_DEV_fr.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { useThemeContext } from "../../context/theme-context";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { language } = useLanguage();
  const { themeState } = useThemeContext();
  const data = language === "en" ? data_en : data_fr;

  const isDarkMode = themeState.background === "bg-2";

  return (
    <nav>
      <div className="container nav__container">
        <a
          href={language === "en" ? CV : CV_FR}
          download={
            language === "en"
              ? "Nicolas_Gauthier_DEV.pdf"
              : "Nicolas_Gauthier_DEV_fr.pdf"
          }
          className="cv"
        >
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
            {isDarkMode ? (
              <MdOutlineDarkMode style={{ fontWeight: 55 }} />
            ) : (
              <MdDarkMode style={{ fontWeight: 55 }} />
            )}
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
