import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import Button from '@mui/material/Button';

export const Header = () => {
    const [navBar, setNavBar] = useState(false);

    const toggleNavIcon = () => {
        setNavBar(!navBar);
    }
  return (
    <header>
      <div className="w3-col header-wrapper" >
        <div className="w3-col">
                <div className="w3-col l5 s7">
                    <div className="header-logo">
                        <span>
                            <img className="logo-image" src="/images/Home/logo.png" alt="" />
                        </span>
                        <h2 className="header-name">Daisy Dawn Cooperation</h2>
                    </div>
                </div>
                <div className="w3-col l7 s5">
                    <nav>
                        <ul className={navBar ? "nav-links close" : "nav-links"}>
                            <li>
                            <Button className="header-text-button" variant="text"><NavLink to="/">Home</NavLink></Button>
                            </li>
                            <li>
                            <Button className="header-login-button" variant="contained"><NavLink to="login">Login</NavLink></Button>
                            </li>
                            <li>
                            <Button className="header-register-button" variant="contained"><NavLink to="register">Signup</NavLink></Button>
                            </li>
                            <li>
                            <Button className="header-text-button" variant="text"><NavLink to="about">About</NavLink></Button>                                
                            </li>
                        </ul>
                    </nav>
                    <div className="hamburger">
                        <span className="bar" onClick={toggleNavIcon}>
                            {navBar ? (<FaTimes />) : (<FaBars/>)}
                        </span>
                    </div>
            </div>
          </div>
      </div>
    </header>
  );
};
