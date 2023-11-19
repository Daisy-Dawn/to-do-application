import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import Button from "@mui/material/Button";

export const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavIcon = () => {
    setNavBar(!navBar);
  };
  return (
    <header>
      <div className="w3-col header-wrapper">
        <div className="w3-col">
          <div className="w3-col l5 s7">
            <div className="header-logo">
              <span>
                <img
                  className="logo-image"
                  src="/images/Home/logo.png"
                  alt=""
                />
              </span>
              <h2 className="header-name">CreativeME</h2>
            </div>
          </div>
          <div className="w3-col l7 s5">
            <nav>
              <ul className={navBar ? "nav-links close" : "nav-links"}>
                <li>
                  <Button className="header-text-button" variant="text">
                    <NavLink to="/">Home</NavLink>
                  </Button>
                </li>
                <li>
                    <NavLink to="login"><Button className="header-login-button" variant="contained">Login</Button></NavLink>
                </li>
                <li>
                  <NavLink to="register">
                    <Button className="header-register-button">SignUp</Button>
                  </NavLink>
                </li>
                <li>
                  <Button className="header-text-button" variant="text">
                    <NavLink to="contact">Contact</NavLink>
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="hamburger">
              <span className="bar" onClick={toggleNavIcon}>
                {navBar ? <FaTimes /> : <FaBars />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
