import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()
  const isLinkActive = (link) => {
    if (location.pathname === link) {
      return "active"
    }
  }
  return (
    <div className="container-fluid mt-4">
      <nav className="navbar navbar-expand-lg bg-green">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{width:"200px"}}>
            <img src="img/logo2.png" alt="" style={{ height: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarNav justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className={`nav-item ${isLinkActive("/")}`}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>
              <li className={`nav-item ${isLinkActive("/paper")}`}>
                <Link className="nav-link" to="/paper">
                  Papers
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>
              <li className={`nav-item ${isLinkActive("/aboutus")}`}>
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>
              <li className={`nav-item ${isLinkActive("/contactus")}`}>
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>
              <li className={`nav-item ${isLinkActive("/admin")}`}>
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>
              <li className={`nav-item ${isLinkActive("/logintype")}`}>
                <Link className="nav-link" to="/logintype">
                  Free Trial/Login
                </Link>
                <div className="d-flex justify-content-center navIcon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
