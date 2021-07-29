import { combineReducers } from 'redux';
import { dronsReducer } from './dronsReducer';
import { validationReducer } from './validationReducer';

export const rootReducer = combineReducers({
  drons: dronsReducer,
  validation: validationReducer,
});
