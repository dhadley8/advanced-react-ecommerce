import { createSlice } from '@reduxjs/toolkit'

// Load cart from sessionStorage
const loadCartFromSession = () => {
  try {
    const serializedCart = sessionStorage.getItem('cart')
    if (serializedCart === null) {
      return []
    }
    return JSON.parse(serializedCart)
  } catch (err) {
    return []
  }
}

// Save cart to sessionStorage
const saveCartToSession = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart)
    sessionStorage.setItem('cart', serializedCart)
  } catch (err) {
    // Ignore write errors
  }
}

const initialState = {
  items: loadCartFromSession(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        })
      }
      
      saveCartToSession(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      saveCartToSession(state.items)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id)
        } else {
          item.quantity = quantity
        }
      }
      
      saveCartToSession(state.items)
    },
    clearCart: (state) => {
      state.items = []
      saveCartToSession(state.items)
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectCartTotal = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export default cartSlice.reducer
