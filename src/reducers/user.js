import * as user from '../action-types/user';


const initialState = {
  user: {},
  signUpResponse: {},
  isLoading: false,
  isLogin: !!localStorage.token,
};

export default function (state = initialState, action) {
  switch (action.type) {

    case user.LOG_IN:
      return { ...state, };

    case user.LOG_IN_SUCCESS:
      return { ...state, user: action.payload, isLogin: true, };

    case user.LOG_IN_FAILURE:
      return { ...state, user: action.payload, isLogin: false, };

    case user.LOG_OUT:
      return { ...state, };

    case user.LOG_OUT_SUCCESS:
      return { ...state, user: action.payload, isLogin: false, };

    case user.LOG_OUT_FAILURE:
      return { ...state, user: action.payload, };

    case user.SIGN_UP:
      return { ...state };

    case user.SIGN_UP_SUCCESS:
      return { ...state, signUpResponse: action.payload };

    case user.SIGN_UP_FAILURE:
      return { ...state, signUpResponse: action.payload };

    case user.FETCH_USER:
      return { ...state, isLoading: true, };

    case user.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, };

    case user.FETCH_USER_FAILURE:
      return { ...state, user: action.payload, isLoading: false, };

    default:
      return state;
  }
}