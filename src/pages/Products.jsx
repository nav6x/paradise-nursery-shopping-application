import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import Header from '../components/Header'
import './Products.css'

function Products({ addToCart, cartItemsCount, cartItems = [] }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('default')
  const [displayCount, setDisplayCount] = useState(6)
  
  const aromaticPlants = [
    {
      id: 1,
      name: "Lavender",
      description: "Fragrant purple flowers perfect for relaxation and aromatherapy",
      price: 15.99,
      image: "🪻",
      category: "aromatic"
    },
    {
      id: 2,
      name: "Rosemary",
      description: "Aromatic herb excellent for cooking and natural fragrance",
      price: 12.99,
      image: "🌿",
      category: "aromatic"
    },
    {
      id: 3,
      name: "Mint",
      description: "Refreshing herb perfect for teas and culinary use",
      price: 9.99,
      image: "🌱",
      category: "aromatic"
    }
  ]

  const medicinalPlants = [
    {
      id: 4,
      name: "Aloe Vera",
      description: "Healing succulent known for its soothing gel and air purifying qualities",
      price: 18.99,
      image: "🪴",
      category: "medicinal"
    },
    {
      id: 5,
      name: "Snake Plant",
      description: "Hardy plant that purifies air and requires minimal care",
      price: 22.99,
      image: "🌿",
      category: "medicinal"
    },
    {
      id: 6,
      name: "Peace Lily",
      description: "Beautiful flowering plant that improves indoor air quality",
      price: 25.99,
      image: "🌸",
      category: "medicinal"
    }
  ]

  const decorativePlants = [
    {
      id: 7,
      name: "Monstera Deliciosa",
      description: "Striking tropical plant with distinctive split leaves",
      price: 29.99,
      image: "🌿",
      category: "decorative"
    },
    {
      id: 8,
      name: "Fiddle Leaf Fig",
      description: "Popular indoor tree with large, violin-shaped leaves",
      price: 34.99,
      image: "🌳",
      category: "decorative"
    },
    {
      id: 9,
      name: "Pothos",
      description: "Easy-care trailing vine with heart-shaped leaves",
      price: 15.99,
      image: "🌱",
      category: "decorative"
    }
  ]

  const allPlants = [...aromaticPlants, ...medicinalPlants, ...decorativePlants]
  
  const filteredPlants = allPlants.filter(plant => {
    const matchesCategory = activeCategory === 'all' || plant.category === activeCategory
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         plant.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedPlants = [...filteredPlants].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  const plantsToDisplay = sortedPlants.slice(0, displayCount)
  
  const loadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  useEffect(() => {
    setDisplayCount(6)
  }, [activeCategory, searchQuery, sortOption])

  return (
    <div className="products-page">
      <Header cartItemsCount={cartItemsCount} />
      
      <div className="container">
        <div className="products-tools">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search plants..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="sort-dropdown">
            <label htmlFor="sort-select">Sort:</label>
            <div className="custom-select">
              <select 
                id="sort-select" 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="sort-select"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
              <span className="select-icon">▼</span>
            </div>
          </div>
        </div>

        <div className="category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Plants
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'aromatic' ? 'active' : ''}`}
            onClick={() => setActiveCategory('aromatic')}
          >
            <span className="category-icon">🌿</span>
            Aromatic
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'medicinal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('medicinal')}
          >
            <span className="category-icon">🪴</span>
            Medicinal
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'decorative' ? 'active' : ''}`}
            onClick={() => setActiveCategory('decorative')}
          >
            <span className="category-icon">🌸</span>
            Decorative
          </button>
        </div>

        {filteredPlants.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No plants found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setActiveCategory('all')
                setSearchQuery('')
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="results-info">
              <p>Showing {plantsToDisplay.length} of {filteredPlants.length} plants</p>
            </div>

            <div className="plant-grid">
              {plantsToDisplay.map((plant, index) => (
                <div 
                  className="plant-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={plant.id}
                >
                  <PlantCard 
                    plant={plant} 
                    addToCart={addToCart}
                    isInCart={cartItems.some(item => item.id === plant.id)}
                  />
                </div>
              ))}
            </div>

            {displayCount < filteredPlants.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={loadMore}>
                  Load More Plants
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Products