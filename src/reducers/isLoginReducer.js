import { LOG_IN, LOG_OUT } from '../actionTypes/isLogIn';

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
       isLogin: true,
      };

    case LOG_OUT:
      return {
        isLogin: false,
      };

    default:
      return state;
  }
};