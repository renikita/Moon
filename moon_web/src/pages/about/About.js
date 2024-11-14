import React from "react";
import "./about.css";
import team2 from "./img/team2.png";
import society from "./img/society.png";
import smarttv from "./img/smart-tv.png";
import report from "./img/report.png";

export default function About() {
  return (
    <div>
      <div className="a-container">
        <div className="a-section-one">
          <h2 className="a-one-h2">About us</h2>
          <p className="a-one-p">
            A software development company with 5 years of experience building
            software for enterprise organizations and applications for startups.
          </p>
          <h1 className="a-one-h1">Who we are</h1>
        </div>
        <div className="a-section-two">
          <p className="a-two-p">
            Moon is a cutting-edge software development company focused on
            creating innovative applications and operating systems. Our mission
            is to deliver powerful, reliable, and scalable digital solutions
            that meet the unique needs of businesses and individuals. We develop
            everything from mobile and web applications to full-fledged
            operating systems with a focus on user-friendly design and powerful
            functionality. Our team of experienced developers, designers, and
            technology enthusiasts is committed to delivering best-in-class
            products that increase efficiency and improve user experience across
            platforms. At Moon, we transform ideas into seamless digital
            realities.
          </p>
          <img className="a-two-img" src={team2} alt="teams" />
          <div className="a-two-features-section">
            <div className="a-two-feature-card">
              <img
                src={society}
                alt="Streamlined processes"
                className="a-two-feature-icon"
              />
              <h3 className="a-two-feature-title">Streamlined processes</h3>
              <p className="a-two-feature-description">
                The more efficient your workflow, the more productive your
                employees are. Our processes maintain work quality, automate
                software delivery processes, and improve team morale.
              </p>
            </div>

            <div className="a-two-feature-card">
              <img
                src={smarttv}
                alt="Talented people"
                className="a-two-feature-icon"
              />
              <h3 className="a-two-feature-title">Talented people</h3>
              <p className="a-two-feature-description">
                We seek out and invest in talented, diverse people by offering
                one of the most robust career mentoring and training programs in
                the city.
              </p>
            </div>

            <div className="a-two-feature-card">
              <img
                src={report}
                alt="Proven technologies"
                className="a-two-feature-icon"
              />
              <h3 className="a-two-feature-title">Proven technologies</h3>
              <p className="a-two-feature-description">
                The result of our work is software that meets CISQ code quality
                standards. It is secure, efficient, and reliable. Reliable
                software makes it easy to expand.
              </p>
            </div>
          </div>
          <h1 className="a-two-h1">Leadership</h1>
        </div>
        <div className="a-section-three"></div>
      </div>
    </div>
  );
}
