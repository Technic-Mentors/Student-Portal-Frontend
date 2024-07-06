import { Component } from "react";
import { Link } from "react-router-dom";

export class Paper extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid pt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="">
                <h1>Papers</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="trial-btn">
                  <Link to="/logintype" className="btn btn-large freetrial">
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bannerImg">
                <img src="img/paper.png" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="border mt-5"></div>
        <div className="titlebar text-center">
          <h2>Available Papers</h2>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  Jun 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  July 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  Jun 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  July 2020
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  Jun 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  July 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  Jun 2020
                </Link>
              </div>
              <div className="trial-btn d-flex justify-content-center">
                <Link to="/paperdetail" className="btn btn-large freetrial">
                  July 2020
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paper;
