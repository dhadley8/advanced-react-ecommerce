import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { selectCartItemCount } from '../store/cartSlice'
import { VIEWS } from '../utils/constants'

const Header = ({ currentView, setCurrentView }) => {
  const cartItemCount = useSelector(selectCartItemCount)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            🛒 Advanced React E-Commerce
          </div>
          <nav className="nav-buttons">
            <button
              className={`nav-button ${currentView === VIEWS.HOME ? 'active' : ''}`}
              onClick={() => setCurrentView(VIEWS.HOME)}
            >
              Home
            </button>
            <button
              className={`nav-button ${currentView === VIEWS.CART ? 'active' : ''}`}
              onClick={() => setCurrentView(VIEWS.CART)}
            >
              Cart
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  setCurrentView: PropTypes.func.isRequired,
}

export default Header
