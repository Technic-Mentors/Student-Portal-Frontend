import React from "react";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="container">
      <div className="row justify-content-between mt-5">
        <div className="col-6">
          <h4 className="text-green">Student Test Report</h4>
          
          <div>
          <figure className="pie-chart"></figure>
          </div>
        </div>
        <div className="col-3">
          <div>
            <Link to="/resultdetail" className="editbtn">
              Result
            </Link>
          </div>
          <h4 className="text-green text-center mb-3 mt-4"> Monthly Report</h4>
          <div className="d-flex justify-content-between mt-3">
            <div className="w-50">
              <ul className="list-unstyled border-end">
                <li className="text-green lh-lg">Oct</li>
                <li className="text-green lh-lg">NOv</li>
                <li className="text-green lh-lg">Dec</li>
                <li className="text-green fs-5 fw-bold">Average</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="lh-lg">55</li>
                <li className="lh-lg">67</li>
                <li className="lh-lg">70</li>
                <li className="text-green fs-5 fw-bold">70%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 mt-5 justify-content-center">
        <div className="col-3">
          <div className="bg-light p-3 shadow-sm">
            <h4 className="text-green">Top 3 Strenght</h4>
            <ul className="list-unstyled">
              <li className="lh-lg">Active</li>
              <li className="lh-lg">Brillient</li>
              <li className="lh-lg">Good</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="bg-light p-3 shadow-sm">
            <h4 className="text-green">Top 3 Weekness</h4>
            <ul className="list-unstyled">
              <li className="lh-lg">Bad Disciplain</li>
              <li className="lh-lg">Not Active</li>
              <li className="lh-lg">Lazy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
