
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Let's connect and build something amazing together.
      </p>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">

          <h3>Get In Touch</h3>

          <p>
            I'm open to discussing new projects, internships,
            job opportunities and collaborations.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>✉</span>
              <div>
                <h4>Email</h4>
                <p>piyushsharma777896@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Faridabad, Haryana</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;

