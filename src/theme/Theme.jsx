import Modal from "../components/Modal";
import BackgroundColor from "./BackgroundColor";
import PrimaryColor from "./PrimaryColor";
import { primaryColors, backgroundColors } from "./data";
import "./theme.css";
import { useLanguage } from "./LanguageContext";

const Theme = () => {
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
      <div className="theme__background-wrapper">
        <h5>{language === "en" ? "Background Color" : "Couleur de Fond"}</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
