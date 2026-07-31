"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    positionOfInterest: "",
    yearsOfExperience: "",
    coverNote: "",
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
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
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
    if (!formData.positionOfInterest) {
      errors.positionOfInterest = "Please select a position of interest";
    }
    if (!formData.yearsOfExperience) {
      errors.yearsOfExperience = "Please select your years of experience";
    }
    if (!formData.coverNote.trim()) {
      errors.coverNote = "Cover note is required";
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
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit application");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        lastName: "",
        email: "",
        phone: "",
        positionOfInterest: "",
        yearsOfExperience: "",
        coverNote: "",
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
      <div className="careers-form-success">
        <h3>Application Sent!</h3>
        <p>Thank you for applying. Our hiring manager will reach out within 2 business days.</p>
        <button
          onClick={() => setSuccess(false)}
          className="btn btn-white-background"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="careers-form" noValidate>
      {errorMsg && <div className="error-alert">{errorMsg}</div>}

      <div className="form-row-2">
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={validationErrors.fullName ? "input-error" : ""}
            />
          </div>
          {validationErrors.fullName && (
            <span className="error-text">{validationErrors.fullName}</span>
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
        <label htmlFor="positionOfInterest">Position of interest</label>
        <div className="select-wrapper">
          <select
            id="positionOfInterest"
            name="positionOfInterest"
            value={formData.positionOfInterest}
            onChange={handleInputChange}
            className={validationErrors.positionOfInterest ? "input-error" : ""}
          >
            <option value="">Select one...</option>
            <option value="CNC Lathe Machinist">CNC Lathe Machinist</option>
            <option value="JANITOR">JANITOR</option>
            <option value="Press Break Operator">Press Break Operator</option>
            <option value="Laser Programmer – AMADA Software">Laser Programmer – AMADA Software</option>
            <option value="Welder">Welder</option>
            <option value="Production Supervisor">Production Supervisor</option>
            <option value="Inventory Control">Inventory Control</option>
            <option value="Assembly">Assembly</option>
            <option value="General Labor">General Labor</option>
          </select>
        </div>
        {validationErrors.positionOfInterest && (
          <span className="error-text">{validationErrors.positionOfInterest}</span>
        )}
      </div>

      <div className="form-group">
        <label>Years of experience</label>
        <div className="radio-grid">
          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="0-2"
              checked={formData.yearsOfExperience === "0-2"}
              onChange={handleInputChange}
            />
            0-2
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="3-5"
              checked={formData.yearsOfExperience === "3-5"}
              onChange={handleInputChange}
            />
            3-5
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="6-10"
              checked={formData.yearsOfExperience === "6-10"}
              onChange={handleInputChange}
            />
            6-10
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="11-15"
              checked={formData.yearsOfExperience === "11-15"}
              onChange={handleInputChange}
            />
            11-15
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="16+"
              checked={formData.yearsOfExperience === "16+"}
              onChange={handleInputChange}
            />
            16+
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="yearsOfExperience"
              value="Other"
              checked={formData.yearsOfExperience === "Other"}
              onChange={handleInputChange}
            />
            Other
          </label>
        </div>
        {validationErrors.yearsOfExperience && (
          <span className="error-text">{validationErrors.yearsOfExperience}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="coverNote">Cover note</label>
        <div className="textarea-wrapper">
          <textarea
            id="coverNote"
            name="coverNote"
            placeholder="Tell us about yourself..."
            value={formData.coverNote}
            onChange={handleInputChange}
            className={validationErrors.coverNote ? "input-error" : ""}
          />
        </div>
        {validationErrors.coverNote && (
          <span className="error-text">{validationErrors.coverNote}</span>
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
          className="btn btn-white-background"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="spinner-icon" /> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}
