import { combineReducers } from 'redux';

import productReducer from './product';
import searchReducer from './searchBar';

const rootReducer = combineReducers({
  products: productReducer,
  searchBar: searchReducer,
});

export default rootReducer;
