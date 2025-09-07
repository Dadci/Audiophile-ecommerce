<template>
  <div class="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-8">
    <div class="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
      <h1 class="text-black font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
        Bringing you the <br />
        <span class="text-[#D87D4A]">best</span> audio gear
      </h1>
      <p class="text-gray-500 text-sm md:text-[15px] font-normal leading-7 max-w-lg lg:max-w-none">
        Located at the heart of New York City, Audiophile is the premier 
        store for high end headphones, earphones, speakers, and audio 
        accessories. We have a large showroom and luxury 
        demonstration rooms available for you to browse and 
        experience a wide range of our products. Stop by our store to 
        meet some of the fantastic people who make Audiophile the 
        best place to buy your portable audio equipment.
      </p>
    </div>
    <div class="w-full lg:w-1/2 order-1 lg:order-2">
      <img
        :src="bestAudio"
        alt="Best Audio Gear"
        class="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import bestAudio from "../assets/shared/desktop/image-best-gear.jpg";
</script>
