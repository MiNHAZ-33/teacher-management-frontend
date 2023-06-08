import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import billRateReducer from '../reducerf/billRateReducer';

const reducer = combineReducers({
  billRate: billRateReducer
});

export const store = configureStore({
  reducer, middleware: [thunk]
})
