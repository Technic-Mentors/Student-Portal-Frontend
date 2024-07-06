import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";

function AdminResetPassword() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <h1>Dashboard</h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-7 mb-3">
              <form>
                <div className="row mb-4">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-5 col-form-label col-form-label-sm"
                  >
                    Password
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="password"
                      className="form-control input-border"
                      id="colFormLabelSm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <label for="colFormLabel" className="col-sm-5 col-form-label">
                    Confirm Password
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="password"
                      className="form-control input-border"
                      id="colFormLabel"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    <button className="editbtn" type="submit">
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminResetPassword;
