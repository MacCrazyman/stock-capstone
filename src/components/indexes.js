import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import nasdaqLogo from '../img/nasdaqLogo.svg';

const Indexes = () => {
  const companies = useSelector((store) => store.companies);
  return (
    <div className="grid grid-cols-2 bg-blue2">

      <div className="w-40 mx-auto p-4"><img className="w-full" src={nasdaqLogo} alt="Nasdaq Logo" /></div>
      <h2 className="mx-auto object-center">Nasdaq companies!</h2>
      <h3 className="col-span-full text-left bg-blue-dark">List of companies</h3>
      {companies.slice(0, 98).map((company, index) => (
        <Link to={company.symbol} key={company.name} className={(index + 2) % 4 === 0 || (index + 3) % 4 === 0 ? 'bg-odd-blue' : 'bg-even-blue'}>
          <h4>{company.name}</h4>
          <p>
            Location:
            {company.headQuarter}
          </p>
          <p>
            Symbol:
            {company.symbol}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Indexes;
