import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Restons en contact</h3>
            <p>N'hésitez pas à me contacter pour toute opportunité ou question.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  github.com/johndoe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 