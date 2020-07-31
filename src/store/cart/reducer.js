import C from "./constants";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
};
const getTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.total, 0);
};
const getQty = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};
const addToCart = (cart, product) => {
  const productInCart = cart.find((item) => item.product._id === product._id);
  if (productInCart) {
    let index = cart.findIndex((item) => item.product._id === product._id);
    cart[index].quantity++;
    cart[index].total += cart[index].product.price;
    return cart;
  } else {
    return [...cart, { product: product, quantity: 1, total: product.price }];
  }
};
const removeFromCart = (cart, id) => {
  return cart.filter((item) => item.product._id !== id);
};
const increase = (cart, id) => {
  let index = cart.findIndex((item) => item.product._id === id);
  cart[index].quantity++;
  cart[index].total += cart[index].price;
  return cart;
};
const decrease = (cart, id) => {
  let index = cart.findIndex((item) => item.product._id === id);
  if (cart[index].quantity === 0) {
    return removeFromCart(cart, id);
  } else {
    cart[index].quantity--;
    cart[index].total -= cart[index].price;
    return cart;
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_CART:
      return {
        ...state,
        cart: action.payload,
        quantity: getQty(action.payload),
        total: getTotal(action.payload),
      };
    case C.ADD_TO_CART:
      let addedToCart = addToCart(state.cart, action.payload);
      return {
        ...state,
        cart: addedToCart,
        total: getTotal(addedToCart),
        quantity: getQty(addedToCart),
      };
    case C.REMOVE_FROM_CART:
      let removedFromCart = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: removedFromCart,
        total: getTotal(removedFromCart),
        quantity: getQty(removedFromCart),
      };
    case C.INCREASE_QTY:
      let increased = increase(state.cart, action.payload);
      return {
        ...state,
        cart: increased,
        total: getTotal(increased),
        quantity: getQty(increased),
      };
    case C.DECREASE_QTY:
      let decreased = decrease(state.cart, action.payload);
      return {
        ...state,
        cart: decreased,
        total: getTotal(decreased),
        quantity: getQty(decreased),
      };
    default:
      return state;
  }
};
