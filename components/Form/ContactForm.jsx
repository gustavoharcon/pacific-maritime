"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    describeYou: "",
    message: "",
    acceptTerms: false
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.inquiryType) {
      errors.inquiryType = "Please select an inquiry type";
    }
    if (!formData.describeYou) {
      errors.describeYou = "Please select an option that best describes you";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms to proceed";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit message");
      }

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        describeYou: "",
        message: "",
        acceptTerms: false
      });
    } catch (err) {
      setErrorMsg(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="contact-form-success">
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
        <button
          onClick={() => setSuccess(false)}
          className="btn btn--primary btn-animation-four"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {errorMsg && <div className="error-alert">{errorMsg}</div>}

      <div className="form-row-2">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={validationErrors.firstName ? "input-error" : ""}
            />
          </div>
          {validationErrors.firstName && (
            <span className="error-text">{validationErrors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={validationErrors.lastName ? "input-error" : ""}
            />
          </div>
          {validationErrors.lastName && (
            <span className="error-text">{validationErrors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={validationErrors.email ? "input-error" : ""}
            />
          </div>
          {validationErrors.email && (
            <span className="error-text">{validationErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <div className="input-wrapper">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={validationErrors.phone ? "input-error" : ""}
            />
          </div>
          {validationErrors.phone && (
            <span className="error-text">{validationErrors.phone}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="inquiryType">Inquiry type</label>
        <div className="select-wrapper">
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            className={validationErrors.inquiryType ? "input-error" : ""}
          >
            <option value="">Select one...</option>
            <option value="Sales & Quote Request">Sales & Quote Request</option>
            <option value="Engineering & Custom Parts">Engineering & Custom Parts</option>
            <option value="Supplier / Vendor Relations">Supplier / Vendor Relations</option>
            <option value="Careers">Careers</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {validationErrors.inquiryType && (
          <span className="error-text">{validationErrors.inquiryType}</span>
        )}
      </div>

      <div className="form-group">
        <label>Which best describes you?</label>
        <div className="radio-grid">
          <label className="radio-option">
            <input
              type="radio"
              name="describeYou"
              value="Sales inquiry"
              checked={formData.describeYou === "Sales inquiry"}
              onChange={handleInputChange}
            />
            Sales inquiry
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="describeYou"
              value="RFQ request"
              checked={formData.describeYou === "RFQ request"}
              onChange={handleInputChange}
            />
            RFQ request
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="describeYou"
              value="Career application"
              checked={formData.describeYou === "Career application"}
              onChange={handleInputChange}
            />
            Career application
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="describeYou"
              value="Other"
              checked={formData.describeYou === "Other"}
              onChange={handleInputChange}
            />
            Other
          </label>
        </div>
        {validationErrors.describeYou && (
          <span className="error-text">{validationErrors.describeYou}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <div className="textarea-wrapper">
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleInputChange}
            className={validationErrors.message ? "input-error" : ""}
          />
        </div>
        {validationErrors.message && (
          <span className="error-text">{validationErrors.message}</span>
        )}
      </div>

      {/* <div className="form-group checkbox-group">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className={validationErrors.acceptTerms ? "input-error" : ""}
          />
          I accept the terms
        </label>
        {validationErrors.acceptTerms && (
          <span className="error-text">{validationErrors.acceptTerms}</span>
        )}
      </div> */}

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn--primary btn-animation-four"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="spinner-icon" /> Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}
