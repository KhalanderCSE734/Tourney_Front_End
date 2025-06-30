import React, { useState } from 'react';
import '../CSS/OrganizerSignUp.css';
import { IoChevronBack, IoLogoGoogle } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

const OrganizerSignUp = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Organizer registration:', formData);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleGoogleSignUp = () => {
    // Handle Google signup
    console.log('Google signup initiated');
  };


  const isFormValid = () => {
    return formData.fullName.trim() && 
           formData.email.trim() && 
           formData.password.trim();
  };

  return (
    <div className="organizer-signup-container">
      <div className="organizer-signup-wrapper">
        <button className="organizer-signup-back-button" onClick={()=>{ navigate('/roleSelection') }}>
          <IoChevronBack className="organizer-signup-back-icon" />
          Back to role selection
        </button>

        <div className="organizer-signup-card">
          <div className="organizer-signup-header">
            <h1 className="organizer-signup-title">Organizer Registration</h1>
          </div>

          <form onSubmit={handleSubmit} className="organizer-signup-form">
            <div className="organizer-signup-form-group">
              <label htmlFor="organizerFullName" className="organizer-signup-form-label">
                Full Name
              </label>
              <input
                type="text"
                id="organizerFullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="organizer-signup-form-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="organizer-signup-form-group">
              <label htmlFor="organizerEmail" className="organizer-signup-form-label">
                Email
              </label>
              <input
                type="email"
                id="organizerEmail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="organizer-signup-form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="organizer-signup-form-group">
              <label htmlFor="organizerPassword" className="organizer-signup-form-label">
                Password
              </label>
              <input
                type="password"
                id="organizerPassword"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="organizer-signup-form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit" 
              className="organizer-signup-create-button"
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="organizer-signup-divider">
              <span className="organizer-signup-divider-line"></span>
              <span className="organizer-signup-divider-text">or</span>
              <span className="organizer-signup-divider-line"></span>
            </div>

            <button 
              type="button" 
              className="organizer-signup-google-button"
              onClick={handleGoogleSignUp}
            >
              <IoLogoGoogle className="organizer-signup-google-icon" />
              Continue with Google
            </button>

            <div className="organizer-signup-signin-prompt">
              <span className="organizer-signup-signin-text">Already have an account? </span>
              <button 
                type="button" 
                className="organizer-signup-signin-link"
                onClick={()=>{ navigate('/login/organizer') }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizerSignUp;
