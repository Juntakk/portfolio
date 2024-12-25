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
  const [particleColor, setParticleColor] = useState(null);
  const texts =
    language === "en"
      ? ["Web", "Mobile", "Video Game"]
      : ["Web", "Mobile", "de Jeux Vidéo"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  const colorMap = {
    "color-1": "#2E8B57", // Soft coral to contrast the grayish tones
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
        number: { value: 13, density: { enable: false, value_area: 2000 } },
        color: { value: particleColor },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#545454FF" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: false, speed: 0.08, opacity_min: 0, sync: false },
        },
        size: {
          value: 90,
          random: false,
          anim: { enable: false, speed: 15, size_min: 60, sync: false },
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
          speed: 1.5,
          direction: "bottom",
          random: true,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 },
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

  useEffect(() => {
    const handleTyping = () => {
      if (isPaused) {
        return;
      }
      const fullText = texts[currentIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 1500);
          setIsDeleting(true);
          setTypingSpeed(100); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTypingSpeed(175); // Reset typing speed
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, texts, currentIndex, isPaused]);

  return (
    <header id="header">
      <div id="particles-js" className="particles__container"></div>
      <div className="container header__container">
        <h1 className="myName">
          <span className="typing iceland-regular">Nicolas H. Gauthier</span>
        </h1>
        {/* <p data-aos="fade-up" className="desc_p">
          {language === "en"
            ? "Proficient in Web and Mobile Development, Ready to Contribute to Innovative Teams and Challenging Projects."
            : "Compétent en développement web et mobile, prêt à contribuer à des équipes innovantes et à des projets stimulants."}
          <br />
        </p> */}
        <p className="desc_p typing-effect">
          {" "}
          {language === "en"
            ? currentText + " Developer"
            : "Développeur " + currentText}
        </p>
        <div className="header__cta" data-aos="fade-up">
          <button className="ui-btn">
            <a href="#contact" className="">
              Contact
            </a>
          </button>
          <button className="ui-btn">
            <a href="#portfolio" className="">
              {language === "en" ? "Projects" : "Projets"}
            </a>
          </button>
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
