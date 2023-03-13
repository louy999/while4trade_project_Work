import { NavLink } from "react-router-dom";
import "./navbar.css";
import photoProfile from "../../images/blank-profile-picture-gc8e2267bd_1280.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const NavBar = (props) => {
  return (
    <>
      <nav className={`navbar  navbar-expand-md  h-70`}>
        <div className="container-fluid">
          <span className="app-icon"></span>
          <NavLink className="navbar-brand" to="/">
            Dashboard
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2 nav-pills ">
              <span className="btn  position-relative">
                <FontAwesomeIcon icon={faBell} />

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </span>
              <div className="profile">
                <img className="profile-photo" src={photoProfile} alt="" />
                <span className="name">ahmed</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
