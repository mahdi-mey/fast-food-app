import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // cart: [],
    cart: [
        {
            pizzaId: 12,
            name: 'Pepperoni',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32
        }
    ]
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