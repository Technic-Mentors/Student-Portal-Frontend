import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function AddQuestion() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />

          <div className="container-fluid">
            <div className="titlebar">
              <h3>Add Question</h3>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label>Difficulty Level</label>
                </div>

                <div className="adminsite ans">
                  <label>
                    <input
                      type="radio"
                      name="demo"
                      className="card-input-element d-none"
                      id="demo1"
                    />
                    <div className="cards firstchild card-body bg-light">
                      Easy
                    </div>
                  </label>
                  <label className="mx-3">
                    <input
                      type="radio"
                      name="demo"
                      className="card-input-element d-none"
                      value="demo2"
                    />
                    <div className="cards midchild  card-body bg-light">
                      Medium
                    </div>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="demo"
                      className="card-input-element d-none"
                      value="demo2"
                    />
                    <div className="cards lastchild card-body bg-light">
                      Hard
                    </div>
                  </label>
                </div>
                <div className="form-group mb-3">
                  <label>Question</label>
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="fname"
                    name="fname"
                    aria-describedby="fname"
                    placeholder="Write Question..."
                  />
                </div>
                
                <Link to="/adminlist" className="tableviewbtn mb-3">
                  Submit
                </Link>
              </div>
              <div className="col-3">
                
                <Link to="/addquestion" className="viewbtn px-5 fs-5">
                    +
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
