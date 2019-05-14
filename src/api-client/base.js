import axios from 'axios';

import { API_URL } from './config';

export const request = (method, path, params) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
		data: params,
	})
}

export const requestWithHeaders = (method, path, params) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
		data: params,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'JWT ' + localStorage.token,
		},
	})
}

export const get = (path) => {
	return request('GET', path);
}

export const post = (path, params) => {
	return request('POST', path, params);
}

export const remove = (path) => {
	return request('DELETE', path);
}