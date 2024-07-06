import React from 'react'

function StudentReg() {
  return (
    <div>
        <div className="container">
          <form>
            <h1 className="text-green text-center m-5">Student Registration</h1>
            <div className="row">
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="username"
                  placeholder="Email"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Date of Birth</label>
                <input
                  className="form-control"
                  type="text"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">
                  Current year group of study
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="standard"
                  placeholder="Current year group of study"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Age</label>
                <input
                  className="form-control"
                  type="text"
                  name="age"
                  placeholder="Age"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="col-6 mb-3 form-group">
                <label className="text-secondary mb-2">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="cpassword"
                  placeholder="confirm Password"
                />
              </div>
            </div>
            <div className="trial-btn text-center">
              <button className="btn btn-small" type="submit">SIGN Up</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default StudentReg
