import "./styles/socials.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Socials = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hideOnStop, setHideOnStop] = useState(true);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setHideOnStop(false);

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to hide the container if no scrolling occurs for 1 second
      scrollTimeout = setTimeout(() => {
        setHideOnStop(false);
        setIsScrolling(false);
      }, 1000); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`socials__container ${hideOnStop ? "none" : ""}`}>
      <a href="https://www.linkedin.com/in/nickhabashigauthier/">
        <IoLogoLinkedin />
      </a>
      <a href="https://github.com/Juntakk">
        <FaSquareGithub />
      </a>
    </div>
  );
};

export default Socials;
