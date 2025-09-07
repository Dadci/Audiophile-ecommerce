<template>
  <div class="flex flex-col items-center px-6 md:px-20 lg:px-40 bg-[#131313] w-full py-12 md:py-16 gap-6 md:gap-9">
    <div class="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full gap-6 md:gap-0">
      <img :src="Logo" alt="Logo" class="w-32 md:w-auto" />
      <ul
        class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 uppercase font-bold text-xs md:text-[13px] cursor-pointer"
      >
        <li><router-link to="/" class="text-white hover:text-[#D87D4A]">Home</router-link></li>
        <li>
          <router-link to="/headphones" class="text-white hover:text-[#D87D4A]">HEADPHONES</router-link>
        </li>
        <li>
          <router-link to="/speakers" class="text-white hover:text-[#D87D4A]">SPEAKERS</router-link>
        </li>
        <li>
          <router-link to="/earphones" class="text-white hover:text-[#D87D4A]">EARPHONES</router-link>
        </li>
      </ul>
    </div>
    <div class="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between w-full gap-6 lg:gap-0">
      <p class="text-gray-500 text-sm text-center lg:text-left leading-7 max-w-lg lg:max-w-none">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to helping you get
        the most out of personal audio. Come and visit our demo facility - we're
        open 7 days a week.
      </p>
      <div class="flex items-center justify-center gap-4">
        <a href="#"><img :src="facebook" alt="Facebook" class="w-5 md:w-6" /></a>
        <a href="#"><img :src="twitter" alt="Twitter" class="w-5 md:w-6" /></a>
        <a href="#"><img :src="instagram" alt="Instagram" class="w-5 md:w-6" /></a>
      </div>
    </div>
    <div class="flex items-start justify-center lg:justify-start w-full">
      <p class="text-gray-500 text-xs md:text-sm">Copyright 2021. All Rights Reserved</p>
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/shared/desktop/logo.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
</script>
