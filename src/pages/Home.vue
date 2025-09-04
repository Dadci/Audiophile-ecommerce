<template>
  <div class="w-full flex flex-col">
    <Hero />
    <div class="px-40 flex flex-col gap-36">
      <div class="pt-20">
        <Categories />
      </div>
      <div class="w-full space-y-12">
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
