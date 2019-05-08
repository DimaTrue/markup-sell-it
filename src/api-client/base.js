import axios from 'axios';

import { API_URL } from './config';

export const request = (method, path) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
	})
}

export const get = (path) => {
	return request('GET', path);
}
