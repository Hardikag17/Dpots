import { combineReducers } from 'redux';

import web3provider from './web3provider';
import modalprovider from './modalprovider';

const rootReducer = combineReducers({
  web3provider: web3provider,
  modalprovider: modalprovider,
});

export default rootReducer;
