
import { data } from '../../data';

const initialState = {
  bookList: data,
  cart: []
}

function cartReducer(state = initialState, { type, payload, index }) {

  switch (type) {
    case 'ADD_CART':

      return { ...state, cart: [...state.cart, payload] };

    case 'INC_NUM':
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, index),
          payload,
          ...state.cart.slice(index + 1)
        ]
      };
    case 'DEC_NUM':
      console.log(type, payload);
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, index),
          payload,
          ...state.cart.slice(index + 1)
        ]
      };
    case 'DEL_ITEM':
      return { ...state, cart: state.cart.filter(item => item.id !== payload) };
    default:
      return state;
  }
}

export default cartReducer
