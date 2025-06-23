import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-column footer-brand">
              <div className="brand-section">
                <h3>🌿 Paradise Nursery</h3>
                <p>Transform your space into a green paradise with our carefully curated collection of beautiful, healthy plants.</p>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><Link to="/products">All Plants</Link></li>
                <li><a href="#">Aromatic Plants</a></li>
                <li><a href="#">Medicinal Plants</a></li>
                <li><a href="#">Decorative Plants</a></li>
                <li><a href="#">Plant Accessories</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Plant Care</h4>
              <ul>
                <li><a href="#">Beginner's Guide</a></li>
                <li><a href="#">Watering Tips</a></li>
                <li><a href="#">Light Requirements</a></li>
                <li><a href="#">Soil & Fertilizer</a></li>
                <li><a href="#">Pest Control</a></li>
                <li><a href="#">Seasonal Care</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Plant Guarantee</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Track Your Order</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Wholesale</a></li>
              </ul>
            </div>
            
            <div className="footer-column newsletter-column">
              <h4>Stay Connected</h4>
              <p>Get plant care tips, exclusive offers, and new arrivals delivered to your inbox.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} Paradise Nursery. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
