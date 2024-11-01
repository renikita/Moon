import React from "react";
import { Link } from "react-router-dom";
import './home.css'
import "../../styles/fonts.css";


export default function Home() {
  return (
    <div>
      <div className="section-one">
        <div className="content">
          <h1>
            Safe <br/>Software<br/> Development
          </h1>
          <div className="top-btn">
            <Link to="/contacts" className="contact-btn">Contacts</Link>
            <Link to="/services" className="services-btn">Services</Link>
          </div>
        </div>
        <h2 className="about">About us</h2>
      </div>
    </div>
  );
}
