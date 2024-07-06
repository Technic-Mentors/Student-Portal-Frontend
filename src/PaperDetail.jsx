import { Component } from "react";
import { Link } from "react-router-dom";

export class PaperDetail extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row align-items-baseline">
            <div className="col-7">
              <div className="bannertitle">
                <h1>Paper</h1>
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
            <div className="col-5">
              <div className="bannerImg p-5">
                <img src="img/paper.png" alt="img" className="w-75" />
              </div>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="titlebar text-center">
          <h2>June 2023</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center question-list bg-grey p-1 mb-3">
                <div><span>Q1.</span>Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry.</div>
                <span>EASY</span>
              </div>
              <div className="text-center question-list bg-grey p-1 mb-3">
                <div className="elippse"><span>Q2.</span>Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry.</div>
                <span>EASY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaperDetail;
