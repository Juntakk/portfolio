import AboutImage from "../../assets/header.jpg";
import CV from "../../assets/CV.pdf";
import CV_FR from "../../assets/CV_FR.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import data_en from "./data";
import data_fr from "./data_fr";
import Card from "../../components/Card";
import "./about.css";
import { useLanguage } from "../../theme/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <h1>
            {language === "en"
              ? "I'm Nick, a Full-Stack Programmer with a hunger for knowledge"
              : "Je suis Nick, un programmeur Full-Stack avec une soif d'apprentissage"}
          </h1>

          <p>
            {language === "en"
              ? "I've spent the last 2 years learning, practicing and honing my coding skills with various projects and hobbies and I am ready to use these skills to make a difference somewhere, somehow."
              : "J'ai passé les deux dernières années à apprendre, pratiquer et perfectionner mes compétences en programmation avec divers projets et hobbies, et je suis prêt à utiliser ces compétences pour faire une différence quelque part, de quelque manière que ce soit."}
          </p>

          <a
            href={language === "en" ? CV : CV_FR}
            download
            className="btn primary"
          >
            {language === "en" ? "Download my CV" : "Téléchargez mon CV"}
            <LiaCloudDownloadAltSolid className="icon" />
          </a>
        </div>

        <div className="about__portrait">
          <img src={AboutImage} alt="About" />
        </div>

        <div className="about__right">
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
