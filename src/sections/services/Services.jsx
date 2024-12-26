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
      {/* <p>
        {language === "en"
          ? "Here are the Languages / Frameworks for which I can offer my services with their respective level of skill"
          : "Voici les langages / frameworks pour lesquels je peux offrir mes services, avec leur niveau de compétence respectif "}
      </p> */}

      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <ProgressBar completed={item.level} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
