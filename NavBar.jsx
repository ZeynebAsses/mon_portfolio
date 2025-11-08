import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#222", color: "white" }}>
      <Link to="/Home" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/projects" style={{ marginRight: "15px", color: "white" }}>Projects</Link>
      <Link to="/Contact" style={{ marginRight: "15px", color: "white" }}>Contact</Link>
      {!isLoggedIn ? (
        <Link to="/login" style={{ marginLeft: "15px", color: "white" }}>Login</Link>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: "15px" }}>Logout</button>
      )}
    </nav>
  );
}
