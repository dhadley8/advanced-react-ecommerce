import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useProducts, useCategories, useProductsByCategory } from '../hooks/useApi'
import { addToCart } from '../store/cartSlice'
import ProductCard from './ProductCard'
import CategoryFilter from './CategoryFilter'
import LoadingSpinner from './LoadingSpinner'
import './Home.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const dispatch = useDispatch()

  // Fetch all products by default
  const { data: allProducts, isLoading: isLoadingProducts, error: productsError } = useProducts()
  
  // Fetch categories for the dropdown
  const { data: categories, isLoading: isLoadingCategories } = useCategories()
  
  // Fetch products by category when a category is selected
  const { data: categoryProducts, isLoading: isLoadingCategoryProducts } = useProductsByCategory(selectedCategory)

  // Determine which products to display
  const products = selectedCategory ? categoryProducts : allProducts
  const isLoading = selectedCategory ? isLoadingCategoryProducts : isLoadingProducts

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  if (productsError) {
    return (
      <div className="container">
        <div className="error-message">
          Error loading products: {productsError.message}
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="home">
        <h1>Product Catalog</h1>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isLoading={isLoadingCategories}
        />

        {isLoading ? (
          <LoadingSpinner message="Loading products..." />
        ) : (
          <div className="products-grid">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        )}

        {products && products.length === 0 && !isLoading && (
          <div className="no-products">
            No products found for the selected category.
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
