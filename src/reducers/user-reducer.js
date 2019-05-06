import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from '../action-types/authorization';

const initialState = {
    user: {},
}

export default function (state= initialState, action) {
    switch(action.type) {
        case FETCH_USER: {
            return {...state, };
          }
          case FETCH_USER_SUCCESS: {
            return {...state, };
          }
          case FETCH_USER_FAILURE: {
            return {...state, };
          }
      
          default:
            return state;
    }
}