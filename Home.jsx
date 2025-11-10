import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const skills = ["HTML", "CSS",  "React"];

  return (
    <div style={{ textAlign: "center", marginTop: "5rem", backgroundImage: "url('/assets/background.jpg')", 
      height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0
         }}>
      <h1>Bienvenue sur le portfolio de :</h1>
      <h2>Zaineb - Étudiante a ISGB</h2>
      <img src="./assets/image.png" alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
      <div style={{ marginTop: "1rem" }}>
        <Link to="/projects" style={{ marginRight: "15px" }}>Voir mes projets</Link>
        <Link to="/contact">Me contacter</Link>
      </div>
      <h3 style={{ marginTop: "2rem" }}>Compétences principales :</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ display: "inline-block", margin: "0 10px", padding: "5px 10px", backgroundColor: "#007bff", color: "white", borderRadius: "5px" }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
