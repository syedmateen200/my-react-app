import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    // Thiis display the content on main
    <div className="app-container">
      <div className="welcome-card">
        <h1>Welcome to the App!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          className="name-input"
        />
        {name && (
          <p className="personalized-message">
            Hello, <span className="user-name">{name}</span>! Welcome to the
            app!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
