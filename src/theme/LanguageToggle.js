import { useLanguage } from "./LanguageContext";
import "./theme.css";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <>
      <span onClick={toggleLanguage} className="language__toggle">
        <p>{language === "en" ? "FR" : "EN"}</p>
      </span>
    </>
  );
};

export default LanguageToggle;
