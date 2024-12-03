import Card from "../../components/Card";

const Project = ({ project, data }) => {
  const projectData = data[project.id - 1];

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
