import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            <div className="titlebar">
              <h3>Dashboard</h3>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="dashboard-stats">
                  <div>
                    <span className="text-green">Total</span> Students
                  </div>
                  <div className="text-right text-green">25</div>
                </div>
              </div>
              <div className="col-3"><div className="dashboard-stats">
                  <div>
                    <span className="text-green">Pending</span> Students
                  </div>
                  <div className="text-right text-green">25</div>
                </div>
                </div>
              <div className="col-3"><div className="dashboard-stats">
                  <div>
                    <span className="text-green">Active</span> Students
                  </div>
                  <div className="text-right text-green">25</div>
                </div>
                </div>
              <div className="col-3"><div className="dashboard-stats">
                  <div>
                    <span className="text-green">Rejected</span> Students
                  </div>
                  <div className="text-right text-green">25</div>
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
                      <td><span className="badge bg-success">
                          Paid
                        </span></td>
                      <td>
                        <Link to="/studentview" className="viewbtn">
                          View
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

export default Dashboard;
