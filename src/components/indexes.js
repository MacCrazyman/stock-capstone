import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Indexes = () => {
  const companies = useSelector((store) => store.companies);
  return (
    <div>
      <h2>Companies section!</h2>
      {companies.slice(0, 5).map((company) => (
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
          <Link to={company.symbol}> Link to details</Link>
        </div>
      ))}
    </div>
  );
};

export default Indexes;
