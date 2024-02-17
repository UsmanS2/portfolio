import React from 'react';
import './App.css';
import Navbar from './components/nav/Nav';
import AboutMe from './components/About/About';
import SkillsSection from './components/skillsSection/SkillsSection';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
       <Navbar />
      <div className="content">
        <div id="about" className="section">
          <AboutMe />
          <div><SkillsSection /></div>
          
        </div>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <p>This section shows my experience.</p>
        </div>
        <div id="portfolio" className="section">
          <h2>My projects</h2>
          <p>This section shows projects that I have made.</p>
        </div>
        <div id="contact" className="section">
          <h2>Let's talk!</h2>
          <p>This section has ways to contact me.</p>
        </div>
      </div> 
      
    </div>
  );
}

export default App;
