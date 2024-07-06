import React from "react";
import Sidebar from "./layout/Sidebar";
import AdminNavbar from "./layout/AdminNavbar";
import { Link } from "react-router-dom";

function ViewQuestionDeatil() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminNavbar />

          <div className="container-fluid">
            <div className="titlebar">
              <h3>Question Detail</h3>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-5">
                <div className="row">
                  <div className="col-7">
                    <div className="profile-detail">
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        SR
                      </div>
                      <div className="text-capitalize mb-2 fw-bold text-green">
                        Total Number of Questions
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="profile-detail">
                      <div className="mb-2 text-black fw-bold">1</div>
                      <div className="mb-2 text-black fw-bold">5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <Link to="/editquestion" className="tableviewbtn mb-3">
                  Edit
                </Link>
              </div>

              <div className="col-12 mt-5">
                <div className="bg-grey d-flex justify-content-around p-1 mb-2">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="text-green">Easy</div>
                </div>
                <div className="bg-grey d-flex justify-content-around p-1 mb-2">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="text-green">Easy</div>
                </div>
                <div className="bg-grey d-flex justify-content-around p-1 mb-2">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="text-green">Easy</div>
                </div>
                <div className="bg-grey d-flex justify-content-around p-1 mb-2">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="text-green">Easy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewQuestionDeatil;
