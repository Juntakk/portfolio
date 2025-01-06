import { useLanguage } from "./LanguageContext";
import enImg from "../assets/uk.png";
import frImg from "../assets/france.png";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <>
      <span onClick={toggleLanguage} className="language__toggle">
        <p>
          {language === "en" ? (
            <img src={frImg} alt="Switch to French" className="language-icon" />
          ) : (
            <img
              src={enImg}
              alt="Switch to English"
              className="language-icon"
            />
          )}
        </p>
      </span>
    </>
  );
};

export default LanguageToggle;
