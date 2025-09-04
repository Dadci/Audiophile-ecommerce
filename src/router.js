import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Headphones from './pages/Headphones.vue'
import Speakers from './pages/Speakers.vue'
import Earphones from './pages/Earphones.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Checkout from './pages/Checkout.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/headphones',
        name: 'Headphones',
        component: Headphones,
    },
    {
        path: '/speakers',
        name: 'Speakers',
        component: Speakers,
    },
    {
        path: '/earphones',
        name: 'Earphones',
        component: Earphones,
    },
    {
        path: '/product/:slug',
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Always scroll to top when navigating to a new route
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})


export default router
