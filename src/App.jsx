import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (plant) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === plant.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === plant.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...plant, quantity: 1 }]
    })
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Landing cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />} />
              <Route path="/products" element={
                <Products 
                  addToCart={addToCart} 
                  cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  cartItems={cartItems}
                />
              } />
              <Route path="/cart" element={
                <Cart 
                  cartItems={cartItems} 
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
