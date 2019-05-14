import { get, post, requestWithHeaders } from './base';


export const loginUser = (params) => {
  return post(`login/`, params);
}

export const registerUser = (params) => {
  return post(`registration/`, params);
}

export const getDataUser = () => {
  return requestWithHeaders('GET', `profile/`);
}

export const getLogOut = () => {
  return get('logout/');
};