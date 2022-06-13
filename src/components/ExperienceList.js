import React from "react";
import PropTypes from "prop-types"; // ES6
import { ExperienceItem } from "../components/ExperienceItem";
import "../styles/ExperienceItem.css";

export const ExperienceList = ({ title, description, data }) => {
  return (
    <div
      className="experience-item-page-container"
      id={`${title == "Work Experience" ? "work" : "projects"}`}
    >
      <div
        className={`page-heading-container ${
          title == "Work Experience"
            ? "work-page-heading"
            : "project-page-heading"
        }`}
      >
        <h1>{title}</h1>
      </div>
      <p className="page-desc">{description}</p>
      <div className="experience-items-container">
        {data.experience.map((item, i) => (
          <ExperienceItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

ExperienceList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.object,
};
