import React from "react";
import profilePic from "../images/me.jpg";
import "../styles/About.css";

export const About = () => {
    return (
        <div className="about-page-container" id="about">
            <div className="page-heading-container">
                <h1>About me</h1>
            </div>
            <div className="about-page-content">
                <p>
                    Once I coded my first &quot;Hello, World!&quot; application,
                    I was hooked. Giving a computer instructions to do whatever
                    I wanted by typing keywords and funny symbols felt magical.
                    From there I got my hands dirty and began building as many
                    projects as I could. I finally found something that I was
                    passionate about.
                </p>
                <img
                    src={profilePic}
                    alt="michael navarro selfie"
                    className="about-page-profile-pic"
                />
            </div>
            <div className="about-page-tech-container">
                <p className="about-page-python" tabIndex="0">
                    
                </p>
                <p className="about-page-cpp" tabIndex="0">
                    
                </p>
                <p className="about-page-ts" tabIndex="0">
                    ﯤ
                </p>
                <p className="about-page-react" tabIndex="0">
                    
                </p>
                <p className="about-page-psql" tabIndex="0">
                    
                </p>
            </div>
        </div>
    );
};
