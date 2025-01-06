import "./services.css";
import "magic.css/dist/magic.min.css";

import { GrLaunch } from "react-icons/gr";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa";
import data_en from "./data";
import data_fr from "./data_fr";
import { useLanguage } from "../../theme/LanguageContext";
import { useEffect, useRef, useState } from "react";
import useVisibility from "../../hooks/useVisibility";

//TODO make icons smaller for mobile devices
const Services = () => {
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;
  const [isMobile, setIsMobile] = useState(false);

  const myRef = useRef();
  const isVisible = useVisibility(myRef, 0.1);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  return (
    <section id="services" ref={myRef}>
      <h2 className={`${isVisible ? "magictime slideRightReturn" : "none"}`}>
        Services
      </h2>
      <div class="container services__container">
        {/* Card 1 */}
        <div
          className={`card one ${
            isVisible ? "magictime slideLeftReturn" : "none"
          }`}
        >
          <div class="face face1">
            <div class="content">
              <span>
                <TfiLayoutAccordionList size={isMobile ? 45 : 75} />
              </span>
              <h3>Design</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>{data[0].text}</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className={`card two ${
            isVisible ? "magictime slideLeftReturn" : "none"
          }`}
        >
          <div class="face face1">
            <div class="content">
              <span>
                <FaLaptopCode size={isMobile ? 45 : 75} />
              </span>{" "}
              <h3>Code</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>{data[1].text}</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className={`card three ${
            isVisible ? "magictime slideLeftReturn" : "none"
          }`}
        >
          <div class="face face1">
            <div class="content">
              <span>
                <GrLaunch size={isMobile ? 45 : 75} />
              </span>
              <h3>Launch</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>{data[2].text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div
        className={`statistics__row ${
          isVisible ? "magictime slideLeftReturn" : "none"
        }`}
      >
        <div className="statistic">
          <h3>20+</h3>
          <p>Successful Projects</p>
        </div>
        <div className="statistic">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
        <div className="statistic">
          <h3>10+</h3>
          <p>Tools / Frameworks</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
