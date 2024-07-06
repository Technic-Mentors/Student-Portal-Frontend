import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";

import { Link } from "react-router-dom";

function ParentList() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />

          <div className="container-fluid">
            <div className="titlebar">
              <h3>Parent List</h3>
            </div>

            <div className="row">
              <div className="col-12">
                <table className="table table-striped admin-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Parent Name</th>
                      <th>Email</th>
                      <th>Student Name</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>test</td>
                      <td>fahad@gmail.com</td>
                      <td>2test</td>
                      <td>A+</td>
                      <td>
                        <Link to="/parentview" className="viewbtn">
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentList;
