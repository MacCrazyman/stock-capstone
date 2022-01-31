import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="index"> Home</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        CC License
      </footer>
    </div>
  );
}

export default App;
