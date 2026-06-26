import React, { useState } from 'react';
import type { PersonalDetails } from '../types/portfolio';
import * as Icons from './Icons';

interface ContactProps {
  personal: PersonalDetails;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-desc">Have a question or want to work together? Feel free to reach out!</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-card glass-card">
              <div className="contact-icon-wrap">
                <Icons.Mail />
              </div>
              <div>
                <div className="contact-info-title">Email Me</div>
                <a href={`mailto:${personal.email}`} className="contact-info-detail">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <div className="contact-icon-wrap">
                <Icons.Phone />
              </div>
              <div>
                <div className="contact-info-title">Call Me</div>
                <div className="contact-info-detail">{personal.phone}</div>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <div className="contact-icon-wrap">
                <Icons.MapPin />
              </div>
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-detail">{personal.location}</div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap glass-card">
            {formSubmitted ? (
              <div className="form-success-banner">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--success)' }}>
                  <Icons.Check />
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} id="contact-form">
                <div className="form-group">
                  <label htmlFor="name-input" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email-input" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject-input" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message-input" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="form-input"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={formLoading}
                  id="submit-form-btn"
                >
                  {formLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Icons.Send />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
