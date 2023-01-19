import { createSlice } from '@reduxjs/toolkit'

const initialState = { cart: [], total: 0 }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart(state, action) {},
    decrementCart(state, action) {},
    deleteCart(state, action) {},
  },
})

export const { incrementCart, decrementCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer
