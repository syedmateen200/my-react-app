import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome User!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      {name && <p>Hello, {name}! Welcome to the app!</p>}
    </div>
  );
}

export default App;
