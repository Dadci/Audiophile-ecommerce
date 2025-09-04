<template>
  <div
    class="w-full flex items-center justify-center py-24 bg-[#131313] text-white mb-40"
  >
    <h1 class="text-4xl font-bold uppercase">Earphones</h1>
  </div>
  <div class="px-40 flex flex-col gap-32 mb-40">
    <ProductCard
      v-for="(product, index) in earphones"
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

// Get only earphones and sort by newest first
const earphones = computed(() => {
  return getProductsByCategory("earphones").sort((a, b) => {
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
