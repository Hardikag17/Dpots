import * as t from '../types';

export const setweb3instance = (web3instance) => ({
  type: t.SET_WEB3,
  payload: web3instance,
});


