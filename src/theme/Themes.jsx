import Modal from "../components/Modal";
import PrimaryColor from "./PrimaryColor";
import { primaryColors } from "./data";
import "./theme.css";
import { useLanguage } from "./LanguageContext";

const Themes = () => {
  const { language } = useLanguage();

  return (
    <Modal className="theme__modal">
      <h3>
        {language === "en" ? "Customization Station" : "Personnalisation"}
      </h3>
      <div className="theme__primary-wrapper">
        <h5> {language === "en" ? "Primary Color" : "Couleur Primaire"}</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Themes;
