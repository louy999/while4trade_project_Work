import React from "react";
import { NavLink } from "react-router-dom";
import "../style/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = { bgDark: "", showBox: false };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let bgDark = "bg-body-tertiary";
      if (window.scrollY > 10) {
        bgDark = "bg-light";
      }
      this.setState({ bgDark });
    });
  }
  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

  render() {
    return (
      <nav className={`navbar navbar-expand-lg ${this.state.bgDark} h-70`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Whale4Trade
          </NavLink>
          <button
            className={`navbar-toggler animate__animated ${
              this.state.showBox ? " animate__shakeX" : ""
            } `}
            onMouseOver={this.handleBoxToggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faListUl} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2 nav-pills ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/singIn">
                  <FontAwesomeIcon icon={faRightToBracket} />
                  <span className="signin ">Sign in</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
