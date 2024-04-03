import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],

    // example structure
    // cart: [{
    //     pizzaId: 12,
    //     name: 'eshshshayin sike',
    //     quantity: 2,
    //     unitPrice: 16,
    //     totalPrice: 32
    // }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload is the new item
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            // payload is the pizza id
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action) {
            // first we select item or find it
            const item = state.cart.find(item => item.pizzaId === action.payload)
            // then mutate it
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            // first we select item or find it
            const item = state.cart.find(item => item.pizzaId === action.payload)
            // then mutate it
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice

            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)

        },
        clearAllCart(state) {
            state.cart = []
        },
    }
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearAllCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;