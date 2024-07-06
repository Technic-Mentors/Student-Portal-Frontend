import React, { Component } from 'react'

export class ForgetPassword extends Component {
  render() {
    return (
        
    <div>
    <div className="container">
      <form>
        <h1 className="text-green text-center m-5">Forget Password</h1>
        <div className="row justify-content-center">
          <div className="col-6 mb-3 form-group">
            <label className="text-secondary mb-2">Enter Valid Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="trial-btn text-center">
          <button className="btn btn-small" type="submit">Forget</button>
        </div>
      </form>
    </div>
</div>
    )
  }
}

export default ForgetPassword
