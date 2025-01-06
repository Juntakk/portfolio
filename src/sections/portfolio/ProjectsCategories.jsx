import { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("Web");

  useEffect(() => {
    onFilterProjects(activeCategory);
  }, [activeCategory, onFilterProjects]);

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    // onFilterProjects(activeCat);
  };

  return (
    <div
      className="portfolio__categories"
      data-aos="fade-right"
      data-aos-duration="1700"
    >
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
