<template>
  <div class="flex flex-row items-center justify-center gap-8 w-full h-80">
    <div class="w-1/2 h-full rounded-lg overflow-hidden">
      <img
        :src="earPhone"
        alt=""
        class="rounded-lg w-full h-full object-cover"
      />
    </div>
    <div
      class="w-1/2 h-full rounded-lg bg-gray-100 flex flex-col items-start justify-center gap-8 p-24"
    >
      <h1 class="text-black font-bold text-3xl tracking-widest">
        YX1 EARPHONES
      </h1>
      <button
        class="bg-transparent tracking-wider py-4 px-8 text-black border font-bold text-[13px] cursor-pointer border-black hover:bg-black hover:text-white transition"
      >
        SEE PRODUCT
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import earPhone from "../assets/home/desktop/image-earphones-yx1.jpg";
</script>
