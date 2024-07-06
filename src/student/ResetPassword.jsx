import React, { Component } from "react";

export class ResetPassword extends Component {
  render() {
    return (
      <div className="container">
        <div className="titlebar">
          <h5>Reset Password</h5>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7 mb-3">
            <form>
              <div className="row mb-4">
                <label
                  for="colFormLabelSm"
                  className="col-sm-5 col-form-label col-form-label-sm"
                >
                  Password
                </label>
                <div className="col-sm-7">
                  <input
                    type="password"
                    className="form-control input-border"
                    id="colFormLabelSm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="row mb-4">
                <label for="colFormLabel" className="col-sm-5 col-form-label">
                  Confirm Password
                </label>
                <div className="col-sm-7">
                  <input
                    type="password"
                    className="form-control input-border"
                    id="colFormLabel"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <button className="editbtn" type="submit">
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
