import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Moon Adminpanel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-text">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/workspace">Workspace</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/eventlog">Event Log</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled" aria-disabled="true">Log out</button>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/auth">Log in</Link>
              </li>
            </ul>
          </div>
          </span>
        </div>
      </nav>
    </div>
  );
}
