import { useLanguage } from "./LanguageContext";
import { IoEarth } from "react-icons/io5";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();

  return (
    <span onClick={toggleLanguage}>
      <IoEarth />
    </span>
  );
};

export default LanguageToggle;
