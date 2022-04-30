import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { showAlertMessage, hideAlertMessage } from "../redux/messageSlice/messageSlice";
import { handleFormatProductName } from "./handleFormatProductName";

export const handleShowMessage = (
  type: "Add" | "Remove",
  name: string,
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch(showAlertMessage({ type, product: handleFormatProductName(name) }));

  setTimeout(() => {
    dispatch(hideAlertMessage());
  }, 2000);
};
