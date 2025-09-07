<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full h-auto md:h-80">
    <div class="w-full md:w-1/2 h-60 md:h-full rounded-lg overflow-hidden">
      <img
        :src="earPhone"
        alt=""
        class="rounded-lg w-full h-full object-cover"
      />
    </div>
    <div
      class="w-full md:w-1/2 h-auto md:h-full rounded-lg bg-gray-100 flex flex-col items-center md:items-start justify-center gap-6 md:gap-8 p-8 md:p-16 lg:p-24 text-center md:text-left"
    >
      <h1 class="text-black font-bold text-2xl md:text-3xl tracking-widest">
        YX1 EARPHONES
      </h1>
      <button
        class="bg-transparent tracking-wider py-3 md:py-4 px-6 md:px-8 text-black border font-bold text-xs md:text-[13px] cursor-pointer border-black hover:bg-black hover:text-white transition"
      >
        SEE PRODUCT
      </button>
    </div>
  </div>
</template>

<script setup>
import earPhone from "../assets/home/desktop/image-earphones-yx1.jpg";
</script>
