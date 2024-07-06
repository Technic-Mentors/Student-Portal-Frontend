import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function AdminProfile() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />

          <div className="container">
            <div className="titlebar">
              <h3>Profile View</h3>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 text-black fw-bold">
                        First Name
                      </div>

                      <div className="text-green mb-2 ms-2">Fahad</div>
                      <div className="text-capitalize mb-2 text-black fw-bold">
                        Email
                      </div>
                      <div className="text-green mb-2">fahad@gmail.com</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 text-black fw-bold">
                        Last Name
                      </div>

                      <div className="text-green mb-2 ms-2">Fahad</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="titlebar">
                        <h3>Permissions</h3>
                      </div>
                      <div>
                        <span className="badge bg-success ms-2">
                          Student Management
                        </span>
                        <span className="badge bg-success ms-2">
                          Payment Management
                        </span>
                        <span className="badge bg-success ms-2">
                          Paper Management
                        </span>
                        <span className="badge bg-success ms-2">
                          Quiz Management
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3">
                    <Link to="/" className="tableviewbtn">
                      Edit Admin
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
