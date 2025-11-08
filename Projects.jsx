import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Projet1: my_app", description: "Description courte de projet 1" ,Link:"https://github.com/ZeynebAsses/my_app"},
  { id: 2, title: "Projet 2:bookclub", description: "Description courte projet 2",Link:""},
];

export default function Projects() {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Mes Projets</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project) => (
          <li key={project.id} style={{ margin: "1rem 0" }}>
            <Link to={`/project/${project.id}`} style={{ textDecoration: "none" }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
