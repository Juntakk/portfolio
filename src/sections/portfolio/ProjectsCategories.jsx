import { useState } from "react";
import CategoryButton from "./CategoryButton";
import { useLanguage } from "../../theme/LanguageContext";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(
    language === "en" ? "All" : "Tout"
  );

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio__categories">
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
