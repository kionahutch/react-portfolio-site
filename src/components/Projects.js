/* 
  File Name: App.css
  Student's Name: Kiona Hutchins
  StudentID: 301390962
  Date: May 28, 2024
*/
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
    
      <div className="project">
        <img src="/assets/images/project1.png" alt="Project 1" />
        <p>Portfolio Website: I built a personal portfolio site using React to effectively showcase my skills and professional experience. The site features a comprehensive overview of my resume, highlights my projects, and provides insights into my expertise in web development.</p>
      </div>
      <div className="project">
        <img src="/assets/images/project2.png" alt="Project 2" />
        <p>Course Evaluation Form: This project involved creating an interactive course evaluation form where users can input and submit their course feedback. Implemented using HTML, CSS, and JavaScript, it allows users to upload their evaluations to a server for further processing.</p>
      </div>
      <div className="project">
        <img src="/assets/images/project3.jpg" alt="Project 3" />
        <p>Get-to-Know-Me Page: I designed a personal “Get-to-Know-Me” page using HTML and CSS. This project features a gallery of images and various sections about myself, creating an engaging experience for visitors to learn more about me and my interests.</p>
      </div>
    </div>
  );
}

export default Projects;
