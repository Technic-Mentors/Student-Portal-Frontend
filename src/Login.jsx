import React from 'react'
import { Link } from 'react-router-dom'
import './assets/login.scss'

function Login() {
  return (
    <div className="container">
        <div className="wrap">
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/studentreg" className="link ghost">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1 className="text-green text-center">SIGN IN</h1>
              <input type="email" name="username" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <Link className="text-secondary mb-2" to="/forget">
                Forgot your password?
              </Link>
              <Link to="/studentdashboard" className="link" type="submit">SIGN IN</Link>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login
