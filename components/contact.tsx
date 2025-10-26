"use client";

import React, { useState, FormEvent } from "react";
import "../css/contact.css";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="form">
      <div className="formRow">
        <input
          type="text"
          placeholder="Enter Name"
          required
          className="input"
        />
      </div>

      <div className="formRow">
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="input"
        />
      </div>

      <div className="formRow">
        <textarea
          name="message"
          placeholder="Enter Message"
          rows={4}
          required
          className="input textarea"
        ></textarea>
      </div>

      <div className="actions">
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </div>
    </form>
  );
}

function ContactFormCard() {
  return (
    <div className="card">
      <h2 className="heading">Contact Us</h2>
      <p className="subheading">
        We list your menu online, help you process orders.
      </p>
      <ContactForm />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="imageCol">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/contact/contact_3.png)",
              }}
            ></div>
          </div>
          <div className="formCol">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
