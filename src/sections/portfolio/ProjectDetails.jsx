import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { LanguageProvider } from "../../theme/LanguageContext";

const ProjectDetails = () => {
  const location = useLocation();
  const { projectData } = location.state || {};

  if (!projectData) {
    return <p>No project data available!</p>;
  }

  return (
    <main>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
      <section id="section">
        <h1>{projectData.title}</h1>
        <p>{projectData.info}</p>
        <p>{projectData.desc}</p>
      </section>
    </main>
  );
};

export default ProjectDetails;
