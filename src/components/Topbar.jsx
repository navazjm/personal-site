/* eslint-disable indent */
import React, { useRef } from "react";
import PropTypes from "prop-types"; // ES6
import { NavLink } from "react-router-dom";
import mnLogo from "../images/logo.png";
import "../styles/Topbar.css";

export const Topbar = ({ currentRoutePath, setCurrentRoutePath }) => {
    const mobileNav = useRef();

    const showMobileNav = () => {
        mobileNav.current.style.right = 0;
    };

    const hideMobileNav = () => {
        mobileNav.current.style.right = "-1000px";
    };

    const handleRouteChange = (strRoute) => {
        setCurrentRoutePath(strRoute);
    };

    return (
        <nav className="topbar-nav">
            <div className="topbar-logo-wrapper">
                <a href="/" className="topbar-logo-link">
                    <img
                        src={mnLogo}
                        alt="michael navarro logo"
                        className="topbar-logo"
                    />
                </a>
            </div>
            <div className="topbar-links-wrapper">
                {currentRoutePath &&
                    currentRoutePath !== "/" &&
                    currentRoutePath !== "/#home" &&
                    currentRoutePath !== "/#about" &&
                    currentRoutePath !== "/#work" &&
                    currentRoutePath !== "/#projects" && (
                        <>
                            <NavLink
                                exact
                                to="/"
                                className="topbar-home-link"
                                title="Home"
                                onClick={() => handleRouteChange("/")}
                            >
                                <span></span>
                            </NavLink>
                            <NavLink
                                exact
                                to="/#about"
                                className="topbar-about-link"
                                title="About Me"
                                onClick={() => handleRouteChange("/#about")}
                            >
                                <span></span>
                            </NavLink>
                            <NavLink
                                exact
                                to="/#work"
                                className="topbar-work-link"
                                title="Work Experience"
                                onClick={() => handleRouteChange("/#work")}
                            >
                                <span></span>
                            </NavLink>
                            <NavLink
                                exact
                                to="/#projects"
                                className="topbar-projects-link"
                                title="Projects"
                                onClick={() => handleRouteChange("/#projects")}
                            >
                                <span></span>
                            </NavLink>
                        </>
                    )}
                {currentRoutePath && currentRoutePath !== "/blog" && (
                    <NavLink
                        exact
                        to="/blog"
                        className="topbar-blog-link"
                        title="Blog"
                        onClick={() => handleRouteChange("/blog")}
                    >
                        <span></span>
                    </NavLink>
                )}
                <a
                    href="mailto:michaelnavs@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="email"
                >
                    <span></span>
                </a>
                <a
                    href="https://github.com/michaelnavs"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                >
                    <span></span>
                </a>
                <a
                    href="https://www.linkedin.com/in/michael-navarro-297438167/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin"
                >
                    <span></span>
                </a>
            </div>
            <div className="topbar-hamburger-menu">
                <button
                    className="topbar-hamburger-menu-btn"
                    onClick={() => showMobileNav()}
                >
                    
                </button>
            </div>
            <div className="topbar-mobile-links-wrapper" ref={mobileNav}>
                <div className="topbar-mobile-logo-wrapper">
                    <a href="/" className="topbar-logo-link">
                        <img
                            src={mnLogo}
                            alt="michael navarro logo"
                            className="topbar-logo"
                        />
                    </a>
                    <button
                        className="topbar-mobile-nav-close-btn"
                        onClick={() => hideMobileNav()}
                    >
                        
                    </button>
                </div>
                <div className="topbar-mobile-links-internal-wrapper">
                    <NavLink
                        exact
                        to="/"
                        className="topbar-home-link"
                        title="Home"
                        onClick={() => {
                            handleRouteChange("/");
                            hideMobileNav();
                        }}
                        activeClassName="active-link"
                    >
                        <span> Home</span>
                    </NavLink>
                    <NavLink
                        exact
                        to="/blog"
                        className="topbar-blog-link"
                        title="Blog"
                        onClick={() => {
                            handleRouteChange("/blog");
                            hideMobileNav();
                        }}
                        activeClassName="active-link"
                    >
                        <span> Blog</span>
                    </NavLink>
                </div>
                <div className="topbar-mobile-links-external-wrapper">
                    <a
                        href="mailto:michaelnavs@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        title="email"
                    >
                        <span></span>
                    </a>
                    <a
                        href="https://github.com/michaelnavs"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                    >
                        <span></span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michael-navarro-297438167/"
                        target="_blank"
                        rel="noreferrer"
                        title="Linkedin"
                    >
                        <span></span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

Topbar.propTypes = {
    currentRoutePath: PropTypes.string,
    setCurrentRoutePath: PropTypes.func,
};
