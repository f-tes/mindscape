// frontend/src/App.js
import React, { useState } from "react";
import "./App.css"; // You can add your own styles here

function App() {
  const [thoughts, setThoughts] = useState("");
  const [prediction, setPrediction] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a request to your backend API to get procrastinator type prediction
    const response = await fetch("https://your-backend-api.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ thoughts }),
    });

    const data = await response.json();
    setPrediction(data.prediction); // assuming the API returns a 'prediction' field
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mindscape</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            placeholder="Enter your thoughts here..."
            className="thoughts-input"
            style={{ fontFamily: "San Francisco, Arial, sans-serif" }} // Apple font style
          />
          <button type="submit">Analyze</button>
        </form>
        {prediction && <p>Your procrastinator type: {prediction}</p>}
      </header>
    </div>
  );
}

export default App;
