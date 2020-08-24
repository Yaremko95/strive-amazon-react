import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import products from "./products/reducer";
import cart from "./cart/reducer";

import thunk from "redux-thunk";
import axios from "axios";
import queryString from "query-string";

import {
  setError,
  setProduct,
  setProducts,
  setReviews,
} from "./products/actions";
import { setCart } from "./cart/actions";

export const fetchData = (endpoint, param, id) => async (
  dispatch,
  getState
) => {
  let response = null;
  if (!id) {
    let query =
      param === "products"
        ? queryString.stringify(getState().products.filter, {
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
      else dispatch(setCart(data));
    }
  } else {
    dispatch(setError("Something went wrong"));
  }
};

export const updateData = (endpoint, param, method, id = "", body = {}) => (
  dispatch,
  getState
) => {
  fetch(`${endpoint + param}/${id}`, {
    method: method,
    body: ["PUT", "POST"].includes(method) ? JSON.stringify(body) : undefined,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((e) => {
      console.log(e);
      dispatch(setError("Something went wrong"));
    });
};
const rootReducer = combineReducers({
  products,
  cart,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default () => createStore(rootReducer, enhancer);
