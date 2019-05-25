import { put, takeEvery, call, all } from 'redux-saga/effects';

import { ProductsActionTypes } from '../store/products/types';

import * as actions from '../actions/products';

import {
	getProducts,
	getProductItem,
	getSearchProducts,
	postProductItem,
	getOwnProducts,
	removeProductItem,
} from '../api-client/products';


export function* watchFetchProducts() {
	yield takeEvery(ProductsActionTypes.FETCH_PRODUCTS, fetchProducts);
}

export function* watchFetchProductItem() {
	yield takeEvery(ProductsActionTypes.FETCH_PRODUCT_ITEM, fetchProductItem);
}

export function* watchSearchProducts() {
	yield takeEvery(ProductsActionTypes.SEARCH_PRODUCTS, searchProducts);
}

export function* watchAddProduct() {
	yield takeEvery(ProductsActionTypes.PRODUCT_ADD, addProduct);
}

export function* watchFetchOwnProducts() {
	yield takeEvery(ProductsActionTypes.FETCH_OWN_PRODUCTS, fetchOwnProducts);
}

export function* watchDeleteProductItem() {
	yield takeEvery(ProductsActionTypes.DELETE_PRODUCT_ITEM, deleteProductItem);
}

export function* fetchProducts() {
	try {
		const result = yield call(getProducts);
		yield put(actions.loadProductsSuccess(result.data.data));
	} catch (error) {
		yield put(actions.loadProductsFailure(error));
	}
}

// payload is a value of this.props.computedMatch.params.id of current product, files from container/ProductItemPage 

export function* fetchProductItem({ payload }: any) {
	try {
		const { itemIndex } = payload;
		const result = yield getProductItem(itemIndex);
		yield put(actions.loadProductItemSuccess(result.data));
	} catch (error) {
		yield put(actions.loadProductItemFailure(error));
	}
}

export function* searchProducts({ payload }: any) {
	try {
		const result = yield call(getSearchProducts, payload);
		yield put(actions.findProductsSuccess(result.data.data));
	} catch (error) {
		yield put(actions.findProductsFailure(error));
	}
}

export function* addProduct(params: any) {
	try {
		const result = yield postProductItem(params.payload);
		yield put(actions.createProductSuccess(result.data));
		alert('Your product has added successfully!');
	} catch (error) {
		yield put(actions.createProductFailure(error));
	}
}

export function* fetchOwnProducts() {
	try {
		const result = yield call(getOwnProducts);
		yield put(actions.loadOwnProductSuccess(result.data.data));
	} catch (error) {
		yield put(actions.loadOwnProductFailure(error));
	}
}

export function* deleteProductItem({ payload }: any) {
	try {
		yield removeProductItem(payload);
		yield put(actions.removeProductItemSuccess());
		yield call(fetchOwnProducts);
	} catch (error) {
		yield put(actions.removeProductItemFailure(error));
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
