import contacts from "./data";
import "./contact.css";
import { useLanguage } from "../../theme/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  return (
    <section id="contact">
      <h2>{language === "en" ? "Get in Touch" : "Contactez moi"}</h2>
      <p>
        {language === "en"
          ? "Shoot me a message via any of the links below"
          : "Envoyez-moi un message via l'un des liens ci-dessous"}
      </p>
      <div className="container contact__container">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
