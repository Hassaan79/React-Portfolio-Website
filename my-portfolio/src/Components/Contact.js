// Contact.js
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        <FaEnvelope /> Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
      <p>
        <FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/yourusername">yourusername</a>
      </p>
      <p>
        <FaGithub /> GitHub: <a href="https://github.com/yourusername">yourusername</a>
      </p>
    </section>
  );
}

export default Contact;
