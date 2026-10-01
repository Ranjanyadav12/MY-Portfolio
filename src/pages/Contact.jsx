import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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



    // Check empty fields
    if (!formData.name || !formData.email || !formData.subject) {
      alert("Please fill all the fields.");
      return;
    }

    // WhatsApp message
    const message = `Hello Ranjan,

I would like to contact you regarding your portfolio.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}`;

    // WhatsApp URL
    const whatsappURL =
      `https://wa.me/918860433918?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

  

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">

      {/* Heading */}

      <div className="contact-heading">
        <span></span>
        <p>Contact Me</p>
      </div>

      <h2 className="contact-title">
        Let's <span>Work Together</span>
      </h2>

      <p className="contact-subtitle">
        Have a project idea, job opportunity, or just want to
        say hello? Feel free to get in touch with me.
      </p>


      {/* Main Contact Area */}

      <div className="contact-container">

        {/* ================= LEFT ================= */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p className="contact-description">
            I'm always open to discussing new projects,
            development opportunities and interesting ideas.
          </p>


          {/* Email */}

          <div className="contact-item">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <small>Email</small>
              <p>ranjanyadav3124@gmail.com</p>
            </div>

          </div>


          {/* Location */}

          <div className="contact-item">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <small>Location</small>
              <p>India</p>
            </div>

          </div>


          {/* Availability */}

          <div className="contact-item">

            <div className="contact-icon">
              💼
            </div>

            <div>
              <small>Availability</small>
              <p>Open to opportunities</p>
            </div>

          </div>


          {/* Social */}

          <div className="contact-social">

            <p>Connect With Me</p>

            <div className="social-buttons">

              <a href="#" aria-label="GitHub">
                GitHub
              </a>

              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>

              <a href="#" aria-label="Instagram">
                Instagram
              </a>

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="contact-form-box">

          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Subject */}

            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />

            </div>


            {/* Message */}

            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="send-button"
            >
              Send Message on   Whatsapp →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;