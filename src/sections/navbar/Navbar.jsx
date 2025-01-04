import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useModalContext } from "../../context/modal-context";
import { useLanguage } from "../../theme/LanguageContext";
import LanguageToggle from "../../theme/LanguageToggle";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { useThemeContext } from "../../context/theme-context";
import { useEffect, useState } from "react";
import CV from "../../assets/NicolasGauthier_Dev.pdf";
import data_en from "./data";
import data_fr from "./data_fr";
import "./navbar.css";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { language } = useLanguage();
  const { themeState } = useThemeContext();
  const data = language === "en" ? data_en : data_fr;
  const [activeSection, setActiveSection] = useState(1); // Tracks the current section

  const isDarkMode = themeState.background === "bg-2";
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (activeSection) {
      setCompleted(false); // Reset state when section changes
      const timer = setTimeout(() => setCompleted(true), 1200); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

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
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            console.log(sectionId);
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold to your preferenc
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <div className="nav__container">
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
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`${
                  activeSection === item.link.replace("#", "")
                    ? `active ${completed ? "animation-complete" : ""}`
                    : ""
                }`}
                aria-current={
                  activeSection === item.link.replace("#", "")
                    ? "true"
                    : "false"
                }
              >
                {item.title} - 0{item.id}
              </a>
            </li>
          ))}
        </ul>

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
      </div>
    </nav>
  );
};

export default Navbar;
