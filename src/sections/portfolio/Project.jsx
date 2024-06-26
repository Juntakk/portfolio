import Card from "../../components/Card";

const Project = ({ project, data }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        {data[project.id - 1].demo.startsWith("http") ? (
          <a
            href={data[project.id - 1].demo}
            target="_blank"
            rel="noopner noreferrer"
          >
            {" "}
            <img src={data[project.id - 1].image} alt="Portfolio Project" />
          </a>
        ) : (
          <>
            <a
              href={data[project.id - 1].github}
              target="_blank"
              rel="noopner noreferrer"
            >
              <img src={data[project.id - 1].image} alt="Portfolio Project" />
            </a>
          </>
        )}
      </div>
      <h4 className="project-title">{data[project.id - 1].title}</h4>
      <span className="project-desc">{data[project.id - 1].desc}</span>
      <div className="portfolio__project-cta">
        <a
          href={data[project.id - 1].github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Github
        </a>
        {data[project.id - 1].demo.startsWith("http") ? (
          <a
            href={data[project.id - 1].demo}
            className="btn sm primary"
            target="_blank"
            rel="noopner noreferrer"
          >
            Demo
          </a>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
};

export default Project;
