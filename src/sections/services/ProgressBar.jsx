import "./services.css";

const ProgressBar = (props) => {
  const { completed } = props;

  const style = {
    height: "15px",
    width: `${completed}%`,
    backgroundColor: "var(--color-primary)",
    borderRadius: "10px",
    textAlign: "right",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "3px",
  };

  return (
    <>
      <div style={style}>
        <div className="percentage">{completed}%</div>
      </div>
    </>
  );
};

export default ProgressBar;
