import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data_en from "./data";
import data_fr from "./data_fr";
import { useState, useMemo, useCallback } from "react";
import { useLanguage } from "../../theme/LanguageContext";

const Portfolio = () => {
  const { language } = useLanguage();
  const data = language === "en" ? data_en : data_fr;

  const [projects, setProjects] = useState(() =>
    data.filter((project) => project.category === "Web")
  );

  const categories = useMemo(() => {
    const allCategories = data.map((item) => item.category);
    return [language === "en" ? "All" : "Tout", ...new Set(allCategories)];
  }, [data, language]);

  const filterProjectsHandler = useCallback(
    (category) => {
      if (category === "All" || category === "Tout") {
        setProjects(data);
      } else {
        const filteredProjects = data.filter(
          (project) => project.category === category
        );
        setProjects(filteredProjects);
      }
    },
    [data]
  );

  return (
    <section id="portfolio">
      <div className="portfolio__container">
        <h2 className="" data-aos="fade-left" data-aos-duration="1500">
          {language === "en" ? "Projects" : "Projets"}
        </h2>
        <ProjectsCategories
          categories={categories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} data={data} />
      </div>
    </section>
  );
};

export default Portfolio;
