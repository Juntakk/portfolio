import "./contact.css";
import { useLanguage } from "../../theme/LanguageContext";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  const { language } = useLanguage();
  return (
    <section id="contact">
      <h2 className="first_h2">
        {language === "en"
          ? "Ready to Join Your Team – Get in Touch !"
          : "Prêt à Rejoindre Votre Équipe – Contactez-moi !"}
      </h2>
      <p className="second_p">
        {language === "en"
          ? "Shoot me an email via this form"
          : "Envoyez-moi un courriel via ce formulaire"}
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
