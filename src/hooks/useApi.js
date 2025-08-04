import { useQuery } from '@tanstack/react-query'
import { apiService } from '../services/api'
import { CACHE_CONFIG } from '../utils/constants'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: apiService.getAllProducts,
    staleTime: CACHE_CONFIG.PRODUCTS_STALE_TIME,
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: apiService.getCategories,
    staleTime: CACHE_CONFIG.CATEGORIES_STALE_TIME,
  })
}

export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => apiService.getProductsByCategory(category),
    enabled: !!category,
    staleTime: CACHE_CONFIG.PRODUCTS_STALE_TIME,
  })
}

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => apiService.getProduct(id),
    enabled: !!id,
    staleTime: CACHE_CONFIG.PRODUCTS_STALE_TIME,
  })
}
