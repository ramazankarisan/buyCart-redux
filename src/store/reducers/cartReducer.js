
import { data } from '../../data';

const initialState = {
  bookList: data,
  cart: []
}

function cartReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    default:
      return state;
  }
}

export default cartReducer
