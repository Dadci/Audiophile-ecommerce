import { ref } from 'vue'
import productsData from '../../utils/data.json'

export const useProducts = () => {
    const products = ref(productsData)

    const getProductsByCategory = (category) => {
        return products.value.filter(product => product.category === category)
    }

    const getProductById = (id) => {
        return products.value.find(product => product.id === id)
    }

    const getProductBySlug = (slug) => {
        return products.value.find(product => product.slug === slug)
    }

    return {
        products: products.value,
        getProductsByCategory,
        getProductById,
        getProductBySlug
    }
}