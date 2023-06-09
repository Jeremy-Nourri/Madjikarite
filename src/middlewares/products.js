import axios from 'axios';
import { GET_PRODUCTS, saveProducts, GET_CATEGORIES, saveCategories, isLoading  } from '../actions/products';

const API_BASE_URL = 'https://madjikarite-api.onrender.com';

const productsAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      axios
        .get(`${API_BASE_URL}/products`)
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => console.log(error))
      next(action);
      break;

    case GET_CATEGORIES:
      axios
        .get(`${API_BASE_URL}/categories`)
        .then((response) => {
          store.dispatch(saveCategories(response.data));
          if (response.status === 200) {
            store.dispatch(isLoading());
          }
        })
        .catch((error) => console.log(error))

      next(action);
      break;

    default:
      next(action);
  } 
};

export default productsAPI;
