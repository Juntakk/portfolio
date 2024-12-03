import { useEffect, useState } from "react";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "particles.js";
import "./header.css";
import { useLanguage } from "../../theme/LanguageContext";

const Header = () => {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: "#88988E" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 3 },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: false,
          anim: { enable: false, speed: 40, size_min: 20, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#87837c",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "repulse" },
          onclick: { enable: false, mode: "push" },
          resize: false,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: false,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const socialsContainer = document.querySelector(".header__socials");
      const scrollThreshold = 1; // Adjust the threshold as needed

      if (window.scrollY > scrollThreshold || isHovered) {
        socialsContainer.classList.add("show");
        clearTimeout(timeoutId);
      } else {
        socialsContainer.classList.remove("show");
      }
    };

    const handleHover = () => {
      setIsHovered(true);
    };

    const handleHoverEnd = () => {
      setIsHovered(false);

      // Add a delay before checking scroll position again to prevent immediate fade-out
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 30); // Adjust the delay as needed (in milliseconds)
    };

    // Attach the event listeners when the component mounts
    window.addEventListener("scroll", handleScroll);
    document
      .querySelector(".header__socials")
      .addEventListener("mouseover", handleHover);
    document
      .querySelector(".header__socials")
      .addEventListener("mouseout", handleHoverEnd);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document
        .querySelector(".header__socials")
        .removeEventListener("mouseover", handleHover);
      document
        .querySelector(".header__socials")
        .removeEventListener("mouseout", handleHoverEnd);
    };
  }, [isHovered]);

  return (
    <header id="header">
      <div id="particles-js" className="particles__container"></div>
      <div className="container header__container">
        <h1 data-aos="fade-up">Nicolas Habashi Gauthier</h1>
        <p data-aos="fade-up">
          {language === "en"
            ? "Proficient in Web and Mobile Development, Ready to Contribute to Innovative Teams and Challenging Projects."
            : "Compétent en développement web et mobile, prêt à contribuer à des équipes innovantes et à des projets stimulants."}
          <br />
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            {language === "en" ? "Let's Talk" : "Discutons"}
          </a>
          <a href="#portfolio" className="btn light projectBtn">
            {language === "en" ? "My Projects" : "Mes Projets"}
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
