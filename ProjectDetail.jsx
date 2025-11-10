import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  1: {
    title: "Projet my_app",
    description: "C'est une application mobile qui permet de gérer la liste des contacts du téléphone.",
    link: "https://github.com/ZeynebAsses/my_app"
  },
  2: {
    title: "Projet bookclub",
    description: "C'est un site web qui permet de voir, lire, ajouter, modifier et supprimer des livres.",
    link: "https://github.com/ZeynebAsses/book_club-"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p>Projet non trouvé </p>;

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>{project.title}</h1>
      <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "10px 20px",
          backgroundColor: "#002aff59",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
         Voir sur GitHub
      </a>
    </div>
  );
}



