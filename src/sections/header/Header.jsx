/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "particles.js";
import "./header.css";
import { useLanguage } from "../../theme/LanguageContext";
import { useThemeContext } from "../../context/theme-context";

const Header = () => {
  const { language } = useLanguage();
  const themeContext = useThemeContext();
  const [particleColor, setParticleColor] = useState(null); // Initialize as null

  const colorMap = {
    "color-1": "#ffab91", // Soft coral to contrast the grayish tones
    "color-2": "#d4e157", // Bright lime to pop against the greens
    "color-3": "#f48fb1", // Light pink to complement the warm pinkish tones
    "color-4": "#ff8a65", // Warm orange for a vibrant contrast to the reds
    "color-5": "#81d4fa", // Light cyan to contrast the blue-gray tones
    "color-6": "#aed581", // Fresh green to offset the teal-green tones
  };

  const handleParticleColor = (theme) => colorMap[theme] || "#CCCCCC"; // Default color

  // Update particle color when the theme changes
  useEffect(() => {
    if (themeContext?.themeState?.primary) {
      const newColor = handleParticleColor(themeContext.themeState.primary);
      setParticleColor(newColor);
    }
  }, [themeContext.themeState.primary]);

  // Initialize particlesJS when the particleColor is set
  useEffect(() => {
    AOS.init({ duration: 2000 });

    if (!particleColor) return; // Ensure particleColor is valid

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 10, density: { enable: true, value_area: 700 } },
        color: { value: particleColor },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 3 },
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 0.1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 105,
          random: false,
          anim: { enable: false, speed: 40, size_min: 10, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 15,
          color: particleColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
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
          onhover: { enable: false, mode: "bubble" },
          onclick: { enable: false, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 200,
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
  }, [particleColor]);

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
    const socialsContainer = document.querySelector(".header__socials");

    if (socialsContainer) {
      socialsContainer.addEventListener("mouseover", handleHover);
      socialsContainer.addEventListener("mouseout", handleHoverEnd);
    }
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listeners when the component unmounts
    return () => {
      if (socialsContainer) {
        socialsContainer.removeEventListener("mouseover", handleHover);
        socialsContainer.removeEventListener("mouseout", handleHoverEnd);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  return (
    <header id="header">
      <div id="particles-js" className="particles__container"></div>
      <div className="container header__container">
        <h1 className="myName">
          <span className="typing">Nicolas Gauthier</span>
        </h1>
        {/* <p data-aos="fade-up" className="desc_p">
          {language === "en"
            ? "Proficient in Web and Mobile Development, Ready to Contribute to Innovative Teams and Challenging Projects."
            : "Compétent en développement web et mobile, prêt à contribuer à des équipes innovantes et à des projets stimulants."}
          <br />
        </p> */}
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
