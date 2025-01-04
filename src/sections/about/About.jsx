import "./about.css";
import AboutImage from "../../assets/header2-removebg.png";
import { useRef } from "react";
import useVisibility from "../../hooks/useVisibility";
import Donut from "../../components/Donut";
import ContactLinks from "../../components/ContactLinks";

const About = () => {
  const myRef = useRef();
  const isVisible = useVisibility(myRef);

  return (
    <section id="about" ref={myRef}>
      <div
        className={`container about__container ${
          isVisible ? "magictime slideRightReturn" : "none"
        }`}
      >
        <ContactLinks />
        <img src={AboutImage} alt="" className="about__image" />

        <Donut></Donut>
        {/* <div className="about__content">
          <div className="circle-background2"></div>
          <div className="circle-background"></div>
          <h1 className="about__headline">
            {language === "en" ? (
              <>
                I'm Nick, a freelance designer & developer passionate about
                building impactful web and mobile applications, even games.{" "}
                <br />
                Ready to bring my skills to your projects and create amazing
                stuff!
              </>
            ) : (
              <>
                Je suis Nick, designer freelance et développeur passionné par la
                création d'applications web et mobiles, et de jeux vidéo. <br />
                Prêt à vous accompagner pour construire des projets
                exceptionnels!
              </>
            )}
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default About;
