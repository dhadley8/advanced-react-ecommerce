import { API_CONFIG } from '../utils/constants'

const { BASE_URL, ENDPOINTS } = API_CONFIG

export const apiService = {
  // Get all products
  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.PRODUCTS}`)
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  },

  // Get all categories
  getCategories: async () => {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.CATEGORIES}`)
    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }
    return response.json()
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.PRODUCT_BY_CATEGORY(category)}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`)
    }
    return response.json()
  },

  // Get single product
  getProduct: async (id) => {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.PRODUCT_BY_ID(id)}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`)
    }
    return response.json()
  },
}
