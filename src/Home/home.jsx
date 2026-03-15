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
                <h3>Front End Developer</h3>
            </div>
            <div className="home-para">
                <p>I’m a dedicated Front-End Developer who loves turning ideas into visually appealing and responsive web interfaces. I specialize in creating clean, modern designs using HTML, CSS, and JavaScript, along with frameworks like React. My focus is on delivering smooth user experiences, optimizing performance, and writing maintainable code. I enjoy translating concepts into interactive digital experiences and continuously learning new tools to stay updated with the latest front-end trends.</p>
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