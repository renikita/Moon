import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "./home_media.css";
import "../../styles/fonts.css";
import teams from "./img/teams.png";

export default function Home() {
  return (
    <div>
      <div className="section-one">
        <div className="content">
          <h1>
            Safe <br />
            Software
            <br /> Development
          </h1>
          <div className="top-btn">
            <Link to="/contacts" className="contact-btn">
              Contacts
            </Link>
            <Link to="/services" className="services-btn">
              Services
            </Link>
          </div>
        </div>
        <h2 className="about">About us</h2>
      </div>
      <div className="section-two">
        <img className="teams-img" src={teams} alt="teams" />
        <h2>IT Outsourcing Services Company</h2>
        <p>
          Moon is a state-of-the-art app development studio specializing in
          creating innovative and user-friendly mobile applications. With a
          focus on sleek design and seamless functionality, Moon brings your
          ideas to life with custom development solutions. Whether you need a
          business app, a creative tool, or a mobile game, our team of
          experienced developers ensures high performance and quality. At Moon,
          we bring your vision to life, delivering apps that meet modern
          technology demands and user expectations.
        </p>
        <Link to="/about" className="about-btn">
          About us
        </Link>
        <h1>Partners</h1>
      </div>
    </div>
  );
}
