import { NavLink, Outlet } from 'react-router-dom';

const Indexes = () => (
  <div>
    <h2>Companies section!</h2>
    <NavLink to="/index/details"> Details</NavLink>
    <Outlet />
  </div>
);

export default Indexes;
