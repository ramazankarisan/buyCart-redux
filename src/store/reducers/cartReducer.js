
import { data } from '../../data';

const initialState = {
  bookList: data,
  cart: [],

}

function cartReducer(state = initialState, { type, payload, index, ...action }) {

  switch (type) {
    case 'ADD_CART':
      if (!state.cart.some(item => item.name === payload.name)) {
        return { ...state, cart: [...state.cart, payload] }
      }
      return state

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

      return {
        ...state,
        cart: [
          ...state.cart.slice(0, index),
          payload,
          ...state.cart.slice(index + 1)
        ]
      };
    case 'DEL_ITEM':

      return { ...state, cart: state.cart.filter((item, index) => index !== payload) };
    default:
      return state;
  }
}

export default cartReducer
