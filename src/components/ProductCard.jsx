import PropTypes from 'prop-types'
import './ProductCard.css'

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, category, description, image, rating } = product

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title} 
          className="product-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-title" title={title}>
          {truncateText(title, 60)}
        </h3>
        
        <p className="product-category">{category}</p>
        
        <p className="product-description" title={description}>
          {truncateText(description, 100)}
        </p>
        
        <div className="product-rating">
          <span className="rating-stars">
            {'★'.repeat(Math.floor(rating?.rate || 0))}
            {'☆'.repeat(5 - Math.floor(rating?.rate || 0))}
          </span>
          <span className="rating-text">
            {rating?.rate?.toFixed(1)} ({rating?.count})
          </span>
        </div>
        
        <div className="product-bottom">
          <span className="product-price">${price?.toFixed(2)}</span>
          <button 
            className="btn btn-primary add-to-cart-btn"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
