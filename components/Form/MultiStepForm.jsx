"use client";

import { useState } from "react";
import {
  FaRegEnvelope,
  FaCheck,
  FaSpinner,
  FaFilePdf,
  FaCircleXmark
} from "react-icons/fa6";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Other"
];

export default function MultiStepForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cadFile, setCadFile] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    country: "",
    description: ""
  });

  // Validation state
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const errors = { ...validationErrors };
    let isValid = true;

    // Validate extension and type
    const isPDF = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPDF) {
      errors.cadFile = "Only PDF files are allowed";
      isValid = false;
    } else if (file.size > 10 * 1024 * 1024) {
      errors.cadFile = "File size must be under 10MB";
      isValid = false;
    } else {
      errors.cadFile = "";
    }

    setValidationErrors(errors);
    if (isValid) {
      setCadFile(file);
    } else {
      setCadFile(null);
    }
  };

  const removeFile = () => {
    setCadFile(null);
    setValidationErrors((prev) => ({ ...prev, cadFile: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }

    if (!formData.country) {
      errors.country = "Please select your country";
    }

    if (!formData.description.trim()) {
      errors.description = "Project description is required";
    }

    if (!cadFile) {
      errors.cadFile = "Please upload a secure CAD PDF file";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      country: "",
      description: ""
    });
    setCadFile(null);
    setSuccess(false);
    setErrorMsg("");
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("companyName", formData.companyName);
      data.append("country", formData.country);
      data.append("description", formData.description);
      if (cadFile) {
        data.append("cadFile", cadFile);
      }

      const response = await fetch("/api/submit", {
        method: "POST",
        body: data,
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Submission failed");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rfq-form-card success-card">
        <div className="success-icon-circle">
          <FaCheck size={32} className="success-icon" />
        </div>
        <h3 className="form-title">SPECS SUBMITTED</h3>
        <p className="form-subtitle">
          Thank you! We will review your CAD drawings and requirements, and be in touch within one business day.
        </p>
        <button type="button" className="btn btn--primary btn-animation-four" onClick={resetForm}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rfq-form-card">
      <form onSubmit={handleSubmit} className="rfq-form" noValidate>
        <h2 className="form-title">SUBMIT YOUR SPECIFICATIONS</h2>
        <p className="form-subtitle">Fill out the form below and upload your secure CAD PDF drawings to request a quote.</p>

        {errorMsg && (
          <div className="error-alert">
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="fullName">Full name*</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g. John Doe"
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
            <label htmlFor="email">Email address*</label>
            <div className="input-wrapper has-icon">
              <span className="input-icon">
                <FaRegEnvelope size={14} />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sales@pacmaritime.com"
                value={formData.email}
                onChange={handleInputChange}
                className={validationErrors.email ? "input-error" : ""}
              />
            </div>
            {validationErrors.email && (
              <span className="error-text">{validationErrors.email}</span>
            )}
          </div>
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number*</label>
            <div className="input-wrapper">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="e.g. (555) 000-0000"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={validationErrors.phoneNumber ? "input-error" : ""}
              />
            </div>
            {validationErrors.phoneNumber && (
              <span className="error-text">{validationErrors.phoneNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company name*</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="e.g. Pacific Maritime Industries Corp."
                value={formData.companyName}
                onChange={handleInputChange}
                className={validationErrors.companyName ? "input-error" : ""}
              />
            </div>
            {validationErrors.companyName && (
              <span className="error-text">{validationErrors.companyName}</span>
            )}
          </div>
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="country">Country*</label>
            <div className="select-wrapper">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={validationErrors.country ? "input-error" : ""}
              >
                <option value="" disabled>Select one...</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {validationErrors.country && (
              <span className="error-text">{validationErrors.country}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="cadFile">Secure CAD Drawing (PDF)*</label>
            <div className="file-upload-wrapper">
              {!cadFile ? (
                <div className={`file-upload-dropzone ${validationErrors.cadFile ? "has-error" : ""}`}>
                  <input
                    type="file"
                    id="cadFile"
                    name="cadFile"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="file-upload-input"
                  />
                  <div className="dropzone-content">
                    <FaFilePdf className="upload-icon" size={24} />
                    <span className="upload-text">Click to choose or drag CAD PDF file</span>
                    <span className="upload-subtext">PDF only, max 10MB</span>
                  </div>
                </div>
              ) : (
                <div className="file-upload-selected">
                  <div className="file-info">
                    <FaFilePdf className="pdf-icon" size={20} />
                    <div className="file-details">
                      <span className="file-name">{cadFile.name}</span>
                      <span className="file-size">{(cadFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                    </div>
                  </div>
                  <button type="button" className="btn-remove-file" onClick={removeFile} title="Remove file">
                    <FaCircleXmark size={18} />
                  </button>
                </div>
              )}
              {validationErrors.cadFile && (
                <span className="error-text">{validationErrors.cadFile}</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description*</label>
          <div className="textarea-wrapper">
            <textarea
              id="description"
              name="description"
              placeholder="Describe what this quote request is for, including quantities, specifications, materials, or special requirements..."
              value={formData.description}
              onChange={handleInputChange}
              className={validationErrors.description ? "input-error" : ""}
            />
          </div>
          {validationErrors.description && (
            <span className="error-text">{validationErrors.description}</span>
          )}
        </div>

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
              "Send specs"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
