// AboutMe.js
import React from 'react';
import './about.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import profilePic from '../../assets/profilePic.jpg'; 

function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="profile-picture">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>Hello! My name is Usman Shafi </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope /> Usman.Shafi.469@gmail.com
          </div>
          <div className="contact-item">
            <FaPhone /> (469)7771335
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> Dallas, TX
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
