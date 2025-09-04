import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        isOpen: false
    }),

    getters: {
        totalItems: (state) => {
            return state.items.reduce((total, item) => total + item.quantity, 0)
        },

        totalPrice: (state) => {
            return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
        },

        itemCount: (state) => {
            return state.items.length
        }
    },

    actions: {
        // Load cart from localStorage on store initialization
        loadCart() {
            try {
                const savedCart = localStorage.getItem('audiophile-cart')
                if (savedCart) {
                    this.items = JSON.parse(savedCart)
                }
            } catch (error) {
                console.error('Error loading cart from localStorage:', error)
                this.items = []
            }
        },

        // Save cart to localStorage
        saveCart() {
            try {
                localStorage.setItem('audiophile-cart', JSON.stringify(this.items))
            } catch (error) {
                console.error('Error saving cart to localStorage:', error)
            }
        },

        addItem(product) {
            const existingItem = this.items.find(item => item.id === product.id)

            if (existingItem) {
                existingItem.quantity += product.quantity || 1
            } else {
                this.items.push({
                    ...product,
                    quantity: product.quantity || 1
                })
            }

            // Save to localStorage after adding item
            this.saveCart()
        },

        removeItem(productId) {
            const index = this.items.findIndex(item => item.id === productId)
            if (index > -1) {
                this.items.splice(index, 1)
                // Save to localStorage after removing item
                this.saveCart()
            }
        },

        updateQuantity(productId, quantity) {
            const item = this.items.find(item => item.id === productId)
            if (item) {
                if (quantity <= 0) {
                    this.removeItem(productId)
                } else {
                    item.quantity = quantity
                    // Save to localStorage after updating quantity
                    this.saveCart()
                }
            }
        },

        clearCart() {
            this.items = []
            // Clear localStorage when cart is cleared
            this.saveCart()
        },

        toggleCart() {
            this.isOpen = !this.isOpen
        },

        openCart() {
            this.isOpen = true
        },

        closeCart() {
            this.isOpen = false
        }
    }
})