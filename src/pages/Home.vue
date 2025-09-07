<template>
  <div class="w-full flex flex-col">
    <Hero />
    <div class="px-6 md:px-20 lg:px-40 flex flex-col gap-16 md:gap-24 lg:gap-36">
      <div class="pt-12 md:pt-16 lg:pt-20">
        <Categories />
      </div>
      <div class="w-full space-y-8 md:space-y-10 lg:space-y-12">
        <Banner />
        <CtaSpeaker />
        <EarphoneBanner />
      </div>
      <Info />
      <div></div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Categories from "../components/Categories.vue";
import Banner from "../components/Banner.vue";
import CtaSpeaker from "../components/CtaSpeaker.vue";
import EarphoneBanner from "../components/EarphoneBanner.vue";
import Info from "../components/Info.vue";
</script>
