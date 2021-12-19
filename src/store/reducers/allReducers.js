import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { modalReducer } from "./modalReducer";

export const allReducers = combineReducers({
  modal: modalReducer,
  cart: cartReducer
})