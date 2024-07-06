import React, { Component } from "react";

export class ProfileDetail extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="titlebar">
            <h5>Profile view</h5>
          </div>

          <div className="row align-items-center justify-content-between">
            <div className="col-3">
              <div className="prfile-img text-center">
                <img src="img/profile.png" alt="" />
                <div className="mt-2">
                  <a className="editbtn" href="/edit-profile">
                    Edit Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <div className="profile-detail">
                    <div className="text-capitalize mb-2 text-black fw-bold">Name</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Date of birth</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Age</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Current year of Study</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Number</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Email</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile-detail">
                    <div className="text-green mb-2">Fahad</div>
                    <div className="text-green mb-2">1995</div>
                    <div className="text-green mb-2">35</div>
                    <div className="text-green mb-2">12</div>
                    <div className="text-green mb-2">0900078601</div>
                    <div className="text-green mb-2">faha@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="row mb-3"><div className="col-12"><h4 className="text-green">Additional Information <span className="text-black">(Optional)</span></h4></div></div>
              
              <div className="row">
                <div className="col-6">
                  <div className="profile-detail">
                    <div className="text-capitalize mb-2 text-black fw-bold">Parent Name</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Parent Number</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Address</div>
                    <div className="text-capitalize mb-2 text-black fw-bold">Email</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile-detail">
                    <div className="text-green mb-2">Fahad</div>
                    <div className="text-green mb-2">09890876</div>
                    <div className="text-green mb-2">lahore</div>
                    <div className="text-green mb-2">fahad2@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetail;
