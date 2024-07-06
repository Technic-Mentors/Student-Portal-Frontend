import React, { Component } from "react";

import { Link } from "react-router-dom";
export class QuizResult extends Component {
  render() {
    return (
      <div className="container">
        <div className="fs-1 text-green">Quiz 1</div>
        <div className="titlebar">
          <h5>Student Detail</h5>
        </div>

        <div className="profile-info mb-3 border-0">
          <div className="row">
            <div className="col-2">
              <div>
                <img src="img/profile.png" alt="img" />
              </div>
            </div>
            <div className="col-5">
              <div className="fs-4 mb-3">
                Personal <span className="text-green">Information</span>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-green mb-2">ID</div>
                  <div className="text-green mb-2">First Name</div>
                  <div className="text-green mb-2">Last Name</div>
                  <div className="text-green mb-2">Date of Birth</div>
                </div>
                <div>
                  <div className="text-black mb-2">22</div>
                  <div className="text-black mb-2">Fahad</div>
                  <div className="text-black mb-2">Maqsood</div>
                  <div className="text-black mb-2">22-10-2021</div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="fs-4 mb-3">
                Contact <span className="text-green">Information</span>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-green mb-2">Email</div>
                  <div className="text-green mb-2">Phone</div>
                  <div className="text-green mb-2">Address</div>
                </div>
                <div>
                  <div className="text-black mb-2">test@gmail.com</div>
                  <div className="text-black mb-2">09008782</div>
                  <div className="text-black mb-2">Lahore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr #</th>
                  <th>Student</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Rank</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>Pakistan</td>
                  <td>Lahore</td>
                  <td>1</td>
                  <td>
                    <Link to="/quizdetail" className="viewbtn">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>Pakistan</td>
                  <td>Lahore</td>
                  <td>1</td>
                  <td>
                    <Link to="/quizdetail" className="viewbtn">
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>Pakistan</td>
                  <td>Lahore</td>
                  <td>1</td>
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

export default QuizResult;
