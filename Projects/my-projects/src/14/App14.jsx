import React from 'react';
import '../14/app14.css';
import Header from '../14/Header';
import MemeGenerator from '../14/MemeGenerator';
function App() {
  return (
    <div className="App">
      <Header 
      name="Meme Generator"
      />
      <MemeGenerator />
    </div>
  );
}

export default App;