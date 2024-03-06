import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data_en from "./data";
import data_fr from "./data_fr";

import { useState } from "react";
import { useLanguage } from "../../theme/LanguageContext";

const Portfolio = () => {
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;

  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = [
    language === "en" ? "All" : "Tout",
    ...new Set(categories),
  ];

  const filterProjectsHandler = (category) => {
    if (category === "All" || category === "Tout") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>{language === "en" ? "Recent Projects" : "Projets Récents"}</h2>
      <p>
        {language === "en"
          ? "Check out some of the projects I recently worked on. Use the buttons to toggle the different categories."
          : "Consultez certains des projets sur lesquels j'ai récemment travaillé. Utilisez les boutons pour basculer entre les différentes catégories."}
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} data={data} />
      </div>
    </section>
  );
};

export default Portfolio;
