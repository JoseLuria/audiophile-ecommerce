import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../typescript/interfaces";

interface stateInterface {
  cartList: CartProduct[];
  totalPrice: number;
}

const initialState: stateInterface = {
  cartList: [] as CartProduct[],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: stateInterface, action: PayloadAction<CartProduct>) => {
      const isProductAlreadyInCart = state.cartList.find(
        (cartProduct: CartProduct) => cartProduct.id === action.payload.id,
      );

      if (!isProductAlreadyInCart) {
        state.cartList.push(action.payload);
      } else {
        isProductAlreadyInCart.quantity += action.payload.quantity;
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    changeQuantity: (
      state: stateInterface,
      action: PayloadAction<{ id: number; value: number }>,
    ) => {
      const productToChange = state.cartList.find(
        (cartProduct: CartProduct) => cartProduct.id === action.payload.id,
      );

      if (productToChange) {
        productToChange.quantity += action.payload.value;
        state.totalPrice += action.payload.value * productToChange.price;
      }
    },
    removeFromCart: (state: stateInterface, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter(
        (cartProduct: CartProduct) => cartProduct.id !== action.payload,
      );
    },
    removeAll: (state: stateInterface) => {
      state.cartList = [];
      state.totalPrice = 0;
    },
    setCart: (
      state: stateInterface,
      action: PayloadAction<{ cartList: CartProduct[]; totalPrice: number }>,
    ) => {
      state.cartList = action.payload.cartList;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, removeAll, setCart } = cartSlice.actions;
