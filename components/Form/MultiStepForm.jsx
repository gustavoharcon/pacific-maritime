"use client";

import { useState } from "react";
import { 
  FaRegEnvelope, 
  FaRegCalendar, 
  FaCheck, 
  FaLock, 
  FaWrench, 
  FaBolt, 
  FaBoxesStacked,
  FaSpinner
} from "react-icons/fa6";

const capabilities = [
  { id: "A", label: "Cnc machining", icon: FaWrench },
  { id: "B", label: "Swiss turning", icon: FaLock },
  { id: "C", label: "Wire edm", icon: FaBolt },
  { id: "D", label: "Assembly", icon: FaBoxesStacked }
];

const teamSizes = ["Just me", "2-10", "11-50", "51-100", "101-500", "501+"];

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
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    capability: "B", // default Swiss turning as in screenshot
    urgency: "",
    partDescription: "",
    companyName: "",
    teamSize: "2-10", // default 2-10 as in screenshot
    companyWebsite: "",
    country: "",
    bestDayToCall: ""
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

  const selectCapability = (id) => {
    setFormData((prev) => ({ ...prev, capability: id }));
  };

  const selectTeamSize = (size) => {
    setFormData((prev) => ({ ...prev, teamSize: size }));
  };

  const validateStep = (currentStep) => {
    const errors = {};
    if (currentStep === 1) {
      if (!formData.email) {
        errors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
    } else if (currentStep === 2) {
      if (!formData.urgency) {
        errors.urgency = "Project urgency is required";
      }
    } else if (currentStep === 4) {
      if (!formData.country) {
        errors.country = "Please select your country";
      }
      if (!formData.bestDayToCall) {
        errors.bestDayToCall = "Please pick a callback date";
      }
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      capability: "B",
      urgency: "",
      partDescription: "",
      companyName: "",
      teamSize: "2-10",
      companyWebsite: "",
      country: "",
      bestDayToCall: ""
    });
    setStep(1);
    setSuccess(false);
    setErrorMsg("");
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setLoading(true);
    setErrorMsg("");

    try {
      // Find full capability label
      const capLabel = capabilities.find(c => c.id === formData.capability)?.label || formData.capability;
      
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          capability: capLabel // Send descriptive name
        }),
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

  // Helper to render circle steps
  const renderStepsIndicator = () => {
    return (
      <div className="step-indicator">
        {[1, 2, 3, 4].map((item, idx) => {
          const isActive = step === item;
          const isCompleted = step > item;
          
          return (
            <div key={item} className="step-indicator-item">
              <div 
                className={`step-circle ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
              >
                {isCompleted ? <FaCheck size={10} /> : item}
              </div>
              {idx < 3 && <div className={`step-line ${step > item ? "completed" : ""}`} />}
            </div>
          );
        })}
      </div>
    );
  };

  if (success) {
    return (
      <div className="rfq-form-card success-card">
        <div className="success-icon-circle">
          <FaCheck size={32} className="success-icon" />
        </div>
        <h3 className="form-title">SPECS SUBMITTED</h3>
        <p className="form-subtitle">
          Thank you! We will review your requirements and be in touch within one business day.
        </p>
        <button type="button" className="btn-primary" onClick={resetForm}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rfq-form-card">
      {renderStepsIndicator()}

      <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()} className="rfq-form">
        
        {/* STEP 1: Your Name and Email */}
        {step === 1 && (
          <div className="form-step-content">
            <h3 className="form-title">YOUR NAME AND EMAIL</h3>
            <p className="form-subtitle">We need to know who is sending the hard stuff.</p>
            
            <div className="form-group">
              <label htmlFor="fullName">Your full name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email address*</label>
              <div className="input-wrapper has-icon">
                <span className="input-icon">
                  <FaRegEnvelope size={14} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="pineer@harconmetals.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={validationErrors.email ? "input-error" : ""}
                />
              </div>
              {validationErrors.email && (
                <span className="error-text">{validationErrors.email}</span>
              )}
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Cancel
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: What Are You Trying To Build? */}
        {step === 2 && (
          <div className="form-step-content">
            <h3 className="form-title">WHAT ARE YOU TRYING TO BUILD?</h3>
            <p className="form-subtitle">Select the capability that matches your most difficult requirement.</p>

            <div className="form-group">
              <label>Capability needed</label>
              <div className="capabilities-grid">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  const isSelected = formData.capability === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      className={`capability-btn ${isSelected ? "selected" : ""}`}
                      onClick={() => selectCapability(cap.id)}
                    >
                      <span className="cap-letter">{cap.id}</span>
                      <span className="cap-label">{cap.label}</span>
                      {isSelected && <Icon className="cap-icon" size={12} />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Project urgency</label>
              <div className="select-wrapper">
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className={validationErrors.urgency ? "input-error" : ""}
                >
                  <option value="" disabled>Select one...</option>
                  <option value="Low (1+ Months)">Low (1+ Months)</option>
                  <option value="Medium (2-4 Weeks)">Medium (2-4 Weeks)</option>
                  <option value="High (1-2 Weeks)">High (1-2 Weeks)</option>
                  <option value="Critical (Immediate)">Critical (Immediate)</option>
                </select>
              </div>
              {validationErrors.urgency && (
                <span className="error-text">{validationErrors.urgency}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="partDescription">Part description</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="partDescription"
                  name="partDescription"
                  placeholder="Describe your parts, materials, specifications..."
                  value={formData.partDescription}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Your Company Details */}
        {step === 3 && (
          <div className="form-step-content">
            <h3 className="form-title">YOUR COMPANY DETAILS</h3>
            <p className="form-subtitle">So we understand the scale of the operation behind the print.</p>

            <div className="form-group">
              <label htmlFor="companyName">Company name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="e.g. Harcon Metals"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Size of your engineering team</label>
              <div className="team-size-grid">
                {teamSizes.map((size) => {
                  const isSelected = formData.teamSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      className={`team-size-btn ${isSelected ? "selected" : ""}`}
                      onClick={() => selectTeamSize(size)}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="companyWebsite">Company website</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  placeholder="www.harconmetals.com"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Confirm and Submit */}
        {step === 4 && (
          <div className="form-step-content">
            <h3 className="form-title">CONFIRM AND SUBMIT</h3>
            <p className="form-subtitle">The final step. We will be in touch within one business day.</p>

            {errorMsg && (
              <div className="error-alert">
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="country">Country</label>
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
              <label htmlFor="bestDayToCall">Best day to call</label>
              <div className="input-wrapper has-icon">
                <span className="input-icon">
                  <FaRegCalendar size={14} />
                </span>
                <input
                  type="date"
                  id="bestDayToCall"
                  name="bestDayToCall"
                  value={formData.bestDayToCall}
                  onChange={handleInputChange}
                  className={validationErrors.bestDayToCall ? "input-error" : ""}
                />
              </div>
              {validationErrors.bestDayToCall && (
                <span className="error-text">{validationErrors.bestDayToCall}</span>
              )}
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                className="btn-cancel" 
                onClick={prevStep}
                disabled={loading}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="btn-submit"
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
          </div>
        )}

      </form>
    </div>
  );
}
