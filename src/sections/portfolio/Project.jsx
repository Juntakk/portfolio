import Card from "../../components/Card";
import React, { useEffect } from "react";

const Project = ({ project, data }) => {
  const projectData = data[project.id - 1];
  useEffect(() => {
    // Add tap functionality for touch devices
    const projects = document.querySelectorAll(".portfolio__project");

    projects.forEach((project) => {
      project.addEventListener("click", () => {
        const innerCard = project.querySelector(".inner_card");
        innerCard.classList.toggle("flipped");
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      projects.forEach((project) => {
        project.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <>
      <Card className="portfolio__project">
        <div className="inner_card">
          <div className="front">
            <img src={projectData.image} alt="" />
          </div>
          <div className="back">
            <p className="title">{projectData.title}</p>
            <p className="info">{projectData.info}</p>
            <p className="desc">{projectData.desc}</p>
            <div className="btn_div">
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
      </Card>
    </>
  );
};

export default Project;
