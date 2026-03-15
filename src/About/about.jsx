import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaFileAlt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaTools } from "react-icons/fa";

import './about.css';
const About = () => {
    return (
    <div className="about-main">
        <div className="about-head">
            <h1>About Me</h1>
        </div>
        <div className="about-icon">
           <CgProfile className="profile" />
        </div>
        <div className="about-content">
            <p>I'm Gurleen Kaur, a passionate Front-End Developer dedicated to creating clean, responsive, and user-friendly web interfaces. I love turning ideas into functional, beautiful digital experiences using modern web technologies.</p>
        </div>
       <a href="/Gurleen_Kaur_Resume.pdf" download="Gurleen_Kaur_Resume.pdf">
  <button className="Resume">
    <FaFileAlt className="btn-icon" />
    Download Resume
  </button>
</a>
       <div className="about-skills">

    <div className="skill-head">
        <FaTools className="tool-icon" />
        <h1>Skills & Technologies</h1>
    </div>

    <div className="skill-grid">

        <div className="skill-box">
            <TiHtml5 className="skill-icon" />
            <h2>HTML</h2>
            <div className="progress-bar"><span style={{ width: "95%" }}></span></div>
            <p>95%</p>
        </div>

        <div className="skill-box">
            <MdCss className="skill-icon" />
            <h2>CSS</h2>
            <div className="progress-bar"><span style={{ width: "92%" }}></span></div>
            <p>92%</p>
        </div>

        <div className="skill-box">
            <FaReact className="skill-icon" />
            <h2>React</h2>
            <div className="progress-bar"><span style={{ width: "95%" }}></span></div>
            <p>95%</p>
        </div>

        <div className="skill-box">
            <IoLogoJavascript className="skill-icon" />
            <h2>Javascript</h2>
            <div className="progress-bar"><span style={{ width: "95%" }}></span></div>
            <p>95%</p>
        </div>

    </div>
</div>

    </div>
    )
}
export default About