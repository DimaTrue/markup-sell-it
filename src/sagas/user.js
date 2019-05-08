import axios from 'axios';
import { put, takeEvery, call, all } from 'redux-saga/effects';

import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
} from '../action-types/authorization';


export function* watchFetchUser() {
	yield takeEvery(FETCH_USER, fetchUser)
}

export function* fetchUser() {
	try {
		const result = yield call(axios.get, 'http://light-it-04.tk/api/docs/')
		yield put({ type: FETCH_USER_SUCCESS, payload: result.data.data, })
	} catch (error) {
		yield put({ type: FETCH_USER_FAILURE, payload: error });
	}
}

export default function* user() {
	yield all([
		watchFetchUser(),
	])
}