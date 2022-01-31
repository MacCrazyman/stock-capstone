const apiKey = '?apikey=44030c80fb15c77fce4fc0ec9423cd8e';
const API = 'https://financialmodelingprep.com/api/v3/';
const nasdaqEndpoint = 'nasdaq_constituent';
const companyEndpoint = 'quote/';

const getCompanies = () => fetch(API + nasdaqEndpoint + apiKey).then((response) => response.json());

export const getInfo = async (companySymbol) => {
  const response = await fetch(API + companyEndpoint + companySymbol + apiKey);
  return response.json();
};

export default getCompanies;
