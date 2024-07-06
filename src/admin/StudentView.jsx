import React from 'react'
import Sidebar from './layout/Sidebar'
import AdminNavbar from './layout/AdminNavbar'

function StudentView() {
  return (
    
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            
            <div className="titlebar">
              <h3>Student View</h3>
            </div>
            
          <div className="row">
            <div className="col-12">
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentView
