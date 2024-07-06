import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h4 className="fw-bold text-center fs-3 m-5">Time Remaining</h4>
          </div>
        </div>
        <div className="titlebar text-center">
          <h5>Q1 of 30</h5>
        </div>
        <div className="row">
          <div className="col-4">
            <h6 className="fw-bold text-center">Chosse Question</h6>
            <div className="qtsList selected">Question 01</div>
            <div className="qtsList">Question 02</div>
            <div className="qtsList">Question 03</div>
            <div className="qtsList">Question 04</div>
            <div className="qtsList">Question 05</div>
            <div className="qtsList">Question 06</div>
            <div className="qtsList">Question 06</div>
            <div className="qtsList">Question 07</div>
            <div className="qtsList">Question 08</div>
          </div>
          <div className="col-8">
            <div className="qts fw-bold fs-3 text-center">
              Q. Which of the following country has largest population?
            </div>
            <div className="ans mt-5">
                <h4 className="fw-bold text-center">Chose One Option</h4>
              <label>
                <input
                  type="radio"
                  name="demo"
                  className="card-input-element d-none"
                  id="demo1"
                />
                <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                  Option 1
                </div>
              </label>
              <label className="mt-3">
                <input
                  type="radio"
                  name="demo"
                  className="card-input-element d-none"
                  value="demo2"
                />
                <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                  Option 2
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
