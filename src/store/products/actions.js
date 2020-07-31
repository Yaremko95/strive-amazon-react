import C from "./constants";
import axios from "axios";
const queryString = require("query-string");
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

export const fetchData = (endpoint, param, id) => async (
  dispatch,
  getState
) => {
  let response = null;
  if (!id) {
    let query =
      param === "products"
        ? queryString.stringify(getState().filter, {
            arrayFormat: "bracket",
          })
        : "";
    response = await axios.get(`${endpoint + param}?${query}`);
  } else {
    response = await axios.get(endpoint + param + id);
  }
  console.log(response);
  if (response.statusText === "OK") {
    const { data } = response.data;
    if (id) {
      dispatch(setProduct(data));
    } else {
      if (param === "products") dispatch(setProducts(data));
      else if (param === "reviews") dispatch(setReviews(data));
      else dispatch();
    }
  } else {
    dispatch(setError("Something went wrong"));
  }
};
