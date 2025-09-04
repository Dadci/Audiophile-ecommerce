import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Load cart from localStorage after Pinia is initialized
app.mount('#app')

// Import and initialize cart store after app is mounted
import { useCartStore } from './store/cartStore.js'
const cartStore = useCartStore()
cartStore.loadCart()
