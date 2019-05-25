import { ProductsActionTypes, Product } from '../store/products/types';
import { action } from 'typesafe-actions';


export const loadProductsRequest = () => action(ProductsActionTypes.FETCH_PRODUCTS);

export const loadProductsSuccess = (data: Product[]) => action(ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, { data });

export const loadProductsFailure = (error: any) => action(ProductsActionTypes.FETCH_PRODUCTS_FAILURE, { error });

export const loadProductItemRequest = (itemIndex: number) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM, { itemIndex });

export const loadProductItemSuccess = (data: Product) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM_SUCCESS, data);

export const loadProductItemFailure = (error: any) => action(ProductsActionTypes.FETCH_PRODUCT_ITEM_FAILURE, { error });

export const findProducts = (value: string) => action(ProductsActionTypes.SEARCH_PRODUCTS, value);

export const findProductsSuccess = (data: Product[]) => action(ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS, data);

export const findProductsFailure = (error: any) => action(ProductsActionTypes.SEARCH_PRODUCTS_FAILURE, { error });

export const createProductRequest = (params: any) => action(ProductsActionTypes.PRODUCT_ADD, params);

export const createProductSuccess = (data: Product) => action(ProductsActionTypes.PRODUCT_ADD_SUCCESS, data);

export const createProductFailure = (error: any) => action(ProductsActionTypes.PRODUCT_ADD_ERROR, { error });

export const loadOwnProductRequest = () => action(ProductsActionTypes.FETCH_OWN_PRODUCTS);

export const loadOwnProductSuccess = (data: Product[]) => action(ProductsActionTypes.FETCH_OWN_PRODUCTS_SUCCESS, data);

export const loadOwnProductFailure = (error: any) => action(ProductsActionTypes.FETCH_OWN_PRODUCTS_FAILURE, { error });

export const removeProductItemRequest = (itemIndex: number) => action(ProductsActionTypes.DELETE_PRODUCT_ITEM, itemIndex);

export const removeProductItemSuccess = () => action(ProductsActionTypes.DELETE_PRODUCT_ITEM_SUCCESS);

export const removeProductItemFailure = (error: any) => action(ProductsActionTypes.DELETE_PRODUCT_ITEM_FAILURE, { error });
