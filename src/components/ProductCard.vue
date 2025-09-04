<template>
  <div
    class="flex items-center justify-center w-full gap-30"
    :class="containerClasses"
  >
    <div class="w-1/2">
      <img
        :src="getImagePath(product.categoryImage.desktop)"
        :alt="product.name"
        class="rounded-lg"
      />
    </div>
    <div class="flex flex-col items-start gap-8 w-1/2">
      <div class="flex flex-col items-start gap-4">
        <p
          v-if="product.new"
          class="text-sm font-normal text-[#D87D4A] tracking-[0.4em]"
        >
          NEW PRODUCT
        </p>
        <h1 class="text-black font-bold text-4xl tracking-widest uppercase">
          {{ product.name }}
        </h1>
      </div>
      <p class="text-gray-500 text-[15px] font-normal leading-7">
        {{ product.description }}
      </p>

      <button
        @click="$emit('seeProduct', product.slug)"
        class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer"
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

// Compute classes based on index - even index = normal, odd index = reverse
const containerClasses = computed(() => {
  return props.index % 2 === 0 ? "flex-row" : "flex-row-reverse";
});
</script>
