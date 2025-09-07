<template>
    <div class="flex flex-col gap-6 items-center justify-center bg-white rounded-lg w-[350px] md:w-[400px] p-6 md:p-8 shadow-lg">
        <div class="w-full flex items-center justify-between">
            <h2 class="text-black font-bold text-xl uppercase tracking-wider">
                Cart ({{ cartStore.totalItems }})
            </h2>
            <p @click="clearCart" class="text-gray-500 font-normal cursor-pointer underline hover:text-red-500">
                Remove all
            </p>
        </div>

        <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-8">
            Your cart is empty
        </div>

        <div v-else class="flex flex-col gap-6 w-full">
            <CartItem v-for="item in cartStore.items" :key="item.id" :item="item" @update-quantity="updateQuantity"
                @remove-item="removeItem" />
        </div>

        <div v-if="cartStore.items.length > 0" class="flex items-center justify-between w-full mt-4">
            <h2 class="text-gray-500 font-light text-base uppercase tracking-widest">Total</h2>
            <p class="text-black font-bold text-lg">$ {{ cartStore.totalPrice.toLocaleString() }}</p>
        </div>

        <button v-if="cartStore.items.length > 0" @click="goToCheckout"
            class="w-full bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer uppercase">
            Checkout
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CartItem from "./CartItem.vue";
import { useCartStore } from "../store/cartStore.js";

const router = useRouter();
const cartStore = useCartStore();

const clearCart = () => {
    cartStore.clearCart();
};

const updateQuantity = (productId, quantity) => {
    cartStore.updateQuantity(productId, quantity);
};

const removeItem = (productId) => {
    cartStore.removeItem(productId);
};

const goToCheckout = () => {
    cartStore.closeCart();
    router.push('/checkout');
};
</script>
