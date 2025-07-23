import React, { useState } from "react";
import "./Contact.css"; 

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/meozarob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setShowPopup(true);
      setFormData({ email: "", phone: "", message: "" });

      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          required
          onChange={handleChange}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>

      {showPopup && (
        <div className="popup">
          ✅ Message sent successfully!
        </div>
      )}
    </div>
  );
}

export default Contact;
