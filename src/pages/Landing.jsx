import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';
import './Landing.css';

function Landing({ cartItemsCount }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="landing">
      <Header cartItemsCount={cartItemsCount} />

      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🌟</span>
            <span className="badge-text">Premium Plant Collection</span>
          </div>
          <h1>Transform Your Space Into a <span className="highlight">Green Paradise</span></h1>
          <p className="hero-description">
            Discover our carefully curated collection of beautiful, healthy plants that will breathe life into your home. 
            From air-purifying wonders to aromatic herbs, we have the perfect green companions for every space and lifestyle.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="cta-button primary">
              <span>Explore Our Plants</span>
              <span className="button-icon">🌿</span>
            </Link>
            <button className="cta-button secondary">
              <span>Plant Care Guide</span>
              <span className="button-icon">📖</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="plant-showcase">
            <div className="plant-item featured">
              <div className="plant-emoji main">{isDarkMode ? '🌱' : '🪴'}</div>
            </div>
            <div className="plant-item secondary">
              <div className="plant-emoji">{isDarkMode ? '🌿' : '🌵'}</div>
            </div>
            <div className="plant-item tertiary">
              <div className="plant-emoji">{isDarkMode ? '🍃' : '🌹'}</div>
            </div>
            <div className="floating-elements">
              <div className="floating-leaf">🍃</div>
              <div className="floating-flower">🌸</div>
              <div className="floating-sprout">🌱</div>
            </div>
          </div>
          <div className="hero-decorations">
            <div className="decoration-circle"></div>
            <div className="decoration-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;