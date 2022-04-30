import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  showMessage: false,
  messageType: "Add",
  messageProduct: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showAlertMessage: (
      state,
      action: PayloadAction<{ type: "Add" | "Remove"; product: string }>,
    ) => {
      state.messageType = action.payload.type;
      state.messageProduct = action.payload.product;
      state.showMessage = true;
    },
    hideAlertMessage: (state) => {
      state.showMessage = false;
    },
  },
});

export const { showAlertMessage, hideAlertMessage } = messageSlice.actions;
