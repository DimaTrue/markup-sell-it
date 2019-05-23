import { ProductsActionTypes, Product } from '../store/products/types'
import { action } from 'typesafe-actions';

export const searchProducts = (value: string) => {
  return { type: ProductsActionTypes.SEARCH_PRODUCTS, payload: value }
}

 export const loadProductsRequest = () => action(ProductsActionTypes.FETCH_PRODUCTS);

 export const loadProductsSuccess = (data: Product[]) => action(ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, {data});

 export const loadProductsFailure = (error: any) => action(ProductsActionTypes.FETCH_PRODUCTS_FAILURE, {error});

 export const loadProductItemRequest = (itemIndex: number) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM, {itemIndex});

 export const loadProductItemSuccess = (data: Product) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM_SUCCESS, data);

 export const loadProductItemFailure = (error: any) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM_FAILURE, {error});