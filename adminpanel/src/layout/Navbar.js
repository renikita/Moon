import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Moon Adminpanel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Moon Adminpanel Control</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/admin/workspace" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Workspace
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/admin/response-dashboard">Response Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/admin/eventlog">Event Log</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/admin/preferences">Preferences</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="nav-link disabled" aria-disabled="true">Log out</button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/auth">Log in</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
