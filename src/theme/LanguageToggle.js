import { useLanguage } from "./LanguageContext";
import { IoEarth } from "react-icons/io5";
import "./theme.css";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <>
      <span onClick={toggleLanguage} className="language__toggle">
        <IoEarth />
      </span>
      <p>{language === "en" ? "FR" : "EN"}</p>
    </>
  );
};

export default LanguageToggle;
