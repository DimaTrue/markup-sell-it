import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './products';
import user from './user';
import isLogin from './authorization';


export default combineReducers({
  products,
  user,
  isLogin,
  form: formReducer,
});