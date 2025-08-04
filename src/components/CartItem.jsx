import PropTypes from 'prop-types'
import './CartItem.css'

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const { title, price, image, quantity } = item

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (newQuantity > 0) {
      onUpdateQuantity(newQuantity)
    }
  }

  const incrementQuantity = () => {
    onUpdateQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1)
    }
  }

  const itemTotal = (price * quantity).toFixed(2)

  return (
    <div className="cart-item">
      <div className="item-image-container">
        <img src={image} alt={title} className="item-image" />
      </div>
      
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price.toFixed(2)} each</p>
      </div>
      
      <div className="item-quantity">
        <label htmlFor={`quantity-${item.id}`} className="quantity-label">
          Quantity:
        </label>
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            id={`quantity-${item.id}`}
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button 
            className="quantity-btn"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="item-total">
        <span className="total-label">Total:</span>
        <span className="total-amount">${itemTotal}</span>
      </div>
      
      <div className="item-actions">
        <button 
          className="btn btn-danger remove-btn"
          onClick={onRemove}
          title="Remove from cart"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
}

export default CartItem
