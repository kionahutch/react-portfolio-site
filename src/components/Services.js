/* 
  File Name: Services.css
  Student's Name: Kiona Hutchins
  StudentID: 301390962
  Date: May 28, 2024
*/
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-list">
        <div className="service-item">
          <img src="/assets/images/GeneralProgramming.jpg" alt="General Programming" />
          <p>General Programming</p>
          <div className="description">Expertise in various programming languages and techniques.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/WebDevelopment.jpg" alt="Web Development" />
          <p>Web Development</p>
          <div className="description">Building responsive and interactive websites.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/Machinelearning.jpg" alt="Machine Learning" />
          <p>Machine Learning</p>
          <div className="description">Implementing algorithms to solve complex problems.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/CustomerService.jpg" alt="Customer Service" />
          <p>Customer Service</p>
          <div className="description">Providing top-notch support and assistance.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/data.jpg" alt="Data Analytics" />
          <p>Data Analytics</p>
          <div className="description">Analyzing and interpreting data for insights.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/ERPsystems.jpg.png" alt="ERP Systems" />
          <p>ERP Systems</p>
          <div className="description">Managing enterprise resource planning systems.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/QualityManagement.jpg" alt="Quality Management" />
          <p>Quality Management</p>
          <div className="description">Ensuring high standards and quality assurance.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/ProjectDevelopment.jpg" alt="Project Development" />
          <p>Project Development</p>
          <div className="description">Overseeing and managing project life cycles.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/b2b.png" alt="B2B Sales" />
          <p>B2B Sales</p>
          <div className="description">Driving business-to-business sales and partnerships.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/technical.jpeg" alt="Technical Writing" />
          <p>Technical Writing</p>
          <div className="description">Creating clear and concise technical documentation.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/datacollection.jpg" alt="Data Collection" />
          <p>Data Collection</p>
          <div className="description">Collecting and organizing data for analysis.</div>
        </div>

        <div className="service-item">
          <img src="/assets/images/microsoft.jpg" alt="Microsoft" />
          <p>Microsoft</p>
          <div className="description">Proficiency with Microsoft tools and applications.</div>
        </div>
      </div>
    </div>
  );
}

export default Services;