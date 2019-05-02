import { FETCH_PRODUCTS } from '../actionTypes/fetchProducts';
import { put, takeEvery, call, all } from 'redux-saga/effects'
import axios from 'axios';

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export function* fetchProducts() {
    try {
        const result = yield call(axios.get, 'http://light-it-04.tk/api/posters/')
        yield put({ type: FETCH_PRODUCTS, payload: result.data.data, })
    } catch (error) {
        yield console.log(error);
    }
}

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
    ])
}