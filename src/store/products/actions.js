import C from "./constants";

export const isLoading = () => ({
  type: C.IS_LOADING,
});

export const setError = (error) => ({
  type: C.SET_ERROR,
  payload: error,
});

export const setProducts = (data) => ({
  type: C.SET_PRODUCTS,
  payload: data,
});
export const setReviews = (data) => ({
  type: C.SET_REVIEWS,
  payload: data,
});
export const setProduct = (data) => ({
  type: C.SET_PRODUCT,
  payload: data,
});

export const setFilterCategory = (label) => ({
  type: C.SET_FILTER_CATEGORY,
  payload: label,
});
export const setSearchQuery = (query) => ({
  type: C.SET_SEARCH_QUERY,
  payload: query,
});
