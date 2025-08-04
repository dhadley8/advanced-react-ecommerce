// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  ENDPOINTS: {
    PRODUCTS: '/products',
    CATEGORIES: '/products/categories',
    PRODUCT_BY_CATEGORY: (category) => `/products/category/${category}`,
    PRODUCT_BY_ID: (id) => `/products/${id}`,
  },
}

// Cache Configuration
export const CACHE_CONFIG = {
  PRODUCTS_STALE_TIME: 5 * 60 * 1000, // 5 minutes
  CATEGORIES_STALE_TIME: 10 * 60 * 1000, // 10 minutes
}

// UI Constants
export const UI_CONSTANTS = {
  PRODUCT_TITLE_MAX_LENGTH: 60,
  PRODUCT_DESCRIPTION_MAX_LENGTH: 100,
  MAX_CART_QUANTITY: 99,
  MIN_CART_QUANTITY: 1,
}

// Storage Keys
export const STORAGE_KEYS = {
  CART: 'cart',
}

// View Names
export const VIEWS = {
  HOME: 'home',
  CART: 'cart',
}
