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
    <div>
      <h2>{symbol}</h2>
      <p>{company.name}</p>
    </div>
  );
};

export default Details;
