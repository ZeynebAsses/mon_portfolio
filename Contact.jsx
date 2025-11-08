import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required /><br/><br/>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
