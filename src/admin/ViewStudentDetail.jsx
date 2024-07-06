import React from "react";
import AdminNavbar from "./layout/AdminNavbar";
import Sidebar from "./layout/Sidebar";

function ViewStudentDetail() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />

          <div className="container">
            <div className="titlebar">
              <h3>Student View</h3>
            </div>
            <div className="row justify-content-between">
              <div className="col-3">
                <div className="prfile-img text-center">
                  <img src="img/profile.png" alt="" />
                </div>
              </div>
              <div className="col-4">
                <h4 className="fw-bold mb-2">
                  Personal
                  <span className="text-green m-3">
                    Information
                  </span>
                </h4>
                <div className="row">
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Id
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        First Name
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Last Name
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Date of Birth
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Sex
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="mb-2 text-black fw-bold">1</div>
                      <div className="mb-2 text-black fw-bold">Fahad</div>
                      <div className="mb-2 text-black fw-bold">Maqsood</div>
                      <div className="mb-2 text-black fw-bold">22-07-1994</div>
                      <div className="mb-2 text-black fw-bold">Male</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h4 className="fw-bold mb-2">
                  Contact
                  <span className="text-green m-3">
                    Information
                  </span>
                </h4>
                <div className="row">
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Email
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Phone
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Address
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="mb-2 text-black fw-bold">fahad@gmail.com</div>
                      <div className="mb-2 text-black fw-bold">0090078601</div>
                      <div className="mb-2 text-black fw-bold">lahore</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="titlebar">
              <h3>Payment Method Status</h3>
            </div>
            <div className="row justify-content-around">
              
              <div className="col-4">
                <div className="row">
                  <div className="col-6 p-0">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Subscription
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Price
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Payment Status
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Issue Date 
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Expiry Date
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green brb pb-2">
                        Method
                      </div>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="profile-detail">
                      <div className="mb-2 pb-2 text-black fw-bold brb">Premium Plan </div>
                      <div className="mb-2 pb-2 text-black fw-bold brb">$ 78</div>
                      <div className="mb-2 pb-2 text-black fw-bold brb"><span className="badge bg-success">
                          Paid
                        </span></div>
                      <div className="mb-2 pb-2 text-black fw-bold brb">22-07-1994</div>
                      <div className="mb-2 pb-2 text-black fw-bold brb">22-07-1994</div>
                      <div className="mb-2 pb-2 text-black fw-bold brb">Master Card</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h4 className="mb-3">
                  <span className="fw-bold text-green brb pb-2">
                    Payment Method
                  </span>
                </h4>
                <div className="row">
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Visa Ending ****6576
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        fahad.appiteck@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-detail">
                      <div className="mb-2 text-black fw-bold">
                        <img src="img/download.png" alt=""/>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudentDetail;
