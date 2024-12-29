import AboutImage from "../../assets/header2-removebg.png";
import "./about.css";
import { useLanguage } from "../../theme/LanguageContext";
import { useEffect } from "react";

const About = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Function to add the animation class
    function animateOnScroll(entries, _observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // Optional: Remove for re-trigger
        }
      });
    }

    // Create the Intersection Observer
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Target the circles
    const circles = document.querySelectorAll(
      ".circle-background, .circle-background2"
    );
    circles.forEach((circle) => observer.observe(circle));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about__container" data-aos="fade-up">
        <div className="about__content">
          <div className="circle-background2"></div>
          <div className="about__portrait">
            <img src={AboutImage} alt="About Nick" className="about__image" />
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
