import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_ITEM,
    FETCH_PRODUCT_ITEM_SUCCESS,
    FETCH_PRODUCT_ITEM_FAILURE,
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR,
} from '../action-types/products';
import { getProducts } from '../api-client/products';

import { put, takeEvery, call, all } from 'redux-saga/effects'
import axios from 'axios';

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export function* watchFetchProductItem() {
    yield takeEvery(FETCH_PRODUCT_ITEM, fetchProductItem)
}

export function* watchAddProduct() {
    yield takeEvery(PRODUCT_ADD, addProduct)
}

export function* fetchProducts() {
    try {
        const result = yield call(getProducts);
        yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: result.data.data, meta: { printLog: true } })
    } catch (error) {
        yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error });
    }
}

// itemIndex is a value of this.props.match.params.id of current product, flies from container/ProductItemPage 

export function* fetchProductItem(itemIndex) {
    try {
        const result = yield call(axios.get, `http://light-it-04.tk/api/posters/${itemIndex.payload}`)
        yield put({ type: FETCH_PRODUCT_ITEM_SUCCESS, payload: result.data, })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT_ITEM_FAILURE, payload: error });
    }
}

export function* addProduct(params) {
    try {
        const result = yield call(axios.post, 'http://light-it-04.tk/api/posters/', { params });
        yield put({ type: PRODUCT_ADD_SUCCESS, data: result.data })
    } catch (error) {
        yield put({ type: PRODUCT_ADD_ERROR, payload: error })
    }
}

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
        watchFetchProductItem(),
        watchAddProduct(),
    ])
}
