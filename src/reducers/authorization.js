import { LOG_IN, LOG_OUT } from '../action-types/authorization';


const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogin: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};