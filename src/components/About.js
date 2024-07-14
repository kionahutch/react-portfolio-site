/* 
  File Name: App.css
  Student's Name: Kiona Hutchins
  StudentID: 301390962
  Date: May 28, 2024
*/
import React from 'react';
import './About.css';

function About() {
  return (
    <div>
          <img src="/assets/images/IMG_7023.jpg" alt="Kiona Hutchins" className="profile-pic" /> 
      <h1>About Me</h1>
      
        <p>
        My name is Kiona Hutchins. I am a software engineer with a passion for web development. <br></br>
        I am currently seeking a job that
allows me to apply technical skills that I'm learning, <br></br>project management skills I've
developed and customer service skills <br></br>I've mastered with real-world experiences in the
workplace.
      </p>
      <a href="/assets/images/OFFICIAL KIONAJHUTCHINS RESUME 24'.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
      <br></br>
      <a href="/assets/images/OFFICIAL KIONAJHUTCHINS COVER 24'.pdf" target="_blank" rel="noopener noreferrer">Download My Cover Letter</a>
      <br></br>
      <a href="/assets/images/Kiona Hutchins - Letter of Recommendation.docx.pdf" target="_blank" rel="noopener noreferrer">Download My Letter of Recommendation From My Employer Of 5 Years</a>
    </div>
  );
}

export default About;