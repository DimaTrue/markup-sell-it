import { put, takeEvery, call, all } from 'redux-saga/effects';

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
import { getProducts, getProductItem, postProductItem } from '../api-client/products';


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

// payload is a value of this.props.computedMatch.params.id of current product, files from container/ProductItemPage 

export function* fetchProductItem({ payload }) {
	try {
		const result = yield getProductItem(payload);
		yield put({ type: FETCH_PRODUCT_ITEM_SUCCESS, payload: result.data, })
	} catch (error) {
		yield put({ type: FETCH_PRODUCT_ITEM_FAILURE, payload: error });
	}
}

export function* addProduct({ params }) {
	try {
		const result = yield postProductItem(params);
		yield put({ type: PRODUCT_ADD_SUCCESS, data: result.data })
	} catch (error) {
		yield put({ type: PRODUCT_ADD_ERROR, payload: error })
	}
}

export default function* products() {
	yield all([
		watchFetchProducts(),
		watchFetchProductItem(),
		watchAddProduct(),
	])
}
