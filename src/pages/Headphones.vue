<template>
  <div
    class="w-full flex items-center justify-center py-16 md:py-20 lg:py-24 bg-[#131313] text-white mb-16 md:mb-24 lg:mb-40"
  >
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Headphones</h1>
  </div>
  <div class="px-6 md:px-20 lg:px-40 flex flex-col gap-16 md:gap-24 lg:gap-32 mb-16 md:mb-24 lg:mb-40">
    <ProductCard
      v-for="(product, index) in headphones"
      :key="product.id"
      :product="product"
      :index="index"
      @see-product="handleSeeProduct"
    />
    <Categories />
    <Info />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Categories from "../components/Categories.vue";
import Info from "../components/Info.vue";
import { useProducts } from "../composables/useProducts.js";
import { useRouter } from "vue-router";

const router = useRouter();
const { getProductsByCategory } = useProducts();

// Get only headphones and sort by newest first
const headphones = computed(() => {
  return getProductsByCategory("headphones").sort((a, b) => {
    // Put new products first, then sort by price descending
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return b.price - a.price;
  });
});

const handleSeeProduct = (productSlug) => {
  router.push(`/product/${productSlug}`);
};
</script>
