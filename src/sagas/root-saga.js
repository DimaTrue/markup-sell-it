import { all } from 'redux-saga/effects';

import products from './products';
import user from './user';


export default function* rootSaga() {
  yield all([
    products(),
    user(),
  ])
}
