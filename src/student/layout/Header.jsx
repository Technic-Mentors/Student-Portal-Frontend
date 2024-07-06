import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-green">
          <div className="container-fluid">
            <Link  className="navbar-brand" to="/">
              <img src="img/logo2.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="dropdown">
                <button
                  className="btn text-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fahad Maqsood
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/ResetPassword" className="dropdown-item">
                      Reset Password
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
