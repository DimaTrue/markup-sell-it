import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './product-reducer';
import user from './user-reducer';
import authorizationReducer from './authorization-reducer';

export default combineReducers({
  products,
  user,
  isLogin: authorizationReducer,
  form: formReducer,
});