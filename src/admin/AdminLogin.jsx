import { Link } from "react-router-dom";
import logo from "../assets/logo2.png"
function AdminLogin() {
  return (
    <>
      <div className="container py-5">
        {/* <div className="wrap"> */}
        <div className="row mx-5 loginType bg-white">
          <div className="col-md-4 bg-success">
            <Link to="/"> <i className="fas fa-arrow-left mt-3" style={{ fontSize: "30px", color: "white" }}></i></Link>
            <div className="d-flex justify-content-center">
              <img src={logo} alt="site logo" style={{ boxShadow: "0 0 20px rgb(24, 131, 81)" }} />
            </div>
            <h5 style={{ fontWeight: "bold" }} className="mt-3 text-center">Welcome Back!</h5>
            <p className="text-center text-white" style={{ fontWeight: "100" }}>To keep connected with us please <br /> login with your personal info</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-light">Sign Up</button>
            </div>
          </div>
          <div className="col-md-8 py-7">
            <h5 className="text-center" style={{ fontWeight: "bold" }}>Admin Login</h5>
            <div className="d-flex justify-content-center">
              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <div className=" mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="custom-control custom-checkbox small">
                    <input
                      type="checkbox"
                      className="custom-control-input me-2"
                      id="customCheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="trial-btn d-flex justify-content-center">
                  <Link to="/dashboard" className="btn btn-large freetrial" style={{fontSize:"13px"}}>
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
     
    </>
  );
}

export default AdminLogin;
