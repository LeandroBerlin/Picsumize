import React from 'react';
import '../styles/App.css';
import Picsum from './Picsum';
import Title from './Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text="Picsum API" />
        <Picsum />
      </header>
    </div>
  );
}

export default App;
