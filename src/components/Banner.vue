<template>
  <div class="bg-[#D87D4A] p-16 rounded-lg w-full relative overflow-hidden">
    <div class="absolute inset-0 -top-14 -left-20">
      <img
        :src="Pattern"
        alt=""
        class="w-[60%] hover:scale-110 transition-transform duration-400"
      />
    </div>

    <div class="w-full flex flex-row items-center justify-center p-16">
      <div class="w-[50%] relative">
        <img :src="Speaker" alt="" class="absolute -top-38 -left-20 w-[75%]" />
      </div>
      <div class="flex flex-col items-start gap-6">
        <h1 class="text-5xl font-bold uppercase text-white tracking-widest">
          ZX9 <br />
          SPEAKER
        </h1>
        <p class="text-[15px] font-medium text-white/75">
          Upgrade to premium speakers that are <br />
          phenomenally built to deliver truly remarkable <br />
          sound.
        </p>
        <button
          class="bg-black hover:bg-black/70 tracking-wider py-4 px-8 text-white font-bold text-[13px] cursor-pointer z-10"
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
