import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockRedurec from '../redux/reducer';

const store = configureStore({
  reducer: {
    companies: stockRedurec,
  },
  middleware: [logger, thunk],
});

export default store;
