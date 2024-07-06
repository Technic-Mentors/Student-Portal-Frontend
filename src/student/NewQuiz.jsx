import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewQuiz extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-between align-items-end mt-5">
            <div className="col-4">
              <div>
                <h6 className="text-secondary text-captalize">
                  Avaiable from monday 12:00pm to friday:12pm
                </h6>
                <Link to="/Question" className="editbtn h4">
                  Take a weekly test paper
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div>
                <Link to="/QuizSetting" className="editbtn h4">
                  Generate Quiz
                </Link>
              </div>
            </div>
          </div>
          <div className="titlebar">
            <h5>Student Dashboard</h5>
          </div>
          <div className="profile-info mb-5">
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
                  <Link to="/" className="editbtn">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewQuiz;
