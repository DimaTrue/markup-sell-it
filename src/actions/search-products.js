import { SEARCH_PRODUCTS } from '../action-types/products';

export const searchProducts = (value) => {
  return { type: SEARCH_PRODUCTS, payload: value }
}