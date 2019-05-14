import { call, put, takeEvery, all } from 'redux-saga/effects';
import { loginUser, getLogOut, registerUser, getDataUser } from '../api-client/user';

import * as types from '../action-types/user';


export function* watchLoginUser() {
	yield takeEvery(types.LOG_IN, signIn);
}

export function* watchLogoutUser() {
	yield takeEvery(types.LOG_OUT, signOut);
}

export function* watchSignUp() {
	yield takeEvery(types.SIGN_UP, signUp);
}

export function* watchFetchUser() {
	yield takeEvery(types.FETCH_USER, fetchUser);
}

export function* signIn({ payload }) {
	try {
		const result = yield loginUser(payload);
		yield put({ type: types.LOG_IN_SUCCESS, payload: result, });
		localStorage.setItem('token', result.data.token);
	} catch (error) {
		yield put({ type: types.LOG_IN_FAILURE, payload: error });
	}
}

export function* signOut() {
	try {
		yield call(getLogOut);
		yield localStorage.removeItem('token');
		yield put({ type: types.LOG_OUT_SUCCESS });
	} catch (error) {
		yield put({ type: types.LOG_OUT_FAILURE, payload: error.response.data });
	}
}

export function* signUp({ payload }) {
	try {
		const result = yield registerUser(payload);
		yield put({ type: types.SIGN_UP_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.SIGN_UP_FAILURE, payload: error });
	}
}

export function* fetchUser() {
	try {
		const result = yield getDataUser();
		yield put({ type: types.FETCH_USER_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.FETCH_USER_FAILURE, payload: error });
	}
}

export default function* user() {
	yield all([
		watchLoginUser(),
		watchLogoutUser(),
		watchSignUp(),
		watchFetchUser(),
	])
}