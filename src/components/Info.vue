<template>
  <div class="flex flex-row items-center justify-between w-full gap-8">
    <div class="flex flex-col items-start gap-8 w-1/2">
      <h1 class="text-black font-bold text-4xl tracking-widest uppercase">
        Bringing you the <br />
        <span class="text-[#D87D4A]">best</span> audio gear
      </h1>
      <p class="text-gray-500 text-[15px] font-normal leading-7">
        Located at the heart of New York City, Audiophile is the premier <br />
        store for high end headphones, earphones, speakers, and audio <br />
        accessories. We have a large showroom and luxury <br />
        demonstration rooms available for you to browse and <br />
        experience a wide range of our products. Stop by our store to <br />
        meet some of the fantastic people who make Audiophile the <br />
        best place to buy your portable audio equipment.
      </p>
    </div>
    <div class="w-1/2">
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
