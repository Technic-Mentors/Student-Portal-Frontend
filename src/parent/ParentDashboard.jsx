import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ParentDashboard extends Component {
  render() {
    return (
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
              <div className="text-capitalize mb-2 text-black fw-bold">Age</div>
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
        <div className="row justify-content-end">
          <div className="col-4">
            <div>
              <Link to="/QuizResult" className="editbtn h4">
                This Week Quiz Result
              </Link>
            </div>
          </div>
        </div>
        <div className="titlebar">
          <h5>Previous Quizz</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
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
    );
  }
}

export default ParentDashboard;
