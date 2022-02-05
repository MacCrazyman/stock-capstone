import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import nasdaqLogo from '../img/nasdaqLogo.svg';

const Indexes = () => {
  const companies = useSelector((store) => store.companies);
  const [nameFilter, setFilter] = useState('');
  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div className="grid grid-cols-2 bg-blue2 pt-40 w-full">
      <div className="col-span-2 grid grid-cols-2 fixed top-6 w-full z-10 bg-blue2">

        <div className="w-40 mx-auto p-4"><img className="w-full" src={nasdaqLogo} alt="Nasdaq Logo" /></div>
        <div className="my-auto p-4 text-left">
          <h2 className="m-auto uppercase font-extrabold break-words">Nasdaq companies!</h2>
          <p className="m-auto capitalize break-words">
            {companies.length}
            {' companies'}
          </p>
        </div>
        <div className="col-span-full text-left bg-blue-dark px-2 flex py-1 gap-4">
          <h3 className="uppercase break-words">List of companies</h3>
          <input onChange={(e) => handleChange(e)} id="nameFilter" type="text" className="rounded-lg px-4 text-back break-words" placeholder="Search company" />
        </div>
      </div>
      {companies.filter((company) => RegExp(nameFilter)
        .test(company.name.toLowerCase()) || RegExp(nameFilter).test(company.symbol.toLowerCase()))
        .map((company, index) => (
          <Link to={company.symbol} key={company.name} className={`${(index + 2) % 4 === 0 || (index + 3) % 4 === 0 ? 'bg-odd-blue' : 'bg-even-blue'} grid grid-rows-3 relative`}>
            <div className="absolute top-0 right-0 p-2">&#10162;</div>
            <div className="m-auto row-span-2">
              <p className="font-extrabold text-5xl text-blue2 break-words">
                {company.symbol}
              </p>
            </div>
            <div className="p-4 text-right">
              <h4 className="font-extrabold uppercase break-words">{company.name}</h4>
              <p className="break-words">
                {company.headQuarter}
              </p>
            </div>

          </Link>
        ))}
    </div>
  );
};

export default Indexes;
