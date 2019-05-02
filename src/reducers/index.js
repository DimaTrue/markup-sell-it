import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import productReducer from './productReducer';
import productItemReducer from './productItemReducer';
import isLoginReducer from './isLoginReducer';

export default combineReducers({
  products: productReducer,
  productItem: productItemReducer,
  isLogin: isLoginReducer,
  form: formReducer,
});