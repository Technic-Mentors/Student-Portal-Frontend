import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link  to="/dashboard" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Student Portal</div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <li className="nav-item">
                <Link className="nav-link" to="/adminlist">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Admin Management</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <li className="nav-item ">
                <Link className="nav-link" to="/studentlist">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Student List</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <li className="nav-item ">
                <Link className="nav-link" to="/questionlist">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Questions List </span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <li className="nav-item ">
                <Link className="nav-link" to="/paperlist">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Paper List </span></Link>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar
