import AboutImage from "../../assets/header.jpg";

// import data_en from "./data";
// import data_fr from "./data_fr";
// import Card from "../../components/Card";
import "./about.css";
import { useLanguage } from "../../theme/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  // const data = language === "en" ? data_en : data_fr;
  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-up">
        <div className="about__portrait">
          <img src={AboutImage} alt="About" className="myimage" />
        </div>
        <div className="headline__container">
          <div className="about__left">
            <h1>
              {language === "en"
                ? "I'm Nick, Full-Stack Developer"
                : "Je suis Nick, Développeur Full-Stack"}
            </h1>
          </div>
        </div>
        {/* <div className="about__right">
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
