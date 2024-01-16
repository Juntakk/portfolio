import AboutImage from "../../assets/header.jpg"
import CV from "../../assets/CV.pdf"
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import data from "./data"
import Card from "../../components/Card"
import "./about.css"

const About = () => {
    return (
        <section id='about' data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className="about__card-icon">{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>Hey there! I'm a creative soul passionate about bringing ideas to life through coding. I thrive on crafting digital experiences—whether it's websites, apps, or games. I've savored them all, and I'm eager to share the taste. Let's embark on the exciting journey of technology together!</p>                    <a href={CV} download className="btn primary">Download CV<LiaCloudDownloadAltSolid /></a>
                </div>
            </div>
        </section>
    )
}

export default About