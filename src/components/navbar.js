import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">FitTrack</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">BMI</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calorie">Calorie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/water">Water Intake</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sleep">Sleep Cycle</Link>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
