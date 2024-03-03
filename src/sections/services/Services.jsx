import data from "./data";
import Card from "../../components/Card";
import "./services.css";
import ProgressBar from "./ProgressBar";

const Services = () => {
  return (
    <section id="services">
      <h2>My knowledge</h2>
      <p>
        Here are the Languages / Technologies for which I can offer my services
        with their respective level of skill
      </p>

      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <ProgressBar completed={item.level} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
