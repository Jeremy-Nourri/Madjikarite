import { SAVE_PRODUCTS, SAVE_CATEGORIES, IS_LOADING} from "../actions/products";

export const initialState = {
  listProducts :[],
  listCategories :[],
  isLoading : true,
}

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  
  switch (type) {

    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: payload.products,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        listCategories: payload.categories,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}


export default reducer;
