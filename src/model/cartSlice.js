import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [
    // {
    //   sid: 0,
    //   amount: 0,
    //   name: "",
    //   price: 0,
    //   img: "",
    // },
  ],
}

if (localStorage.getItem('cart')?.length) {
  initialState.cart = [...JSON.parse(localStorage.getItem('cart'))]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      const { sid, product_name, product_price, picture_url, amount } =
        action.payload
      const index = state.cart.findIndex((value) => {
        return value.sid === sid
      })
      if (index === -1) {
        state.cart.push({
          sid,
          product_name,
          product_price,
          picture_url,
          amount,
        })
      } else {
        state.cart[index].amount += amount
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    deleteCart(state, action) {
      const { sid } = action.payload
      state.cart = state.cart.filter((v) => {
        return v.sid !== sid
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    incrementCart(state, action) {
      const { sid } = action.payload
      const index = state.cart.findIndex((v) => {
        return v.sid === sid
      })
      state.cart[index].amount += 1
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementCart(state, action) {
      const { sid } = action.payload
      const index = state.cart.findIndex((v) => {
        return v.sid === sid
      })
      if (state.cart[index].amount >= 2) {
        state.cart[index].amount -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
})

export const { addCart, incrementCart, decrementCart, deleteCart } =
  cartSlice.actions

export default cartSlice.reducer
