import { Link } from 'react-router-dom';
import './PlantCard.css';

function PlantCard({ plant, addToCart, isInCart = false }) {
  return (
    <div className="plant-card">
      <div className="plant-badge">{plant.category}</div>
      {isInCart && <div className="in-cart-badge">In Cart ✓</div>}
      <div className="plant-image">
        {plant.image}
      </div>
      <h3 className="plant-name">{plant.name}</h3>
      <p className="plant-description">{plant.description}</p>
      <p className="plant-price">${plant.price}</p>
      
      <div className="card-actions">
        {isInCart ? (
          <div className="cart-status">
            <Link to="/cart" className="btn view-cart-btn">
              <span>View in Cart</span>
              <span className="btn-icon">🛒</span>
            </Link>
            <p className="in-cart-message">Already in your cart</p>
          </div>
        ) : (
          <button 
            className="btn add-to-cart-btn"
            onClick={() => addToCart(plant)}
          >
            <span>Add to Cart</span>
            <span className="btn-icon">+</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default PlantCard;
