import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice/cartSlice";
import { messageSlice } from "./messageSlice/messageSlice";
import { CartProduct } from "../typescript/interfaces";

const saveToLocalStorage = (state: { cartList: CartProduct[]; totalPrice: number }) => {
  localStorage.cart = JSON.stringify(state);
};

const reducers = combineReducers({
  cart: cartSlice.reducer,
  message: messageSlice.reducer,
});

export const store = configureStore({ reducer: reducers });

store.subscribe(() => saveToLocalStorage(store.getState().cart));
