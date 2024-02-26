import AboutImage from "../../assets/header.jpg";
import CV from "../../assets/CV.pdf";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <h1>
            I'm Nick, a Full-Stack Programmer <br></br> with a hunger for
            <br></br> knowledge
          </h1>

          <p>
            I've spent the last 2 years learning, practicing and honing my
            coding skills with various projects and hobbies and I am ready to
            use these skills to make a difference somewhere, somehow.
          </p>

          <a href={CV} download className="btn primary">
            Download CV
            <LiaCloudDownloadAltSolid className="icon" />
          </a>
        </div>

        <div className="about__portrait">
          <img src={AboutImage} alt="About" />
        </div>
        
        <div className="about__right">
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
