import React from "react";
import "./MemberProfile.css";

const MemberProfile = ({ name, skills, projects, technologies }) => {
  return (
    <div className="profileContainer card">
      <div className="profileHeader">
        <h1>{name}</h1>
      </div>

      <div className="section">
        <h2>Habilidades Principales</h2>
        <ul className="skillList">
          {skills.map((skill, i) => (
            <li key={i} className="skillItem">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Proyectos Destacados</h2>
        <ul className="projectList">
          {projects.map((project, i) => (
            <li key={i} className="projectItem">
              {project}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Tecnologías</h2>
        <div className="techGrid">
          {technologies.map((tech, index) => (
            <div key={index} className="techItem">
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="techIcon"
                  onError={(e) => {
                    e.target.src = "/placeholder-tech.png";
                  }}
                />
              ) : (
                <div className="techIconPlaceholder">
                  {tech.name.charAt(0)}
                </div>
              )}
              <span className="techName">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;