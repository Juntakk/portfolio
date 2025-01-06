/* eslint-disable react-hooks/exhaustive-deps */
import "./styles/socials.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Socials = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to hide the container when scrolling
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`socials__container ${isScrolling ? "none" : ""}`}>
      <a href="https://www.linkedin.com/in/nickhabashigauthier/">
        <IoLogoLinkedin />
        <span className="tooltip">LinkedIn</span>
      </a>
      <a href="https://github.com/Juntakk">
        <FaSquareGithub />
        <span className="tooltip">Github</span>
      </a>
    </div>
  );
};

export default Socials;
