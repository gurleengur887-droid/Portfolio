import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import './home.css';
const Home = () => {
    return (
        <div className="home-main">
            <div className="home-head">
                <h1>Gurleen Kaur</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <div className="home-para">
                <p>Detail-oriented Full Stack Developer skilled in building responsive, user-focused web applications using modern technologies like HTML, CSS, JavaScript, React.js, and Node.js. Strong ability to transform ideas into scalable digital solutions with clean UI/UX and optimized performance. Passionate about creating real-world impactful products and continuously improving development skills.</p>
            </div>
            <div className="home-icons">
             <a
                    href="https://github.com/gurleengur887-droid"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <FaGithub className="git-icon" />
                </a>
            
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/gurleen-kaur-b35359399"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <FaLinkedin className="link-icon" />
                </a>
            
                {/* Phone (optional: make it clickable) */}
                <a
                    href="tel:+91 8699157502"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <FaPhoneAlt className="phone-icon" />
                </a>
            </div>
        </div>
    )
}
export default Home