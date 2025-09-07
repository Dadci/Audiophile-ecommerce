<template>
  <div class="bg-[#D87D4A] p-8 md:p-12 lg:p-16 rounded-lg w-full relative overflow-hidden">
    <div class="absolute inset-0 -top-8 md:-top-14 -left-10 md:-left-20">
      <img
        :src="Pattern"
        alt=""
        class="w-[80%] md:w-[60%] hover:scale-110 transition-transform duration-400"
      />
    </div>

    <div class="w-full flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 lg:p-16 gap-8 lg:gap-0">
      <div class="w-full lg:w-[50%] relative flex justify-center lg:justify-start">
        <img :src="Speaker" alt="" class="relative lg:absolute lg:-top-42 lg:-left-12 w-[50%] md:w-[40%] lg:w-[75%]" />
      </div>
      <div class="flex flex-col items-center lg:items-start gap-4 md:gap-6 text-center lg:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white tracking-widest">
          ZX9 <br />
          SPEAKER
        </h1>
        <p class="text-sm md:text-[15px] font-medium text-white/75 max-w-sm lg:max-w-sm">
          Upgrade to premium speakers that are 
          phenomenally built to deliver truly remarkable 
          sound.
        </p>
        <button
          class="bg-black hover:bg-black/70 tracking-wider py-3 md:py-4 px-6 md:px-8 text-white font-bold text-xs md:text-[13px] cursor-pointer z-10"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pattern from "../assets/home/desktop/pattern-circles.svg";
import Speaker from "../assets/home/desktop/image-speaker-zx9.png";
</script>
