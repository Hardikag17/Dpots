import * as t from '../types';

const web3provider = (
  state = {
    provider: 'provier initialization',
  },
  action
) => {
  switch (action.type) {
    case t.SET_WEB3:
      return {
        ...state,
        provider: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default web3provider;
