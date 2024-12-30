import data from "./data";
import Card from "../../components/Card";
import "./services.css";
import ProgressBar from "./ProgressBar";
import { useLanguage } from "../../theme/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  return (
    <section id="services">
      <h2>{language === "en" ? "Knowledge" : "Connaissances"}</h2>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <ProgressBar level={item.level} title={item.title} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
