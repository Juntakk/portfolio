import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { useLanguage } from "../../theme/LanguageContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Project from "./Project";

const Projects = ({ projects, data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // const { language } = useLanguage();

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="portfolio__projects"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      {isMobile ? (
        <>
          {/* <p className="swipeMsg">
            {language === "en" ? "Swipe to explore" : "Glissez pour explorer"}
          </p> */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={2}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project) => (
              <>
                <SwiperSlide key={project.id}>
                  <Project project={project} data={data} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <p className="slideNumber">
            {activeSlide + 1} / {projects.length}
          </p>
        </>
      ) : (
        projects.map((project) => (
          <Project key={project.id} project={project} data={data} />
        ))
      )}
    </div>
  );
};

export default Projects;
