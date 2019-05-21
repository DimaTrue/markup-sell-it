import * as user from '../action-types/user';
import reducer from './user';

describe('user reducer', () => {

  const initialState = {
    user: {},
    signUpResponse: {},
    isLoading: false,
    isLogin: !!localStorage.token,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USER', () => {
    expect(reducer(initialState,
        {
          type: user.FETCH_USER,
        }
      )
    ).toEqual(
      {
      user: {},
      signUpResponse: {},
      isLoading: true,
      isLogin: !!localStorage.token,
    })
  })

  it('should handle LOG_IN', () => {
    expect(reducer(initialState,
        {
          type: user.LOG_IN,
        }
      )
    ).toEqual(
      {
      user: {},
      signUpResponse: {},
      isLoading: false,
      isLogin: !!localStorage.token,
    })
  })

  it('should handle LOG_IN_SUCCESS', () => {
    let action = {
      type: user.LOG_IN_SUCCESS,
    };
    expect(reducer(initialState, action)
    ).toEqual(
      {
      user: action.payload,
      signUpResponse: {},
      isLoading: false,
      isLogin: true,
    })
  })

  it('should handle LOG_IN_FAILURE', () => {
    let action = {
      type: user.LOG_IN_FAILURE,
    };
    expect(reducer(initialState, action)
    ).toEqual(
      {
      user: action.payload,
      signUpResponse: {},
      isLoading: false,
      isLogin: false,
    })
  })

})