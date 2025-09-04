<template>
  <div
    @click="handleClick"
    class="flex flex-col items-center justify-between bg-gray-100 p-8 w-1/3 relative rounded-lg hover:bg-orange-100 transition-colors duration-300 cursor-pointer"
  >
    <div
      class="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10 hover:scale-105 transition-transform duration-300"
    >
      <img :src="CategoryImage" alt="" class="object-contain" />
    </div>
    <div class="flex flex-col items-center justify-center mt-20 gap-1">
      <h2 class="text-base font-bold uppercase text-black tracking-widest">
        {{ CategoryName }}
      </h2>
      <p class="text-gray-600 text-sm">
        SHOP <span class="text-orange-300 ml-2 font-bold text-lg">></span>
      </p>
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
