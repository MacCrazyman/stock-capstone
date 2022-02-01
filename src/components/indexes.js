import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import nasdaqLogo from '../img/nasdaqLogo.svg';

const Indexes = () => {
  const companies = useSelector((store) => store.companies);
  return (
    <div>

      <div className="grid grid-cols-2 gap-1 bg-blue2">
        <div><img src={nasdaqLogo} alt="Nasdaq Logo" /></div>
        <h2 className="mx-auto">Nasdaq companies!</h2>
      </div>

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
