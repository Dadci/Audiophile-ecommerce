<template>
  <div class="flex flex-col gap-8 items-center justify-center w-full">
    <div class="  rounded-lg flex items-center justify-center w-full ">
      <img
        :src="getImagePath(ProductItem.image.desktop)"
        :alt="ProductItem.name"
        class=" rounded-lg"
      />
    </div>
    <p class="text-center font-bold text-2xl">{{ ProductItem.name }}</p>
    <button
      @click="$emit('seeProduct', ProductItem.slug)"
      class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer"
    >
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

const getImagePath = (path) => {
  return path.replace("./", "/src/");
};
</script>
