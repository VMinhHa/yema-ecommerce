import { createSelector } from "@reduxjs/toolkit";

export const cartItemsSelector = (state) => state.cartItems.value;  //CartItems là tên reducer, value là tên state từ initialState

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, 
    (value) => value.reduce((count, item) => 
        count + item.quantity, 0)
    );

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector,
    (value) => value.reduce((total, item) =>
        total + item.price * item.quantity, 0)
    );