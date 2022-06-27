import React from "react";
import "../styles/SideNavbar.css";

export const SideNavbar = () => {
    return (
        <nav className="side-navbar-container">
            <ul className="side-navbar-ul">
                <li>
                    <a
                        href="#home"
                        className="side-navbar-link active-link"
                    ></a>
                </li>
                <li>
                    <a href="#about" className="side-navbar-link"></a>
                </li>
                <li>
                    <a href="#work" className="side-navbar-link"></a>
                </li>
                <li>
                    <a href="#projects" className="side-navbar-link"></a>
                </li>
            </ul>
        </nav>
    );
};
