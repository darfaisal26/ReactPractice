import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="headers">
            <nav id="nav-ul">
                <ul id="nav-ul-li">
                    <li>
                        <NavLink to="/" className="navl">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className="navl">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className="navl ">
                            Contact
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/Services" className="navl">
                            Services
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
