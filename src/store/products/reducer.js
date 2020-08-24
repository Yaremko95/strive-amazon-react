import C from "./constants";

const initialState = {
  filter: { category: [], price: [], name: "" },
  products: [],
  reviews: [],
  product: {},
  error: null,
  loading: false,
};
const setCategory = (category, label) => {
  if (category.includes(label)) {
    category = category.filter((item) => item !== label);
  } else {
    category = [...category, label];
  }

  return category;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_FILTER_CATEGORY:
      const updatedCategory = setCategory(
        state.filter.category,
        action.payload
      );
      return {
        ...state,
        filter: { ...state.filter, category: updatedCategory },
      };
    case C.SET_SEARCH_QUERY:
      return {
        ...state,
        filter: { ...state.filter, name: action.payload },
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
