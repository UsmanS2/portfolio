// SkillsSection.js
import React from 'react';
import './SkillsSection.css';

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skill-pane">
        <h3>Experience</h3>
        <p>4+ years of teaching Coding to students age 6-40</p>
      </div>
      <div className='skill-container'>
      <div className="skill-pane">
        
        <h3>Technical Skills</h3>
        <ul>
          <li>Python</li>
          <li>React</li>
          <li>Java</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Flask</li>
        </ul>
        </div>
      </div>
      <div className="skill-pane">
        <h3>Soft Skills</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default SkillsSection;
