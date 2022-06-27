import * as t from '../types';

const modalprovider = (
  state = {
    openModal: false,
  },
  action
) => {
  switch (action.type) {
    case t.SET_MODAL_BOOL:
      return {
        ...state,
        openModal: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default modalprovider;
