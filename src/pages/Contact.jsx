// src/Components/Contact.jsx
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-intro">
        We’d love to hear from you! Whether you have questions, suggestions, or just want to say hi — reach out anytime.
      </p>

      <div className="contact-details">
        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>support@snapdite.com</p>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>+91-9876543210</p>
        </div>

        <div className="contact-card">
          <h2>📍 Location</h2>
          <p>Greater Noida, Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="contact-footer">
        <p>
          For support, feedback, or partnership opportunities, drop us an email and we’ll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default Contact;
