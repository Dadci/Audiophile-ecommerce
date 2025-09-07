<template>
  <div
    class="bg-cover bg-center h-[240px] md:h-[280px] lg:h-[320px] relative rounded-lg overflow-hidden flex flex-col justify-center items-start px-6 md:px-16 lg:px-24"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="space-y-6 md:space-y-8 z-20">
      <h1 class="text-black font-bold text-2xl md:text-3xl tracking-widest">ZX7 SPEAKER</h1>
      <button
        class="bg-transparent tracking-wider py-3 md:py-4 px-6 md:px-8 text-black border font-bold text-xs md:text-[13px] cursor-pointer border-black hover:bg-black hover:text-white transition"
      >
        SEE PRODUCT
      </button>
    </div>
  </div>
</template>

<script setup>
import Bg from "../assets/home/desktop/image-speaker-zx7.png";
</script>
