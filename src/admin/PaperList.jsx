import React from 'react'
import Sidebar from './layout/Sidebar'
import AdminNavbar from './layout/AdminNavbar'
import { Link } from 'react-router-dom'

function PaperList() {
  return (
    
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          
          <div className="container-fluid">
            
            <div className="titlebar">
              <h3>Paper List</h3>
            </div>
            <div className="row justify-content-end align-items-end mb-1">
              <div className="col-3">
                
              <Link to="/createpaperview" className="viewbtn mb-3">
                  Create Paper
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
                    <th>Sr</th>
                    <th>Paper Title</th>
                    <th>Easy</th>
                    <th>Medium</th>
                    <th>Hard</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Paper Classes</td>
                    <td>2</td>
                    <td>5</td>
                    <td>7</td>
                    <td>
                      <Link to="/viewpaperdetail" className="tableviewbtn">
                          View
                        </Link>
                        <Link to="/createpaperview" className="text-black">
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
  )
}

export default PaperList
