import React from "react";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1d0f0fff",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      marginTop: "3rem"
    }}>
      <p> Zaineb Asses  etudiante A ISGB</p>
      <p>
        Contact: <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox" style={{ color: "white" }}>mon mail </a>
      </p>
      <p>
        Réseaux sociaux : 
        <a href ="https://mail.google.com/mail/u/1/#inbox?compose=new">envoyer moi un email </a>
        <a href=" https://github.com/">mon compte github</a> 
        
      </p>
    </footer>
  );
}
