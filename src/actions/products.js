export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const IS_LOADING = 'IS_LOADING';

// Action to get the products
export function fetchProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

// Action to save the products
export function saveProducts(products) {
  return {
    type: SAVE_PRODUCTS,
    payload : { products },
  };
}
// Action to get the categories
export function fetchCategories() {
  return {
    type: GET_CATEGORIES,
  };
}
// Action to save the categories
export function saveCategories(categories) {
  return {
    type: SAVE_CATEGORIES,
    payload : { categories },
  };
}

export function isLoading() {
  return {
    type: IS_LOADING,
  };
}
