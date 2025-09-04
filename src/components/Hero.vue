<template>
  <div class="flex flex-row items-center justify-between w-full px-40  bg-[#131313]">
    <div class="flex flex-col items-start gap-6">
        <p class="text-sm font-normal text-white/50 tracking-[0.4em]">NEW PRODUCT</p>
      <h1 class="text-6xl font-bold uppercase text-white tracking-widest">
        XX99 Mark II Headphones
      </h1>
      <p class="text-[15px] font-medium  text-white/75">Experience natural, lifelike audio and exceptional <br> build quality made for the passionate music <br> enthusiast.</p>
      <button class="bg-[#D87D4A] hover:bg-[#D87D4A]/90 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer">SEE PRODUCT</button>
    </div>

    <div class="w-full h-full flex justify-end">
      <img :src="HeroImage" alt="Hero Image" class="w-[85%] "  />
    </div>
  </div>
</template>

<script setup>
import HeroImage from "../assets/home/desktop/e-commerce.png";
</script>
