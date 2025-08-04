import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart, selectCartItems, selectCartTotal, selectCartItemCount } from '../store/cartSlice'
import CartItem from './CartItem'
import CheckoutModal from './CheckoutModal'
import { useState } from 'react'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const [showCheckout, setShowCheckout] = useState(false)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const cartItemCount = useSelector(selectCartItemCount)

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleConfirmCheckout = () => {
    dispatch(clearCart())
    setShowCheckout(false)
    alert('Order completed successfully! Thank you for your purchase.')
  }

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="shopping-cart">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button 
            className="btn btn-secondary clear-cart-btn"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => handleRemoveItem(item.id)}
                onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
              />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{cartItemCount}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total Price:</span>
                <span className="total-price">${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                className="btn btn-success checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

        {showCheckout && (
          <CheckoutModal
            total={cartTotal}
            itemCount={cartItemCount}
            onConfirm={handleConfirmCheckout}
            onCancel={() => setShowCheckout(false)}
          />
        )}
      </div>
    </div>
  )
}

export default ShoppingCart
