import Card from "../../components/Card";

const Certificate = ({ certificate }) => {
  return (
    <Card className="light">
      <div className="certificate__title">
        <p>{certificate.description}</p>
      </div>
      <div className="certificate__image">
        <img src={certificate.image} alt="I" />
      </div>
    </Card>
  );
};

export default Certificate;
