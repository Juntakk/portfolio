import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact_form.css";
import { useLanguage } from "../theme/LanguageContext";

const ContactForm = () => {
  const { language } = useLanguage();
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
    <div className="contact_container">
      <form onSubmit={handleSubmit} className="form__group">
        <div class="form__group field">
          <input
            className="form__field"
            placeholder={language === "fr" ? "Votre courriel" : "Your email"}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form__label">
            {" "}
            {language === "fr" ? "Votre courriel" : "Your email"}
          </label>
        </div>
        <div class="form__group field">
          <input
            className="form__field"
            placeholder={language === "fr" ? "Compagnie" : "Company"}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject" className="form__label">
            {" "}
            {language === "fr" ? "Compagnie" : "Company"}
          </label>
        </div>
        <div class="form__group field">
          <textarea
            className="form__field"
            placeholder="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>
        {/* <button className="contact_form_btn" type="submit">
          {language === "en" ? "Send email" : "Envoyer courriel"}
        </button> */}
        <button class="cta" type="submit">
          <span>{language === "en" ? "Send email" : "Envoyer courriel"}</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </form>
      {status && <p className="status_msg">{status}</p>}
    </div>
  );
};

export default ContactForm;
