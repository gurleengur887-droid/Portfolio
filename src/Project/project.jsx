import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./project.css";

const Project = () => {
  return (
    <div className="project-main">
      <div className="project-head">
        <CiGlobe className="globe" />
        <h1>Projects</h1>
      </div>

      <div className="project-content">

        {/* SOIT Website */}
        <div className="project-container">
          <h2>SOIT Website</h2>
          <p>
            A clean and well-structured institutional website focusing on
            intuitive navigation and responsive design.
          </p>
          <ul>
            <li>Built with <b>HTML, CSS, JavaScript</b></li>
            <li>Fully responsive layout</li>
            <li>Modern UI elements and structured content flow</li>
          </ul>

          <button
            className="project-github-btn"
            onClick={() =>
              window.open(
                "https://github.com/gurleengur887-droid/SOIT-Project",
                "_blank"
              )
            }
          >
            <FaGithub /> GitHub Repo
          </button>
        </div>

        {/* EcoVolt Website */}
        <div className="project-container">
          <h2>EcoVolt Website</h2>
          <p>
            A sustainability-themed website showcasing eco-friendly products
            and brand identity.
          </p>
          <ul>
            <li>Developed using <b>React.js</b></li>
            <li>Smooth sections, reusable components</li>
            <li>Mobile-first approach with optimized performance</li>
          </ul>

          <button
            className="project-github-btn"
            onClick={() =>
              window.open(
                "https://github.com/gurleengur887-droid/My-First-Project",
                "_blank"
              )
            }
          >
            <FaGithub /> GitHub Repo
          </button>
        </div>

        {/* Bark & Brew Cafe */}
        <div className="project-container">
          <h2>Bark & Brew Cafe Website</h2>
          <p>
            A warm, aesthetic website designed for a pet-friendly café.
          </p>
          <ul>
            <li>Created with <b>HTML, CSS, JS</b></li>
            <li>Vibrant and friendly UI with custom styling</li>
            <li>Focus on user experience and brand personality</li>
          </ul>

          <button
            className="project-github-btn"
            onClick={() =>
              window.open(
                "https://github.com/gurleengur887-droid/Practice-Project",
                "_blank"
              )
            }
          >
            <FaGithub /> GitHub Repo
          </button>
        </div>

      </div>
    </div>
  );
};

export default Project;
