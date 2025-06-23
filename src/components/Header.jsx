import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header({ cartItemsCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="landing-nav">
      <Link to="/" className="nav-logo">
        🌿 Paradise Nursery
      </Link>
      
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/products" className="nav-link" onClick={closeMobileMenu}>Shop Plants</Link>
        <Link to="/cart" className="nav-link cart-link" onClick={closeMobileMenu}>
          Cart ({cartItemsCount})
        </Link>
        <ThemeToggle />
      </div>
      
      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
    </nav>
  )
}

export default Header
