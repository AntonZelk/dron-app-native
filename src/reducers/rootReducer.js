import { combineReducers } from 'redux';
import { dronsReducer } from './dronsReducer';

export const rootReducer = combineReducers({
  drons: dronsReducer,
});
