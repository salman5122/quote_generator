import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(quote);
    alert("Quote copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      <p className="quote">{quote}</p>
      <button onClick={getRandomQuote}>New Quote</button>
      <button onClick={copyQuote} style={{ marginLeft: '10px' }}>Copy Quote</button>
    </div>
  );
}

export default App;