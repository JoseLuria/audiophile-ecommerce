import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../typescript/interfaces";

const initialState = {
  cartList: [] as CartProduct[],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const isProductAlreadyInCart = state.cartList.find(
        (cartProduct) => cartProduct.id === action.payload.id,
      );

      if (!isProductAlreadyInCart) {
        state.cartList.push(action.payload);
      } else {
        isProductAlreadyInCart.quantity += action.payload.quantity;
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    changeQuantity: (state, action: PayloadAction<{ id: number; value: number }>) => {
      const productToChange = state.cartList.find(
        (cartProduct) => cartProduct.id === action.payload.id,
      );

      if (productToChange) {
        productToChange.quantity += action.payload.value;
        state.totalPrice += action.payload.value * productToChange.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter(
        (cartProduct: CartProduct) => cartProduct.id !== action.payload,
      );
    },
    removeAll: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
    },
    setCart: (state, action: PayloadAction<{ cartList: CartProduct[]; totalPrice: number }>) => {
      state.cartList = action.payload.cartList;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, removeAll, setCart } = cartSlice.actions;
