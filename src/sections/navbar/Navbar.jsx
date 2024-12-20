import data_en from "./data";
import data_fr from "./data_fr";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "./navbar.css";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";
import CV from "../../assets/NicolasGauthier_Dev.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { useThemeContext } from "../../context/theme-context";
import { useEffect } from "react";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { language } = useLanguage();
  const { themeState } = useThemeContext();
  const data = language === "en" ? data_en : data_fr;

  const isDarkMode = themeState.background === "bg-2";

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const navBar = document.querySelector(".nav__container");
      const scrollThreshold = 1; // Adjust the threshold as needed

      if (window.scrollY > scrollThreshold) {
        navBar.classList.add("show");
      } else {
        navBar.classList.remove("show");
      }
    };

    // Debounce the scroll handler
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 30); // Adjust the debounce time as needed
    };

    window.addEventListener("scroll", debouncedScroll);

    // Clean up the event listeners and timeout
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav>
      <div className="nav__container">
        <a
          href={CV}
          download={
            language === "en"
              ? "NicolasGauthier_Dev.pdf"
              : "NicolasGauthier_Dev_fr.pdf"
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
