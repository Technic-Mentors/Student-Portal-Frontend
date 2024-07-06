import React from "react";
import AdminNavbar from "./layout/AdminNavbar";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";

function StudentList() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            <div className="titlebar">
              <h3>Student List</h3>
            </div>
            <div className="row justify-content-end align-items-end mb-1">
              <div className="col-3">
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
                      <th>Student Name</th>
                      <th>Email</th>
                      <th>DOB</th>
                      <th>Payment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>test</td>
                      <td className="text-primary">fahad@gmail.com</td>
                      <td>22-07-2022</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <Link to="/studentviewdetail" className="tableviewbtn">
                          View
                        </Link>
                        <Link to="/deletestudent" className="text-danger ms-2">
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

export default StudentList;
