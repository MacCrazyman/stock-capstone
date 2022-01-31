import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import getCompanies from './app/fetch';
import { loadCompanies } from './redux/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const companies = await getCompanies();
    dispatch(loadCompanies(companies));
  }, []);

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
