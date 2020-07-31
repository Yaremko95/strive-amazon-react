import C from "./constants";

export const setCart = (data) => ({
  type: C.SET_CART,
  payload: data,
});
export const addToCart = (product) => ({
  type: C.INCREASE_QTY,
  payload: product,
});
export const emptyCart = () => ({
  type: C.EMPTY_CART,
});
export const removeFromCart = (id) => ({
  type: C.REMOVE_FROM_CART,
  payload: id,
});
export const increaseQty = (id) => ({
  type: C.INCREASE_QTY,
  payload: id,
});
export const decreaseQty = (id) => ({
  type: C.DECREASE_QTY,
  payload: id,
});
export const triggerCart = () => ({
  type: C.TRIGGER_CART,
});
