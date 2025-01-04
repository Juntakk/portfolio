import Github from "../assets/github (3).png";
// import Discord from "../assets/discord.png";
import Gmail from "../assets/mail (1).png";
import Linkedin from "../assets/linkedin (2).png";

const ContactLinks = () => {
  return (
    <div className="contact__links">
      <div className="github__link">
        <a
          href="https://github.com/Juntakk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="" />
        </a>
      </div>
      <div className="email__link">
        <a href="#contact">
          <img src={Gmail} alt="" />
        </a>
      </div>

      <div className="linkedin__link">
        <a
          href="https://linkedin.com/in/nickhabashigauthier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="" />
        </a>
      </div>
      {/* <div className="discord__link">
        <a
          href="https://discord.com/Juntakk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Discord} alt="" />
        </a>
      </div> */}
    </div>
  );
};

export default ContactLinks;
