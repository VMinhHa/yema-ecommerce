import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    value: items,
    total: 0,
    totalItems: 0
}

const cartItemSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            
            const duplicate = state.value.filter(e =>
                e.slug === newItem.slug && 
                e.color === newItem.color && 
                e.size === newItem.size
            )
            
            if(duplicate.length > 0) {
                const newProducts = state.value.filter(
                    e => e.slug !== newItem.slug ||
                    e.color !== newItem.color ||
                    e.size !== newItem.size
                )
                state.value = [...newProducts, 
                    {
                        ...newItem,
                        id: duplicate[0].id,
                        quantity: newItem.quantity + duplicate[0].quantity
                    }]
            } else {
                state.value = [...state.value, {
                    ...newItem,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1,
                }];
            }
            localStorage.setItem("cartItems", JSON.stringify(state.value));
            console.log('state.value',state.value);
        },
        updateItem: (state, action) => {
            const newItem = action.payload
            const item = state.value.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (item.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: item[0].id,
                    slug: newItem.slug,
                    color: newItem.color,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity
                }]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.value));        
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.value = state.value.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)
            localStorage.setItem("cartItems", JSON.stringify(state.value));
        },
        clearCart: (state) => {
            state.value = []
            localStorage.setItem("cartItems", JSON.stringify(state.value));
        },
    }
})

export const { addToCart, updateItem, removeItem, clearCart } = cartItemSlice.actions;

const cartItemsReducer =  cartItemSlice.reducer;

export default cartItemsReducer;

