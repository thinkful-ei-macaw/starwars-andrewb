import React from 'react';
import './App.css'

function App() {
  return (
    <main className='content'>
      <header>
        <h1>THE STAR WARS API</h1>
      </header>
      <form>
        <h2>ENTER YOUR STAR WARS SEARCH CRITERIA HERE:</h2>
        <select>
          <option>Planets</option>
          <option>Spaceships</option>
          <option>Vehicles</option>
          <option>People</option>
          <option>Films</option>
          <option>Species</option>
        </select>

      </form>
      
    </main>
  );
}

export default App;