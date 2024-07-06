import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand  bg-gradient-primary topbar mb-4 justify-content-end">
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
          </button>
          <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown no-arrow">
                

                  <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="dropdown">
                <span className="nav-link dropdown-toggle text-black" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Fahad Maqsood
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link to="/adminprofile" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/adminresetpassword" className="dropdown-item">
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
              </li>

          </ul>

      </nav>
    </div>
  )
}

export default AdminNavbar
