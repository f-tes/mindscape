import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-api-url.com/analyze', {
        text: userInput,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="What's on your mind?"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit">Analyze</button>
        </form>
        {result && (
          <div className="result">
            <h3>Type of Procrastinator: {result.procrastinatorType}</h3>
            <p>Suggested CBT Module: {result.cbtModule}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
