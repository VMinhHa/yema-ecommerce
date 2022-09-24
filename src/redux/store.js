import { configureStore } from "@reduxjs/toolkit";
import productModalReducer from "./product-modal/productModalSlice";
import cartItemsReducer from "./cart/cartItemSlice";
import userReducer from "./auth/userSlice";

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsReducer,
        user: userReducer,
    }
});