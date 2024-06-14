import Project from "./Project";

const Projects = ({ projects, data }) => {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      {projects.map((project) => (
        <Project key={project.id} project={project} data={data} />
      ))}
    </div>
  );
};

export default Projects;
