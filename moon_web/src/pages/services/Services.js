import React from "react";
import "./services.css";
import group1 from "./img/group1.png";
import group2 from "./img/group2.png";
import group3 from "./img/group3.png";
import group4 from "./img/group4.png";
import group5 from "./img/group5.png";

export default function Services() {
  return (
    <div className="s-container">
      <div className="s-section-one">
        <h2 className="s-one-h2">Services Software Development</h2>
        <p className="s-one-p">
          Do you need a professional team of software engineers with experience
          in your business field? Share your idea of a unique IT product, and
          Lampa Software will implement it within the deadline!
        </p>
        <h1 className="s-one-h1">Services</h1>
      </div>
      <div className="s-section-two">
        <div className="s-two-left">
          <h3 className="s-two-h3">Project Management</h3>
          <div className="s-two-p">
            Our PM specialists negotiate, organize and motivate teams, create
            roadmaps, and manage the execution of tasks throughout the
            development lifecycle. Our project managers also analyze risks,
            maintain the necessary document flow, and present results to the
            client after each stage. Our studio specialists ensure successful
            software design and development services within the available
            resources and timeframe.
          </div>
          <h5 className="s-two-h5">We develop applications for</h5>
          <ul className="s-business-list">
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Large Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Medium Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Small Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Start-ups
            </li>
          </ul>
        </div>
        <div className="s-two-right">
          <div className="s-two-group">
            <img src={group1} alt="Mobile App"/>
            <img src={group2} alt="Web"/>
            <img src={group3} alt="QA"/>
            <img src={group4} alt="UI/UX"/>
            <img src={group5} alt="Project Managment"/>
          </div>
        </div>
      </div>
    </div>
  );
}
