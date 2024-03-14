import data_en from "./data";
import data_fr from "./data_fr";
import Card from "../../components/Card";
import "./services.css";
import ProgressBar from "./ProgressBar";
import { useLanguage } from "../../theme/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;

  return (
    <section id="services">
      <h2>{language === "en" ? "My Knowledge" : "Mes Connaissances"}</h2>
      <p>
        {language === "en"
          ? "Here are the Languages / Frameworks for which I can offer my services with their respective level of skill"
          : "Voici les langages / frameworks pour lesquels je peux offrir mes services, avec leur niveau de compétence respectif "}
      </p>

      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <ProgressBar completed={item.level} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
