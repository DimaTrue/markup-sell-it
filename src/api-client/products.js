import { get } from './base';
import { requestWithHeaders } from './base';


export const getProducts = () => {
  return get(`posters/`);
}

export const getProductItem = (id) => {
  return get(`posters/${id}`);
}

export const postProductItem = (params) => {
  return requestWithHeaders(`POST`, `posters/`, params);
}

export const getSearchProducts = value => {
  return get(`posters/?search=${value}`);
}

export const getOwnProducts = () => {
  return requestWithHeaders(`GET`, `posters/own/`);
}

export const removeProductItem = (id) => {
  return requestWithHeaders(`DELETE`, `posters/${id}`, id);
}
