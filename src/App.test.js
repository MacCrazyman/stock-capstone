import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import configureStore from 'redux-mock-store';
import App from './App';

const companies = [
  {
    symbol: 'ATVI',
    name: 'Activision Blizzard',
    sector: 'Communication Services',
    subSector: 'Communication Services',
    headQuarter: 'Santa Monica, CALIFORNIA',
    dateFirstAdded: null,
    cik: '0000718877',
    founded: '1983-06-10',
  },
  {
    symbol: 'ADBE',
    name: 'Adobe',
    sector: 'Technology',
    subSector: 'Technology',
    headQuarter: 'San Jose, CALIFORNIA',
    dateFirstAdded: null,
    cik: '0000796343',
    founded: '1986-01-08',
  },
  {
    symbol: 'ADP',
    name: 'ADP',
    sector: 'Industrials',
    subSector: 'Industrials',
    headQuarter: 'Roseland, NEW JERSEY',
    dateFirstAdded: null,
    cik: '0000008670',
    founded: '1961-09-01',
  },
];

describe('Testing APP component', () => {
  test('Rendering companies', () => {
    const middlewares = [thunk, logger];
    const mockStore = configureStore(middlewares);
    const store = mockStore({ companies });
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
