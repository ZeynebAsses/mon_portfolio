import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  1: {title: "Projet my_app", description: "c'est une application mobile qui permet de gestioner la liste de contact de telephone" },
  2: { title: "Projet bookclub ", description: "c'est un site web qui permet de lire et ajouter  des livres  " },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
