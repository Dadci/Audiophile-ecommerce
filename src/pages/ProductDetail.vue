<template>
  <p class="text-sm font-normal text-gray-500 cursor-pointer px-6 md:px-20 lg:px-40 pt-12 md:pt-16 pb-10 md:pb-14" @click="goBack">
    &lt; Go back
  </p>
  <div class="px-6 md:px-20 lg:px-40 flex flex-col gap-16 md:gap-24 lg:gap-32 mb-16 md:mb-24 lg:mb-40" v-if="product">
    <div class="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-30">
      <div class="w-full lg:w-1/2">
        <img :src="getImagePath(product.image.desktop)" :alt="product.name" class="rounded-lg w-full" />
      </div>
      <div class="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2 text-center lg:text-left">
        <div class="flex flex-col items-center lg:items-start gap-4">
          <p v-if="product.new" class="text-sm font-normal text-[#D87D4A] tracking-[0.4em]">
            NEW PRODUCT
          </p>
          <h1 class="text-black font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
            {{ product.name }}
          </h1>
        </div>
        <p class="text-gray-500 text-sm md:text-[15px] font-normal leading-7">
          {{ product.description }}
        </p>

        <p class="text-black font-bold text-lg tracking-widest">
          $ {{ product.price.toLocaleString() }}
        </p>

        <div class="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <div class="w-32 sm:w-auto flex items-center bg-gray-100 py-3 md:py-4 px-4 text-xs md:text-[13px]">
            <button @click="decreaseQuantity" :disabled="quantity <= 1"
              class="font-bold px-2 md:px-3 hover:text-[#D87D4A] disabled:opacity-50">
              -
            </button>
            <p class="px-3 md:px-4 font-bold min-w-[2rem] text-center">
              {{ quantity }}
            </p>
            <button @click="increaseQuantity" class="font-bold px-2 md:px-3 hover:text-[#D87D4A]">
              +
            </button>
          </div>

          <button @click="addToCart"
            class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-3 md:py-4 px-6 md:px-8 text-white font-bold text-xs md:text-[13px] cursor-pointer">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-16">
      <div class="flex flex-col items-start gap-6 w-full lg:w-1/2">
        <h1 class="text-black font-bold text-2xl md:text-3xl tracking-widest uppercase">
          Features
        </h1>
        <p class="text-gray-500 text-sm md:text-[15px] font-normal leading-7 whitespace-pre-line">
          {{ product.features }}
        </p>
      </div>
      <div class="flex flex-col items-start justify-start gap-6 w-full lg:w-auto">
        <h1 class="text-black font-bold text-2xl md:text-3xl tracking-widest uppercase">
          In the box
        </h1>
        <ul class="space-y-2">
          <li v-for="item in product.includes" :key="item.item" class="text-gray-500 text-sm md:text-[15px] font-normal leading-7">
            <span class="text-[#D87D4A] font-bold pr-6">{{ item.quantity }}x</span>
            {{ item.item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row w-full gap-6 md:gap-8">
      <div class="flex flex-col gap-6 md:gap-8 flex-1">
        <img :src="getImagePath(product.gallery.first.desktop)" alt="" class="rounded-lg w-full" />
        <img :src="getImagePath(product.gallery.second.desktop)" alt="" class="rounded-lg w-full" />
      </div>
      <div class="flex flex-1 lg:flex-none">
        <img :src="getImagePath(product.gallery.third.desktop)" alt="" class="rounded-lg w-full lg:w-auto" />
      </div>
    </div>

    <div class="space-y-12 md:space-y-16">
      <h2 class="text-black font-bold text-2xl md:text-3xl text-center tracking-widest uppercase">
        You may also like
      </h2>
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <ProductItem v-for="item in product.others" :key="item.slug" :ProductItem="item"
          @see-product="handleSeeProduct" />
      </div>
    </div>
    <Categories />
    <Info />
  </div>
  <div v-else class="px-6 md:px-20 lg:px-40 py-20">
    <p class="text-center text-gray-500">Product not found</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProducts } from "../composables/useProducts.js";
import { useCartStore } from "../store/cartStore.js";
import ProductItem from "../components/ProductItem.vue";
import Categories from "../components/Categories.vue";
import Info from "../components/Info.vue";

const route = useRoute();
const router = useRouter();
const { getProductBySlug } = useProducts();
const cartStore = useCartStore();

const quantity = ref(1);

const product = computed(() => {
  return getProductBySlug(route.params.slug);
});

const getImagePath = (path) => {
  return path.replace("./", "/src/");
};

const goBack = () => {
  router.go(-1);
};

const handleSeeProduct = (productSlug) => {
  router.push(`/product/${productSlug}`);
};

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      ...product.value,
      quantity: quantity.value
    });

    // Optional: Show success message or open cart
    cartStore.openCart();

    // Reset quantity after adding to cart
    quantity.value = 1;
  }
};

// Reset quantity when product changes
watch(
  () => route.params.slug,
  () => {
    quantity.value = 1;
  }
);
</script>
