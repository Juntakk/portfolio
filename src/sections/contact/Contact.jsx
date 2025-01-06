/* eslint-disable react-hooks/exhaustive-deps */
import "./contact.css";
import "magic.css/dist/magic.min.css";
import { useLanguage } from "../../theme/LanguageContext";
import { useState, useRef } from "react";
import useVisibility from "../../hooks/useVisibility";
import emailjs from "emailjs-com";

const Contact = () => {
  const { language } = useLanguage();
  const myRef = useRef();
  const isVisible = useVisibility(myRef);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_1ke57ce", // Replace with your service ID from EmailJS
        "template_zrerjkw", // Replace with your template ID from EmailJS
        {
          to_name: "Nick", // Replace with the recipient's name or dynamic value
          subject: formData.subject,
          message: formData.message, // message will be the message from the form
          reply_to: formData.email, // Optional: reply-to email from the sender
        },
        "78CM3jHVxqrSQ8s3i" // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          setStatus(
            language === "en"
              ? "Message sent successfully, talk to you soon!"
              : "Message envoyé avec succès, à bientôt !"
          );
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("There was an error sending the message.");
        }
      );
  };

  return (
    <section id="contact" ref={myRef}>
      <div
        className={`contact_container ${
          isVisible ? "magictime slideRightReturn" : "none"
        }`}
      >
        <h2 className={`${isVisible ? "magictime slideRightReturn" : "none"}`}>
          {language === "en"
            ? "Ready to join your project"
            : "Prêt à rejoindre votre projet"}
        </h2>
        <p className={`${isVisible ? "magictime slideUpReturn" : "none"}`}>
          {language === "en" ? "Get in Touch" : "Contactez-moi"}
        </p>
        <form onSubmit={handleSubmit} className="form__group">
          <div class="form__group field">
            <input
              className={`form__field ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
              placeholder={language === "fr" ? "Votre courriel" : "Your email"}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className={`form__label ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
            >
              {" "}
              {language === "fr" ? "Votre courriel" : "Your email"}
            </label>
          </div>
          <div class="form__group field">
            <input
              className={`form__field ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
              placeholder={language === "fr" ? "Compagnie" : "Company"}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="subject"
              className={`form__label ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
            >
              {" "}
              {language === "fr" ? "Compagnie" : "Company"}
            </label>
          </div>
          <div class="form__group field">
            <textarea
              className={`form__field ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <label
              htmlFor="message"
              className={`form__label ${
                isVisible ? "magictime slideUpReturn" : "none"
              }`}
            >
              Message
            </label>
          </div>
          <div className="social-icons">
            <button
              className={`cta ${
                isVisible ? "magictime slideRightReturn" : "none"
              }`}
              type="submit"
            >
              <span>
                {language === "en" ? "Send email" : "Envoyer courriel"}
              </span>
            </button>
          </div>
        </form>
        {status && <p className="status_msg">{status}</p>}
      </div>{" "}
    </section>
  );
};

export default Contact;
