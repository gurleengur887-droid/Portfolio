import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // show success/error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://portfolio-backend-osor.onrender.com/contact", formData)
      ;

      setStatus(res.data.message);

      // clear form
      setFormData({
        name: "",
        number: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setStatus("Failed to send message. Try again!");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-wrapper">

      <div className="contact-head">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-main">

        {/* LEFT INFO CARD */}
        <div className="contact-info">
          <div className="contact-info-head">
            <h1>Contact Information</h1>
          </div>

          <div className="contact-info-content">
            <div className="line">
              <MdEmail className="icon" />
             <h2>
  <b>Email:</b>{" "}
  <a href="mailto:gurleen.gur887@gmail.com">
    gurleen.gur887@gmail.com
  </a>
</h2>
            </div>

            <div className="line">
              <FaPhoneAlt className="icon" />
             <h2>
  <b>Phone:</b>{" "}
  <a href="tel:+918699157502">+91 8699157502</a>
</h2>
            </div>

            <div className="line">
              <MdLocationOn className="icon" />
             <h2>
  <b>Location:</b>{" "}
  <a
    href="https://www.google.com/maps?q=Ludhiana,Punjab,India"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ludhiana, Punjab, India
  </a>
</h2>
            </div>
          </div>

          <div className="contact-info-btn">
            <a href="https://github.com/gurleengur887-droid" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              <FaGithub className="git-btn" />
            </a>
            <a href="https://www.linkedin.com/in/gurleen-kaur-b35359399" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              <FaLinkedin className="link-btn" />
            </a>
            <a href="tel:+918699157502" style={{ color: "inherit", textDecoration: "none" }}>
              <FaPhoneAlt className="phone-btn" />
            </a>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-head">
              <h1>Contact Form</h1>
            </div>

            <div className="Contact-line">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="Contact-line">
              <label>Contact Number</label>
              <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
            </div>

            <div className="Contact-line">
              <label>Email Id</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="Contact-line">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <input type="submit" value="Submit" />
          </form>

          {/* Status Message */}
          {status && <p style={{ color: status.includes("Failed") ? "red" : "green" }}>{status}</p>}
        </div>

      </div>

      <div className="action-section">
        <p><i>"Feel free to reach out! I'd love to hear about your project ideas."</i></p>

        <a href="tel:+918699157502" style={{ textDecoration: "none" }}>
          <button className="touch">Get In Touch</button>
        </a>
      </div>

    </div>
  );
};

export default Contact;
