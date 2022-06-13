import React from "react";
import "../../styles/MouseScroll.css";

export const MouseScrollAnimation = () => {
  return (
    <a href="#about" id="mouse-scroll">
      <div className="mouse-scroll">
        <div className="mouse">
          <div className="mouse-in"></div>
        </div>
        <div>
          <span className="down-arrow-1"></span>
          <span className="down-arrow-2"></span>
          <span className="down-arrow-3"></span>
        </div>
      </div>
    </a>
  );
};
