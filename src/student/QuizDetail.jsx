import React, { Component } from "react";
import { Link } from "react-router-dom";

export class QuizDetail extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="titlebar">
            <h5>Parent Dashboard</h5>
          </div>
          <div className="profile-info mb-3">
            <div className="row justify-content-center align-items-center">
              <div className="col-2">
                <div className="position-absolute">
                  <img src="img/profile.png" alt="img" />
                </div>
              </div>
              <div className="col-4">
                <div className="text-capitalize mb-2 text-black fw-bold">
                  child (date of birth)
                </div>
                <div className="text-capitalize mb-2 text-black fw-bold">
                  Age
                </div>
                <div className="text-capitalize mb-2 text-black fw-bold">
                  Current year of group of study
                </div>
              </div>
              <div className="col-4">
                <div className="text-green mb-2">22-10-2021</div>
                <div className="text-green mb-2">22</div>
                <div className="text-green mb-2">2</div>
              </div>
              <div className="col-2">
                <div>
                  <Link to="/edit-profile" className="editbtn">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
    );
  }
}

export default QuizDetail;
