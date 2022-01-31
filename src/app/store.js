import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockReducer from '../redux/reducer';

const store = configureStore({
  reducer: {
    companies: stockReducer,
  },
  middleware: [logger, thunk],
});

export default store;
