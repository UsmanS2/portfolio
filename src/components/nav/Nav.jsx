import React from 'react'
import './nav.css'
import { useState } from 'react'


// nav bar
function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
      });
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li><button onClick={() => scrollToSection('section1')}>About me</button></li>
        <li><button onClick={() => scrollToSection('section2')}>Experience</button></li>
        <li><button onClick={() => scrollToSection('section3')}>My Projects</button></li>
        <li><button onClick={() => scrollToSection('section4')}>Contact Me</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
