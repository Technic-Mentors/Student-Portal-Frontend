import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function QuizView() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />
          <div className="container-fluid">
            
            <div className="titlebar">
              <h3>Quiz View</h3>
            </div>
            <div className="container">
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div>
                  <h5 className="text-green">Show Result</h5>
                </div>
                <div>
                  <h6>22-07-2022</h6>
                </div>
              </div>
              <div className="titlebar d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Clever Cat</h5>
                <h6 className="mb-0">View Quiz !</h6>
              </div>
              <div className="row justify-content-between align-items-center mt-5 mb-3">
                <div className="col-5 text-center">
                  <h5>
                    Difficulty Level <span className="text-green">Hard</span>
                  </h5>
                  <div>
                    <figure className="pie-chart"></figure>
                  </div>
                </div>
                <div className="col-5 text-center">
                  <h5 className="text-green">Keep Practicing </h5>
                  <p className="fs-4">
                    You have answered
                    <br />
                    <span className="text-danger">1 Out of 12</span>
                    <br />
                    Question correctly
                  </p>
                </div>
              </div>

              <div className="titlebar d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Review Quiz</h5>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="qtsList selected">Question 01</div>
                </div>
                <div className="col-6">
                  <div className="qtsList deselected">Question 01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizView;
