<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-30"
    :class="containerClasses"
  >
    <div class="w-full lg:w-1/2">
      <img
        :src="getImagePath(product.categoryImage.desktop)"
        :alt="product.name"
        class="rounded-lg w-full"
      />
    </div>
    <div class="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2 text-center lg:text-left">
      <div class="flex flex-col items-center lg:items-start gap-4">
        <p
          v-if="product.new"
          class="text-sm font-normal text-[#D87D4A] tracking-[0.4em]"
        >
          NEW PRODUCT
        </p>
        <h1 class="text-black font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
          {{ product.name }}
        </h1>
      </div>
      <p class="text-gray-500 text-sm md:text-[15px] font-normal leading-7 max-w-lg lg:max-w-none">
        {{ product.description }}
      </p>

      <button
        @click="$emit('seeProduct', product.slug)"
        class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-3 md:py-4 px-6 md:px-8 text-white font-bold text-xs md:text-[13px] cursor-pointer"
      >
        SEE PRODUCT
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

defineEmits(["seeProduct"]);

const getImagePath = (path) => {
  // Remove the './' and add your src path
  return path.replace("./", "/src/");
};

// Compute classes based on index - even index = normal, odd index = reverse (only on large screens)
const containerClasses = computed(() => {
  return props.index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
});
</script>
