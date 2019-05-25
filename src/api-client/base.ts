import axios from 'axios';

import { API_URL } from './config';

export const request = (method: string, path: string, params?: any) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
		data: params,
	})
}

export const requestWithHeaders = (method: string, path: string, params?: any) => {
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

export const get = (path: string, params: any) => {
	return request('GET', path, params);
}

export const post = (path: string, params: any) => {
	return request('POST', path, params);
}

export const remove = (path: string, params: any) => {
	return request('DELETE', path, params);
}