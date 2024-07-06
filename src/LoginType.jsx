import { Link } from "react-router-dom";
import "./assets/login.scss";
import logo from "./assets/logo2.png"
function LoginType() {
  return (
    <>
      <div className="container py-5">
        {/* <div className="wrap"> */}
        <div className="row mx-5 loginType bg-white">
          <div className="col-md-4 bg-success">
            <Link to="/"> <i className="fas fa-arrow-left mt-3" style={{ fontSize: "30px", color: "white" }}></i></Link>
            <div className="d-flex justify-content-center">
              <img src={logo} alt="site logo"/>
            </div>
            <h5 style={{ fontWeight: "bold" }} className="mt-3 text-center">Welcome Back!</h5>
            <p className="text-center text-white" style={{ fontWeight: "100" }}>To keep connected with us please <br /> login with your personal info</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-light">Sign In</button>
            </div>
          </div>
          <div className="col-md-8 py-6">
            <div className="trial-btn d-flex justify-content-center mb-5">
              <Link to="/Login" className="btn btn-large freetrial">
                Student Login
              </Link>
            </div>
            <div className="trial-btn d-flex justify-content-center mb-2">
              <Link to="/parentdashboard" className="btn btn-large freetrial">
                Parent Login
              </Link>
            </div>

          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default LoginType;
