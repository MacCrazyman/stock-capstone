import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const Indexes = () => {
  const companies = useSelector((store) => store.companies);
  return (
    <div>
      <h2>Companies section!</h2>
      <NavLink to="/index/details"> Details</NavLink>
      <Outlet />
      {companies.map((company) => (
        <div key={company.name}>
          <h3>{company.name}</h3>
          <p>
            Location:
            {company.headQuarter}
          </p>
          <p>
            Symbol:
            {company.symbol}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Indexes;
