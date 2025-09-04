<template>
  <div class="bg-gray-100">
    <div class="px-40 py-16">
      <p class="text-sm font-normal text-gray-500 cursor-pointer mb-8" @click="goBack">
        &lt; Go back
      </p>

      <div class="flex gap-8">
        <!-- Checkout Form -->
        <div class="flex-1 bg-white p-12 rounded-lg">
          <h1 class="text-2xl font-bold uppercase tracking-wider mb-8">Checkout</h1>

          <!-- Billing Details -->
          <div class="mb-8">
            <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Billing Details</h2>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold mb-2">Name</label>
                <input v-model="form.name" type="text"
                  :class="['w-full p-3 border rounded-lg', formErrors.name ? 'border-red-500' : 'border-gray-300']"
                  placeholder="Alexei Ward">
                <span v-if="formErrors.name" class="text-red-500 text-xs mt-1 block">{{ formErrors.name }}</span>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">Email Address</label>
                <input v-model="form.email" type="email"
                  :class="['w-full p-3 border rounded-lg', formErrors.email ? 'border-red-500' : 'border-gray-300']"
                  placeholder="alexei@mail.com">
                <span v-if="formErrors.email" class="text-red-500 text-xs mt-1 block">{{ formErrors.email }}</span>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">Phone Number</label>
                <input v-model="form.phone" type="tel"
                  :class="['w-full p-3 border rounded-lg', formErrors.phone ? 'border-red-500' : 'border-gray-300']"
                  placeholder="+1 202-555-0136">
                <span v-if="formErrors.phone" class="text-red-500 text-xs mt-1 block">{{ formErrors.phone }}</span>
              </div>
            </div>
          </div>

          <!-- Shipping Info -->
          <div class="mb-8">
            <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Shipping Info</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-bold mb-2">Address</label>
                <input v-model="form.address" type="text"
                  :class="['w-full p-3 border rounded-lg', formErrors.address ? 'border-red-500' : 'border-gray-300']"
                  placeholder="1137 Williams Avenue">
                <span v-if="formErrors.address" class="text-red-500 text-xs mt-1 block">{{ formErrors.address }}</span>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-bold mb-2">ZIP Code</label>
                  <input v-model="form.zipCode" type="text"
                    :class="['w-full p-3 border rounded-lg', formErrors.zipCode ? 'border-red-500' : 'border-gray-300']"
                    placeholder="10001">
                  <span v-if="formErrors.zipCode" class="text-red-500 text-xs mt-1 block">{{ formErrors.zipCode
                    }}</span>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2">City</label>
                  <input v-model="form.city" type="text"
                    :class="['w-full p-3 border rounded-lg', formErrors.city ? 'border-red-500' : 'border-gray-300']"
                    placeholder="New York">
                  <span v-if="formErrors.city" class="text-red-500 text-xs mt-1 block">{{ formErrors.city }}</span>
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">Country</label>
                <input v-model="form.country" type="text"
                  :class="['w-full p-3 border rounded-lg', formErrors.country ? 'border-red-500' : 'border-gray-300']"
                  placeholder="United States">
                <span v-if="formErrors.country" class="text-red-500 text-xs mt-1 block">{{ formErrors.country }}</span>
              </div>
            </div>
          </div>

          <!-- Payment Details -->
          <div>
            <h2 class="text-[#D87D4A] font-bold text-sm uppercase tracking-wider mb-4">Payment Details</h2>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold mb-2">Payment Method</label>
              </div>
              <div class="space-y-4">
                <label class="flex items-center p-3.5 border rounded-lg cursor-pointer transition-colors"
                  :class="form.paymentMethod === 'card' ? 'border-[#D87D4A]' : 'border-gray-300'">
                  <input v-model="form.paymentMethod" type="radio" name="payment" value="card"
                    class="mr-3 accent-[#D87D4A]">
                  <span class="font-bold text-sm">e-Money</span>
                </label>
                <label class="flex items-center p-3.5 border rounded-lg cursor-pointer transition-colors"
                  :class="form.paymentMethod === 'cash' ? 'border-[#D87D4A]' : 'border-gray-300'">
                  <input v-model="form.paymentMethod" type="radio" name="payment" value="cash"
                    class="mr-3 accent-[#D87D4A]">
                  <span class="font-bold text-sm">Cash on Delivery</span>
                </label>
                <span v-if="formErrors.paymentMethod" class="text-red-500 text-xs mt-1 block">{{
                  formErrors.paymentMethod }}</span>
              </div>
            </div>
            <div v-if="form.paymentMethod === 'cash'" class="flex items-center gap-4 py-8">
              <img :src="Cod" alt="" class="w-12 ">
              <p class="text-base text-gray-500 leading-7">The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure your address is correct so that your
                order will not be cancelled.</p>


            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="w-96 bg-white p-8 rounded-lg h-fit">
          <h2 class="text-lg font-bold uppercase tracking-wider mb-8">Summary</h2>

          <div class="space-y-4 mb-6">
            <div v-for="item in cartStore.items" :key="item.id" class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img :src="getImagePath(item.image.desktop)" :alt="item.name"
                  class="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h3 class="font-bold text-sm">{{ getShortName(item.name) }}</h3>
                  <p class="text-gray-500 text-sm">$ {{ item.price.toLocaleString() }}</p>
                </div>
              </div>
              <span class="text-gray-500 font-bold pb-6 ">x{{ item.quantity }}</span>
            </div>
          </div>

          <div class="space-y-2 pt-4">
            <div class="flex justify-between">
              <span class="text-gray-500">TOTAL</span>
              <span class="font-bold text-lg">$ {{ cartStore.totalPrice.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">SHIPPING</span>
              <span class="font-bold text-lg">$ 50</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">VAT (INCLUDED)</span>
              <span class="font-bold text-lg">$ {{ Math.round(cartStore.totalPrice * 0.2).toLocaleString() }}</span>
            </div>
            <div class="flex justify-between  pt-6">
              <span class="text-gray-500">GRAND TOTAL</span>
              <span class="font-bold text-lg text-[#D87D4A]">$ {{ grandTotal.toLocaleString() }}</span>
            </div>
          </div>

          <button @click="placeOrder"
            class="w-full bg-[#D87D4A] hover:bg-[#D87D4A]/90 text-white font-bold py-3 px-6  mt-6 uppercase tracking-wider">
            Continue & Pay
          </button>
        </div>
      </div>
    </div>

    <!-- Order Success Modal -->
    <Transition name="modal">
      <div v-if="showOrderModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <OrderSuccess :order-items="orderItems" :grand-total="grandTotal" @close="closeModal"
          @back-to-home="backToHome" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cartStore.js";
import OrderSuccess from "../components/OrderSucces.vue";
import Cod from '../assets/checkout/icon-cash-on-delivery.svg';

const router = useRouter();
const cartStore = useCartStore();

const showOrderModal = ref(false);
const orderItems = ref([]);

// Form data
const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  paymentMethod: ''
});

// Form errors
const formErrors = ref({});


const grandTotal = computed(() => cartStore.totalPrice + 50);

// Validation function
const validateForm = () => {
  formErrors.value = {};

  if (!form.name.trim()) {
    formErrors.value.name = 'Name is required';
  }

  if (!form.email.trim()) {
    formErrors.value.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formErrors.value.email = 'Please enter a valid email';
  }

  if (!form.phone.trim()) {
    formErrors.value.phone = 'Phone number is required';
  }

  if (!form.address.trim()) {
    formErrors.value.address = 'Address is required';
  }

  if (!form.zipCode.trim()) {
    formErrors.value.zipCode = 'ZIP code is required';
  }

  if (!form.city.trim()) {
    formErrors.value.city = 'City is required';
  }

  if (!form.country.trim()) {
    formErrors.value.country = 'Country is required';
  }

  if (!form.paymentMethod) {
    formErrors.value.paymentMethod = 'Please select a payment method';
  }

  return Object.keys(formErrors.value).length === 0;
};

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
  if (!validateForm()) {
    return; // Don't proceed if validation fails
  }

  // Store order items before clearing cart
  orderItems.value = [...cartStore.items];

  // Show modal
  showOrderModal.value = true;
};

const closeModal = () => {
  showOrderModal.value = false;
  // Clear cart after closing modal
  cartStore.clearCart();
  router.push('/');
};

const backToHome = () => {
  showOrderModal.value = false;
  cartStore.clearCart();
  router.push('/');
};
</script>

<style scoped>
/* Modal backdrop fade animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Modal content slide-in animation */
.modal-enter-active .bg-white {
  animation: slideIn 0.4s ease-out;
}

.modal-leave-active .bg-white {
  animation: slideOut 0.3s ease-in;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px) scale(0.9);
    opacity: 0;
  }

  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  to {
    transform: translateY(-30px) scale(0.95);
    opacity: 0;
  }
}
</style>