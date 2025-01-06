import { useLanguage } from "./LanguageContext";

const Themes = () => {
  const { language } = useLanguage();

  return (
    <div className="theme__modal">
      <h3>
        {language === "en" ? "Customization Station" : "Personnalisation"}
      </h3>
      <div className="theme__primary-wrapper">
        <h5> {language === "en" ? "Primary Color" : "Couleur Primaire"}</h5>
        <div className="theme__primary-colors"></div>
      </div>
    </div>
  );
};

export default Themes;
