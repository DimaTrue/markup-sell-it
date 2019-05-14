import { put, takeEvery, call, all } from 'redux-saga/effects';

import * as types from '../action-types/products';
import {
	getProducts,
	getProductItem,
	getSearchProducts,
	postProductItem,
	getOwnProducts,
	removeProductItem,
} from '../api-client/products';


export function* watchFetchProducts() {
	yield takeEvery(types.FETCH_PRODUCTS, fetchProducts);
}

export function* watchFetchProductItem() {
	yield takeEvery(types.FETCH_PRODUCT_ITEM, fetchProductItem);
}

export function* watchSearchProducts() {
	yield takeEvery(types.SEARCH_PRODUCTS, searchProducts);
}

export function* watchAddProduct() {
	yield takeEvery(types.PRODUCT_ADD, addProduct);
}

export function* watchFetchOwnProducts() {
	yield takeEvery(types.FETCH_OWN_PRODUCTS, fetchOwnProducts);
}

export function* watchDeleteProductItem() {
	yield takeEvery(types.DELETE_PRODUCT_ITEM, deleteProductItem);
}

export function* fetchProducts() {
	try {
		const result = yield call(getProducts);
		yield put({ type: types.FETCH_PRODUCTS_SUCCESS, payload: result.data.data, meta: { printLog: true } });
	} catch (error) {
		yield put({ type: types.FETCH_PRODUCTS_FAILURE, payload: error });
	}
}

// payload is a value of this.props.computedMatch.params.id of current product, files from container/ProductItemPage 

export function* fetchProductItem({ payload }) {
	try {
		const result = yield getProductItem(payload);
		yield put({ type: types.FETCH_PRODUCT_ITEM_SUCCESS, payload: result.data, });
	} catch (error) {
		yield put({ type: types.FETCH_PRODUCT_ITEM_FAILURE, payload: error });
	}
}

export function* searchProducts({ payload }) {
	try {
		const result = yield call(getSearchProducts, payload);
		yield put({ type: types.SEARCH_PRODUCTS_SUCCESS, payload: result.data.data, });
	} catch (error) {
		yield put({ type: types.SEARCH_PRODUCTS_FAILURE, payload: error, });
	}
}

export function* addProduct(params) {
	try {
		const result = yield postProductItem(params.payload);
		yield put({ type: types.PRODUCT_ADD_SUCCESS, data: result.data });
		alert('Your product has added successfully!');
	} catch (error) {
		yield put({ type: types.PRODUCT_ADD_ERROR, payload: error });
	}
}

export function* fetchOwnProducts() {
	try {
		const result = yield call(getOwnProducts);
		yield put({ type: types.FETCH_OWN_PRODUCTS_SUCCESS, payload: result.data.data, });
	} catch (error) {
		yield put({ type: types.FETCH_OWN_PRODUCTS_FAILURE, payload: error });
	}
}

export function* deleteProductItem({ payload }) {
	try {
		yield removeProductItem(payload);
		yield put({ type: types.DELETE_PRODUCT_ITEM_SUCCESS, });
		yield call(fetchOwnProducts);
	} catch (error) {
		yield put({ type: types.DELETE_PRODUCT_ITEM_FAILURE, payload: error });
	}
}

export default function* products() {
	yield all([
		watchFetchProducts(),
		watchFetchProductItem(),
		watchSearchProducts(),
		watchAddProduct(),
		watchFetchOwnProducts(),
		watchDeleteProductItem(),
	])
}
