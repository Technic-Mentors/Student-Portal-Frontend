import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './layout/Sidebar'
import AdminNavbar from './layout/AdminNavbar'

function EditAdmin() {
  return (
    
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            <div className="titlebar">
              <h3>Edit Admin</h3>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="fname"
                    name="fname"
                    aria-describedby="fname"
                    placeholder="First Name..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control form-control-user"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Email..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control form-control-user"
                    id="cpass"
                    name="cpass"
                    aria-describedby="cpass"
                    placeholder="Confirm Password..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Permissions</label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Admin Management
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Student Management
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Quiz Management
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Parent Management
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Payment Management
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Paper Management
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="fname"
                    name="fname"
                    aria-describedby="fname"
                    placeholder="First Name..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="password"
                    name="pass"
                    aria-describedby="password"
                    placeholder="Password..."
                  />
                </div>
              </div>
              <div className="col-3">
                <Link to="/adminlist" className="tableviewbtn mb-3">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAdmin
