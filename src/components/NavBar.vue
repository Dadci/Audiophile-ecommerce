<template>
  <nav
    class="w-full h-24 flex items-center justify-between py-8 px-40 bg-[#131313] relative after:content-[''] after:absolute after:bottom-0 after:left-40 after:right-40 after:h-px after:bg-white/15">
    <router-link to="/">
      <img :src="Logo" alt="Logo" class="" />
    </router-link>
    <ul class="flex space-x-8 uppercase font-bold text-[13px] cursor-pointer">
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
      <img :src="CartIcon" alt="Cart Icon" class="cursor-pointer hover:opacity-75 transition-opacity"
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
  </nav>

  <!-- Backdrop/Overlay -->
  <div v-if="cartStore.isOpen" class="fixed inset-0 bg-black/50 z-40" @click="closeCart"></div>
</template>

<script setup>
import Logo from "../assets/shared/desktop/logo.svg";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart.vue";
import { useCartStore } from "../store/cartStore.js";

const cartStore = useCartStore();

const toggleCart = () => {
  cartStore.toggleCart();
};

const closeCart = () => {
  cartStore.closeCart();
};
</script>
