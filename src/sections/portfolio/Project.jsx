// import { NavLink } from "react-router-dom";
// import Card from "../../components/Card";
import React, { useEffect } from "react";
// import { useLanguage } from "../../theme/LanguageContext";

const Project = ({ project, data }) => {
  const projectData = data[project.id - 1];
  // const language = useLanguage();

  useEffect(() => {
    // Define a reusable function for the event listener
    const toggleCardFlip = (event) => {
      const project = event.currentTarget;
      const innerCard = project.querySelector(".inner_card");
      if (innerCard) {
        innerCard.classList.toggle("flipped");
      }
    };

    // Add event listener to all projects
    const projects = document.querySelectorAll(".portfolio__project");
    projects.forEach((project) => {
      project.addEventListener("click", toggleCardFlip);
    });

    // Cleanup function to remove event listeners
    return () => {
      projects.forEach((project) => {
        project.removeEventListener("click", toggleCardFlip);
      });
    };
  }, []);

  return (
    <>
      <div className="portfolio__project">
        <div className="inner_card">
          <div className="front">
            <img src={projectData.image} alt="" />
          </div>
          <div className="back">
            <p className="title">{projectData.title}</p>
            <p className="info">{projectData.info}</p>
            <p className="desc">{projectData.desc}</p>
            <p></p>
            <div className="btn_div">
              {/* <NavLink to={"/project-details"} state={{ projectData }}>
                {language === "en" ? "View Details" : "Voir Détails"}
              </NavLink> */}
              {projectData.demo.startsWith("http") ? (
                <a
                  className="btn_demo"
                  href={projectData.demo}
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Demo
                </a>
              ) : (
                ""
              )}

              <a
                className="btn_git"
                href={projectData.github}
                target="_blank"
                rel="noopner noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
