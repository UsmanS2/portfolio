// AboutMe.js
import React from 'react';
import './AboutMe.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import profilePic from './profile-pic.jpg'; // Import your profile picture

function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="profile-picture">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, dolor sit amet eleifend dignissim, urna eros sodales mi, in venenatis mi elit at libero. Aliquam quis mauris sit amet odio dictum aliquet.</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope /> example@example.com
          </div>
          <div className="contact-item">
            <FaPhone /> +1234567890
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> New York, USA
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
