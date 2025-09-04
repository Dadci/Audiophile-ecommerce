<template>
  <div class="px-40 py-16">
    <p class="text-sm font-normal text-gray-500 cursor-pointer mb-8" @click="goBack">
      &lt; Go back
    </p>
    
    <div class="flex gap-8">
      <!-- Checkout Form -->
      <div class="flex-1 bg-white p-8 rounded-lg">
        <h1 class="text-2xl font-bold uppercase tracking-wider mb-8">Checkout</h1>
        
        <!-- Billing Details -->
        <div class="mb-8">
          <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Billing Details</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold mb-2">Name</label>
              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Alexei Ward">
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Email Address</label>
              <input type="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="alexei@mail.com">
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Phone Number</label>
              <input type="tel" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="+1 202-555-0136">
            </div>
          </div>
        </div>

        <!-- Shipping Info -->
        <div class="mb-8">
          <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Shipping Info</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold mb-2">Address</label>
              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="1137 Williams Avenue">
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold mb-2">ZIP Code</label>
                <input type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="10001">
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">City</label>
                <input type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="New York">
              </div>
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Country</label>
              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="United States">
            </div>
          </div>
        </div>

        <!-- Payment Details -->
        <div>
          <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Payment Details</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold mb-2">Payment Method</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="radio" name="payment" value="card" class="mr-2">
                  e-Money
                </label>
                <label class="flex items-center">
                  <input type="radio" name="payment" value="cash" class="mr-2">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-96 bg-white p-8 rounded-lg h-fit">
        <h2 class="text-lg font-bold uppercase tracking-wider mb-6">Summary</h2>
        
        <div class="space-y-4 mb-6">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-4">
              <img 
                :src="getImagePath(item.image.desktop)" 
                :alt="item.name" 
                class="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <h3 class="font-bold text-sm">{{ getShortName(item.name) }}</h3>
                <p class="text-gray-500 text-sm">$ {{ item.price.toLocaleString() }}</p>
              </div>
            </div>
            <span class="text-gray-500 font-bold">x{{ item.quantity }}</span>
          </div>
        </div>

        <div class="space-y-2 border-t pt-4">
          <div class="flex justify-between">
            <span class="text-gray-500">TOTAL</span>
            <span class="font-bold text-lg">$ {{ cartStore.totalPrice.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">SHIPPING</span>
            <span class="font-bold">$ 50</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">VAT (INCLUDED)</span>
            <span class="font-bold">$ {{ Math.round(cartStore.totalPrice * 0.2).toLocaleString() }}</span>
          </div>
          <div class="flex justify-between border-t pt-2">
            <span class="text-gray-500">GRAND TOTAL</span>
            <span class="font-bold text-lg text-[#D87D4A]">$ {{ (cartStore.totalPrice + 50).toLocaleString() }}</span>
          </div>
        </div>

        <button 
          @click="placeOrder"
          class="w-full bg-[#D87D4A] hover:bg-[#D87D4A]/90 text-white font-bold py-3 px-6 rounded-lg mt-6 uppercase tracking-wider"
        >
          Continue & Pay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cartStore.js";

const router = useRouter();
const cartStore = useCartStore();

const goBack = () => {
  router.go(-1);
};

const getImagePath = (path) => {
  return path.replace("./", "/src/");
};

const getShortName = (name) => {
  if (name.includes('XX99 Mark II')) return 'XX99 MK II';
  if (name.includes('XX99 Mark I')) return 'XX99 MK I';
  if (name.includes('XX59')) return 'XX59';
  if (name.includes('ZX9')) return 'ZX9';
  if (name.includes('ZX7')) return 'ZX7';
  if (name.includes('YX1')) return 'YX1';
  return name;
};

const placeOrder = () => {
  // Here you would typically process the order
  alert('Order placed successfully!');
  cartStore.clearCart();
  router.push('/');
};
</script>