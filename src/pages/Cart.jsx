import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Cart.css'

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 9.99
  const total = subtotal + tax + shipping
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const clearCart = () => {
    cartItems.forEach(item => removeFromCart(item.id))
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
    } else if (newQuantity > 99) {
      return
    } else {
      updateQuantity(itemId, newQuantity)
    }
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'aromatic': return '🌿'
      case 'medicinal': return '🪴'
      case 'decorative': return '🌸'
      default: return '🌱'
    }
  }

  return (
    <div className="cart-page">
      <Header cartItemsCount={cartItemsCount} />
      
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your Cart is Empty</h2>
              <p>Discover our beautiful collection of plants and start building your green paradise!</p>
              
              <div className="suggested-actions">
                <Link to="/products" className="btn btn-primary">
                  <span>Browse Plants</span>
                  <span className="btn-icon">🌿</span>
                </Link>
                
                <div className="featured-suggestions">
                  <h3>Popular Categories</h3>
                  <div className="category-suggestions">
                    <Link to="/products" className="category-card">
                      <span className="category-icon">🌿</span>
                      <span>Aromatic Plants</span>
                    </Link>
                    <Link to="/products" className="category-card">
                      <span className="category-icon">🪴</span>
                      <span>Medicinal Plants</span>
                    </Link>
                    <Link to="/products" className="category-card">
                      <span className="category-icon">🌸</span>
                      <span>Decorative Plants</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <span className="plant-emoji">{item.image}</span>
                      <span className="category-badge">
                        {getCategoryIcon(item.category)}
                      </span>
                    </div>
                    
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-category">{item.category}</p>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price-info">
                        <span className="unit-price">${item.price.toFixed(2)} each</span>
                        <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn minus"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 1
                            handleQuantityChange(item.id, value)
                          }}
                          min="1"
                          max="99"
                          aria-label="Quantity"
                        />
                        <button 
                          className="quantity-btn plus"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          disabled={item.quantity >= 99}
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <span className="remove-icon">🗑️</span>
                        <span className="remove-text">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary-section">
              <div className="cart-summary">
                <h2>Order Summary</h2>
                
                <div className="summary-breakdown">
                  <div className="summary-line">
                    <span>Subtotal ({cartItemsCount} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="summary-line">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="free-shipping">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="summary-line">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  {subtotal < 50 && (
                    <div className="shipping-notice">
                      <p>💡 Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>
                    </div>
                  )}
                </div>

                <div className="summary-total">
                  <div className="total-line">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="checkout-actions">
                  <button className="btn btn-primary checkout-btn">
                    <span>Proceed to Checkout</span>
                    <span className="btn-icon">→</span>
                  </button>
                  
                  <Link to="/products" className="btn btn-secondary continue-shopping">
                    Continue Shopping
                  </Link>
                </div>

                <div className="payment-security">
                  <div className="security-badges">
                    <span className="security-badge">🔒 Secure Checkout</span>
                    <span className="security-badge">💳 Multiple Payment Options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart