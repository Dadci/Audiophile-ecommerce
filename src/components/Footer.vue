<template>
  <div class="flex flex-col items-center px-40 bg-[#131313] w-full py-16 gap-9">
    <div class="flex items-center justify-between w-full">
      <img :src="Logo" alt="Logo" class="" />
      <ul
        class="flex space-x-8 uppercase font-bold text-[13px] hover:text-[#D87D4A] cursor-pointer"
      >
        <li><a href="#" class="text-white hover:text-[#D87D4A]">Home</a></li>
        <li>
          <a href="#" class="text-white hover:text-[#D87D4A]">HEADPHONES</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-[#D87D4A]">SPEAKERS</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-[#D87D4A]">EARPHONES</a>
        </li>
      </ul>
    </div>
    <div class="flex items-end justify-between w-full">
      <p class="text-gray-500 text-sm leading-7">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team <br />
        of music lovers and sound specialists who are devoted to helping you get
        the <br />
        most out of personal audio. Come and visit our demo facility - we’re
        open 7 <br />
        days a week.
      </p>
      <div class="flex items-center justify-center gap-4">
        <a href="#"><img :src="facebook" alt="Facebook" class="w-6" /></a>
        <a href="#"><img :src="twitter" alt="Twitter" class="w-6" /></a>
        <a href="#"><img :src="instagram" alt="Instagram" class="w-6" /></a>
      </div>
    </div>
    <div class="flex items-start self-start">
      <p class="text-gray-500 text-sm">Copyright 2021. All Rights Reserved</p>
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/shared/desktop/logo.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
</script>
