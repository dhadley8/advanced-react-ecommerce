import PropTypes from 'prop-types'
import './CheckoutModal.css'

const CheckoutModal = ({ total, itemCount, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Confirm Checkout</h2>
          <button className="modal-close" onClick={onCancel}>
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="checkout-summary">
            <div className="summary-item">
              <span>Total Items:</span>
              <span>{itemCount}</span>
            </div>
            <div className="summary-item">
              <span>Total Amount:</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="checkout-info">
            <p>
              <strong>Note:</strong> This is a demo application using FakeStoreAPI. 
              No real payment will be processed.
            </p>
            <p>
              Clicking &ldquo;Complete Order&rdquo; will clear your cart and simulate a successful purchase.
            </p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button 
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="btn btn-success"
            onClick={onConfirm}
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  )
}

CheckoutModal.propTypes = {
  total: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default CheckoutModal
