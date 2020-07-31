import C from "./constants";

const initialState = {
  filter: {},
  products: [],
  reviews: [],
  product: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    case C.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case C.SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case C.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case C.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case C.IS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
