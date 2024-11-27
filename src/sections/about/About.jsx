import AboutImage from "../../assets/header.jpg";
import "./about.css";
import { useLanguage } from "../../theme/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container about__container" data-aos="fade-up">
        <div className="about__content">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Nick" className="about__image" />
          </div>
          <div className="about__text">
            <h1 className="about__headline">
              {language === "en"
                ? "I'm Nick, a full-stack developer passionate about building impactful web and mobile applications. I excel at crafting user-friendly designs, solving complex problems, and collaborating. Ready to bring my skills to your team and create extroardinary stuff!"
                : "Je suis Nick, développeur full-stack passionné par la création d'applications web et mobiles. Je conçois des expériences intuitives, résous des problèmes techniques complexes et adore travailler en équipe. Prêt à rejoindre votre équipe pour construire des projets exceptionnels !"}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
