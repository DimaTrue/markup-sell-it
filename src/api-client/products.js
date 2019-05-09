import { get } from './base';
import { post } from './base';


export const getProducts = () => {
  return get(`posters/`);
}

export const getProductItem = (id) => {
  return get(`posters/${id}`);
}

export const postProductItem = (params) => {
  return post(`posters/`, params);
}
