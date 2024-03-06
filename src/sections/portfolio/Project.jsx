import Card from "../../components/Card";

const Project = ({ project, data }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={data[project.id - 1].image} alt="Portfolio Project" />
      </div>
      <h4>{data[project.id - 1].title}</h4>
      <p>{data[project.id - 1].desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={data[project.id - 1].github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Github
        </a>
        <a
          href={data[project.id - 1].demo}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Demo
        </a>
      </div>
    </Card>
  );
};

export default Project;
