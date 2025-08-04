import PropTypes from 'prop-types'
import './CategoryFilter.css'

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, isLoading }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value)
  }

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="category-label">
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-select"
        disabled={isLoading}
      >
        <option value="">All Categories</option>
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      {isLoading && <span className="loading-text">Loading categories...</span>}
    </div>
  )
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

CategoryFilter.defaultProps = {
  categories: [],
}

export default CategoryFilter
