<template>
  <div @click="handleClick"
    class="flex flex-col items-center justify-end bg-gray-100 p-6 md:p-8 w-full h-48 md:h-44 lg:h-48 relative rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
    <div
      class="absolute -top-10 md:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2 z-10 hover:scale-105 transition-transform duration-300">
      <img :src="CategoryImage" alt="" class="object-contain w-40 md:w-30 lg:w-auto h-40 md:h-30 lg:h-auto" />
    </div>
    <div class="flex flex-col items-center justify-center gap-2 md:gap-3 pb-2">
      <h2 class="text-sm md:text-base font-bold uppercase text-black tracking-widest">
        {{ CategoryName }}
      </h2>
      <div class="flex items-center gap-2">
        <p class="text-gray-600 text-xs md:text-sm font-bold">
          SHOP
        </p>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  CategoryImage: {
    type: String,
    required: true,
  },
  CategoryName: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);

const handleClick = () => {
  emit("navigate");
};
</script>
