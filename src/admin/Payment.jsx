import React from 'react'
import Sidebar from './layout/Sidebar'
import AdminNavbar from './layout/AdminNavbar'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          
          <div className="container-fluid">
            
            <div className="titlebar">
              <h3>Payment List</h3>
            </div>
            
          <div className="row">
            <div className="col-12">
              <table className="table table-striped admin-table">
                <thead>
                  <tr>
                    <th>Quiz Sr #</th>
                    <th>Quiz Title</th>
                    <th>Difficulty Level</th>
                    <th>Quiz Date</th>
                    <th>Grade</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>test</td>
                    <td>hard</td>
                    <td>22-01-2022</td>
                    <td>A+</td>
                    <td>
                      <Link to="/quizdetail" className="viewbtn">
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
  )
}

export default Payment
