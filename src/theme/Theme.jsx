import Modal from "../components/Modal";
import BackgroundColor from "./BackgroundColor";
import PrimaryColor from "./PrimaryColor";
import { primaryColors, backgroundColors } from "./data";
import "./theme.css";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize your theme</h3>
      <small>Change the primary and background color to your preferenc.</small>
      <div className="theme__primary-wrapper">
        <h5>Primary Color</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
      {/* <div className="language">
        <h5>Choose a language</h5>

      </div> */}
    </Modal>
  );
};

export default Theme;
