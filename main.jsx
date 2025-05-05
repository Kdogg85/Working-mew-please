import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Mew-Too Has Arrived</h1>
    <p>Two heads. Infinite power. Join the cult.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
