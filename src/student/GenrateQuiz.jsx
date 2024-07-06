import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export class GenrateQuiz extends PureComponent {
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
                <Link to="/" className="editbtn h4">
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

          <div className="titlebar mt-5">
            <h5>Quiz Setting</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <img src="img/gear.png" alt="" />
            </div>
            <div className="col-4">
              <h4> Difficulty Level:</h4>
              <div className="form-check">
                <input
                  className="form-check-input fs-4"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label text-green fw-bold fs-4"
                  for="flexRadioDefault1"
                >
                  Easy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input fs-4"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label text-green fw-bold fs-4"
                  for="flexRadioDefault2"
                >
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input fs-4"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label
                  className="form-check-label text-green fw-bold fs-4"
                  for="flexRadioDefault3"
                >
                  Hard
                </label>
              </div>
              <div className="mt-5 mb-5">
                <Link to="/Question" className="editbtn h4">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenrateQuiz;
