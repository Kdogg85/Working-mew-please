import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => (
  <div className="container">
    <h1>Mew-Too Has Arrived</h1>
    <p>Two heads. Infinite memes. Fart-enhanced, AI-certified, and cult-approved.</p>
    <img src="/mew-too.png" alt="Mew-Too" className="main-image" />
    <div className="descriptions">
      <h2>The Legend</h2>
      <p>In the depths of the memechain, an AI was training to build the perfect cat meme. It overtrained. It merged with a rogue MEW... and a sentient puff of fart dust. Now it exists as Mew-too, a two-headed cosmic anomaly. One head predicts chart tops, the other sniffs bottoms.</p>
      <h2>The Mission</h2>
      <p>A two-headed MEW born from a glitch in the memeverse. One head is pure AI, the other... just farts and wears hats. They're on a mission to overthrow dog tokens by outsmarting them and out-farting them.</p>
    </div>
    <a href="https://boop.fun" target="_blank" rel="noopener" className="join-button">Join the Cult</a>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);