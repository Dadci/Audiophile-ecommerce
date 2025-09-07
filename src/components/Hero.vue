<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-between w-full px-6 md:px-20 lg:px-40 bg-[#131313] py-8 lg:py-0">
    <div class="flex flex-col items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left order-2 lg:order-1">
      <p class="text-sm font-normal text-white/50 tracking-[0.4em]">NEW PRODUCT</p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white tracking-widest leading-tight">
        XX99 Mark II<br class="hidden lg:block" /> Headphones
      </h1>
      <p class="text-[15px] font-medium text-white/75 max-w-md lg:max-w-none">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <button
        class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer">
        SEE PRODUCT
      </button>
    </div>

    <div class="w-full lg:w-full h-full flex justify-center lg:justify-end order-1 lg:order-2">
      <img :src="HeroImage" alt="Hero Image" class="w-[60%] md:w-[50%] lg:w-[85%]" />
    </div>
  </div>
</template>

<script setup>
import HeroImage from "../assets/home/desktop/e-commerce.png";
</script>
