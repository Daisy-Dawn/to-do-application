import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "../../utils/AuthContext";

export const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const toggleNavIcon = () => {
    setNavBar(!navBar);
  };
  const { user, logOutUser } = useAuth();
  // const navigate = useNavigate();
  // const logOutClick = () => {
  //   navigate("/login");
  // };
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
                {user ? (
                  <>
                    <li>
                      <NavLink to="/">
                        <Button className="header-text-button" variant="text">
                          Home
                        </Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="dashboard">
                        <Button className="dashboard-button">Dashboard</Button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="contact">
                        <Button className="header-text-button" variant="text">
                          Contact
                        </Button>
                      </NavLink>
                    </li>
                    <li>
                      <Button
                        onClick={logOutUser}
                        className="header-login-button"
                        variant="contained"
                      >
                        LogOut
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Navlink to="login">
                        {" "}
                        <Button className="header-text-button" variant="text">
                          {" "}
                          Login
                        </Button>
                      </Navlink>
                    </li>
                  </>
                )}
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
