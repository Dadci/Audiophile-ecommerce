<template>
  <nav
    class="w-full h-16 md:h-24 flex items-center justify-between py-4 md:py-8 px-6 md:px-20 lg:px-40 bg-[#131313] relative after:content-[''] after:absolute after:bottom-0 after:left-6 after:right-6 md:after:left-20 md:after:right-20 lg:after:left-40 lg:after:right-40 after:h-px after:bg-white/15">
    <router-link to="/">
      <img :src="Logo" alt="Logo" class="w-24 md:w-auto" />
    </router-link>

    <!-- Mobile menu button -->
    <button @click="toggleMobileMenu" class="md:hidden text-white p-2" aria-label="Toggle menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Desktop navigation -->
    <ul class="hidden md:flex space-x-4 lg:space-x-8 uppercase font-bold text-xs lg:text-[13px] cursor-pointer">
      <li>
        <router-link to="/" class="text-white hover:text-[#D87D4A]">Home</router-link>
      </li>
      <li>
        <router-link to="/headphones" class="text-white hover:text-[#D87D4A]">HEADPHONES</router-link>
      </li>
      <li>
        <router-link to="/speakers" class="text-white hover:text-[#D87D4A]">SPEAKERS</router-link>
      </li>
      <li>
        <router-link to="/earphones" class="text-white hover:text-[#D87D4A]">EARPHONES</router-link>
      </li>
    </ul>

    <div class="relative">
      <img :src="CartIcon" alt="Cart Icon" class="cursor-pointer hover:opacity-75 transition-opacity w-5 md:w-auto"
        @click="toggleCart" />
      <!-- Cart item count badge -->
      <span v-if="cartStore.totalItems > 0"
        class="absolute -top-2 -right-3 bg-[#D87D4A] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
        {{ cartStore.totalItems }}
      </span>
      <!-- Cart dropdown -->
      <div v-if="cartStore.isOpen" class="absolute top-12 right-0 z-50">
        <Cart />
      </div>
    </div>

    <!-- Mobile navigation menu -->
    <Transition name="mobile-menu">
      <div v-if="showMobileMenu" class="absolute top-full left-0 right-0 bg-white z-40 md:hidden">
        <div class="p-6">
          <Categories />
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Backdrop/Overlay -->
  <div v-if="cartStore.isOpen || showMobileMenu" class="fixed inset-0 bg-black/50 z-30" @click="closeAllMenus"></div>
</template>

<script setup>
import { ref } from 'vue';
import Logo from "../assets/shared/desktop/logo.svg";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart.vue";
import Categories from "./Categories.vue";
import { useCartStore } from "../store/cartStore.js";

const cartStore = useCartStore();
const showMobileMenu = ref(false);

const toggleCart = () => {
  cartStore.toggleCart();
  showMobileMenu.value = false;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  if (showMobileMenu.value) {
    cartStore.closeCart();
  }
};

const closeAllMenus = () => {
  cartStore.closeCart();
  showMobileMenu.value = false;
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
