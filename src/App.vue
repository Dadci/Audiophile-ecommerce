<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="w-full min-h-screen flex flex-col ">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
