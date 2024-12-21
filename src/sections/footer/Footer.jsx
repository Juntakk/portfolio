import "./footer.css";
import { useLanguage } from "../../theme/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer>
      <div className="footer__copyright">
        <small>
          2024 Nicolas H. Gauthier &copy;{" "}
          {language === "en" ? "All Rights Reserved" : "Tous droits réservés"}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
