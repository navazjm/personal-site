import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { CirclesBackgroundAnimation } from "../components/Home/CirclesBackgroundAnimation.js";
import { MouseScrollAnimation } from "../components/Home/MouseScrollAnimation.js";
import { SideNavbar } from "../components/SideNavbar.js";
import { About } from "../components/About.js";
import { ExperienceList } from "../components/ExperienceList.js";
import { Footer } from "../components/Footer.js";
import WorkData from "../data/Works.json";
import ProjectsData from "../data/Projects.json";
import "../styles/Home.css";
import resumePdf from "../data/resume.pdf";

export const Home = ({ currentRoutePath }) => {
  const [showMouseScrollAnimation, setShowMouseScrollAnimation] =
    useState(true);

  const hideMouseScrollAnimation = () => {
    setShowMouseScrollAnimation(false);
  };

  useEffect(() => {
    console.log(currentRoutePath);

    if (currentRoutePath && currentRoutePath != "/") {
      document.querySelector(currentRoutePath.slice(1)).scrollIntoView();
    }

    window.addEventListener("scroll", () => {
      if (showMouseScrollAnimation) hideMouseScrollAnimation();

      // change active side navbar link based on current scroll scroll position
      const sideNavbarLinks = document.querySelectorAll(".side-navbar-link");
      const height = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      const index = Math.abs(Math.floor(scrollPosition / height));
      sideNavbarLinks.forEach((link, currentIndex) => {
        if (currentIndex === index) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    });
  }, []);

  return (
    <>
      <CirclesBackgroundAnimation />
      <SideNavbar />
      <div className="container">
        <div className="home-container" id="home">
          <div className="home-heading">
            <div>
              <h1 className="home-heading-name">Michael Navarro</h1>
              <h4 className="home-heading-role">Software Engineer</h4>
            </div>
            <div className="home-action-buttons-wrapper">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="home-action-button"
              >
                View CV
              </a>
              <a
                href="#work"
                className="home-action-button home-view-work-button"
              >
                View Work
              </a>
            </div>
          </div>
          {showMouseScrollAnimation && <MouseScrollAnimation />}
        </div>
        <About />
        <ExperienceList
          title={"Work Experience"}
          description={""}
          data={WorkData}
        />
        <ExperienceList
          title={"Favorite Projects"}
          description={"Collection of open source and personal projects."}
          data={ProjectsData}
        />
        <Footer />
      </div>
    </>
  );
};

Home.propTypes = {
  currentRoutePath: PropTypes.string,
};
