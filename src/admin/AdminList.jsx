import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";

function AdminList() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            <div className="titlebar">
              <h3>Admin List</h3>
            </div>
            <div className="row justify-content-end align-items-end mb-1">
              <div className="col-3">
                <Link to="/addadmin" className="viewbtn mb-3">
                  Create Admin
                </Link>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="search"
                    aria-describedby="serach"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                
                <table className="table table-striped admin-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Permissions</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>fahad@gmail.com</td>
                      <td>
                        <span className="badge bg-success">
                          Student Management
                        </span>
                      </td>

                      <td>
                        <Link to="/adminprofile" className="tableviewbtn">
                          View
                        </Link>
                        <Link to="/editadmin" className="text-black">
                          Edit
                        </Link>
                        <Link to="/deleteadmin" className="text-danger ms-2">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="...">
                  <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                      <Link
                        class="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <Link class="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminList;
