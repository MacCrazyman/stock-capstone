import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import getCompanies from './app/fetch';
import { loadCompanies } from './redux/reducer';

function App() {
  const dispatch = useDispatch();
  const companiesStore = useSelector((store) => store.companies);
  useEffect(async () => {
    const companies = await getCompanies();
    dispatch(loadCompanies(companies));
  }, []);
  return (
    <div className="App pt-6">
      <header className="App-header mx-auto bg-blue flex px-4 fixed top-0 w-full z-10">
        <NavLink to="/" className="flex w-full">
          <p>&#60;</p>
          <h2 className="m-auto">
            {' '}
            Companies
          </h2>
          <span className="w-4 h-4 bg-microphone bg-cover my-auto mr-6" />
          <span className="w-4 h-4 bg-gear bg-cover my-auto" />
        </NavLink>
      </header>
      <main className="w-full">
        {companiesStore.length !== 0 ? <Outlet /> : 'Loading Data...'}
      </main>
      <footer className="bg-blue-dark fixed bottom-0 w-full">
        CC License
      </footer>
    </div>
  );
}

export default App;
