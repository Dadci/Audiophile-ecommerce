<template>
  <div class="flex flex-col gap-6 md:gap-8 items-center justify-center w-full">
    <div class="rounded-lg flex items-center justify-center w-full">
      <img :src="getImagePath(ProductItem.image.desktop)" :alt="ProductItem.name" class="rounded-lg w-full" />
    </div>
    <p class="text-center font-bold text-lg md:text-xl lg:text-2xl">{{ ProductItem.name }}</p>
    <button @click="$emit('seeProduct', ProductItem.slug)"
      class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-3 md:py-4 px-6 md:px-8 text-white font-bold text-xs md:text-[13px] cursor-pointer">
      SEE PRODUCT
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ProductItem: {
    type: Object,
    required: true,
  },
});

defineEmits(["seeProduct"]);

import { getAssetPath } from '../utils/assetImports.js';

const getImagePath = (path) => {
  return getAssetPath(path);
};
</script>
