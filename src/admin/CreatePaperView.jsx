import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function CreatePaperView() {
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
            <div className="row align-content-center justify-content-around">
              <div className="col-12">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="fname"
                    name="fname"
                    aria-describedby="fname"
                    placeholder="Question Class..."
                  />
                </div>
              </div>
              <div className="col-7">

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
                    <div className="cards midchild card-body bg-light">
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
              </div>
              <div className="col-3">
                  <Link to="/addquestion" className="viewbtn px-5 fs-5">
                    +
                  </Link>
              </div>
              <div className="col-9">
                <div className="form-group mb-3">
                  <div>
                    <input
                      type="number"
                      className="form-control form-control-user"
                      id="fname"
                      name="fname"
                      aria-describedby="fname"
                      placeholder="Write Question..."
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="fname"
                    name="fname"
                    aria-describedby="fname"
                    placeholder="No of Question to genrate..."
                  />
                </div>
              </div>
              <div className="col-3">
                <Link to="/adminlist" className="tableviewbtn mb-3 px-5">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePaperView;
