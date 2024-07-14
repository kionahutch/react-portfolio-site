/* 
  File Name: App.css
  Student's Name: Kiona Hutchins
  StudentID: 301390962
  Date: May 28, 2024
*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div>
              <img src="/assets/images/logow.png" alt="Kiona Hutchins Logo" className="profile-pic" />

      <h1>Welcome to My Portfolio</h1>
      <p>Hi, my name is Kiona Hutchins and welcome to my personal portfolio website! <br></br>I've crafted this site using React to showcase my skills, projects, and experiences.<br></br> I hope you enjoy exploring my work!</p>

      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;