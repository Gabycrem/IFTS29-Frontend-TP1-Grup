import React from "react";

const MemberProfile = ({ name, skills, projects, technologies }) => {
  return (
    <div className="member-profile">
      <h1>{name}</h1>

      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>{project}</li>
        ))}
      </ul>

      <h2>Tecnologías</h2>
      <div className="tech-icons" style={{ display: "flex", gap: "1rem" }}>
        {technologies.map((tech, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: "40px", height: "40px" }}
            />
            <p style={{ fontSize: "0.8rem" }}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberProfile;
