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
      <header className="App-header mx-auto bg-blue flex px-4">
        <NavLink to="/"> &#60; </NavLink>
        <h2 className="mx-auto"> Companies </h2>
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
