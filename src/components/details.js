import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfo } from '../app/fetch';
import { loadDetails } from '../redux/reducer';

const Details = () => {
  const symbol = useParams().indexID;
  const companies = useSelector((store) => store.companies);
  const company = companies.filter((company) => company.symbol === symbol)[0];
  const dispatch = useDispatch();

  useEffect(async () => {
    if (company.details) return;
    const companyInfo = await getInfo(symbol);
    dispatch(loadDetails(companyInfo[0]));
  }, []);
  return (
    <div className="bg-blue2">
      <div className="grid grid-cols-2 p-4">
        <div className="m-auto">
          <p className="font-extrabold text-7xl text-blue-dark">
            {symbol}
          </p>
        </div>
        <div className="text-right">
          <h2 className="my-auto uppercase font-extrabold">
            {company.name}
          </h2>
          <p>
            {company.headQuarter}
          </p>
          <p className="">
            {'$ '}
            {Number(company.details.avgVolume).toLocaleString('en')}
          </p>
        </div>
        <div />
      </div>
      <h3 className="text-left bg-blue-dark px-2 uppercase">
        Details of
        {' '}
        {company.name}
      </h3>

    </div>
  );
};

export default Details;
